const mongoose = require('mongoose');
const cities = require('./cities');
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

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 100; i++) {
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
            images: [
                {
                    url: "https://res.cloudinary.com/deoqtytv1/image/upload/v1625226980/YelpCamp/dino-reichmuth-5Rhl-kSRydQ-unsplash_c4cmgi.jpg",
                    filename: "YelpCamp/dino-reichmuth-5Rhl-kSRydQ-unsplash_c4cmgi.jpg"
                },
                {
                    url: "https://res.cloudinary.com/deoqtytv1/image/upload/v1625226973/YelpCamp/scott-goodwill-y8Ngwq34_Ak-unsplash_c3ydfk.jpg",
                    filename: "YelpCamp/scott-goodwill-y8Ngwq34_Ak-unsplash_c3ydfk"
                }
            ]
        })
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close()
});

