const mongoose = require('mongoose');
const cities = require('./cities');
const images = require('./images')
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-camp'

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
})

const sample = array => array[Math.floor(Math.random() * array.length)]

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui aperiam, nihil quisquam accusamus expedita deleniti, minima recusandae laborum adipisci molestias dolorum quam sapiente alias, cumque neque sunt eveniet doloribus voluptates!',
            price,
            geometry: {
                type: 'Point',
                coordinates: [cities[random1000].longitude, cities[random1000].latitude]
            },
            images: shuffleArray(images),
        })
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close()
});

