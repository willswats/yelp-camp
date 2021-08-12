
# Yelp Camp

An Express web application featuring full CRUD functionality, as well as image uploading capabilities, styled with Bootstrap and CSS. Browse campgrounds and view their details, or with an account you can add campgrounds, upload images, make reviews, and much more. Live project [_here_](https://to-do-app-willswats.herokuapp.com/).

Live project [_here_](https://yelp-camp-willswats.herokuapp.com/).

## Table of Contents

- [Yelp Camp](#yelp-camp)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Features](#features)
  - [Setup](#setup)
  - [Acknowledgements](#acknowledgements)

## General Information

I built this project while following along with [The Web Developer Bootcamp 2021](https://www.udemy.com/course/the-web-developer-bootcamp) course. The app's purpose is to be a list of campgrounds which you can add to, or view details about each one, such as the reviews, the location it's in, and where it is on the map.

## Features

- Full CRUD functionality
- Full statefulness through MongoDB
- Account creation
- Authentication
- Authorization
- Image uploads via cloudinary
- Mapbox GL JS
- Reviews

## Setup

Clone this repo to your desktop and run ```npm install``` to install all dependencies.

Create an ```.env``` file in the yelp-camp directory.

Register a Cloudinary account and add your cloudinary cloud name, cloudinary key, and cloudinary secret to the ```.env``` file under these keys:

```txt
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
```

Register a Mapbox account and add your Mapbox token to the ```.env``` file under this key:

```txt
MAPBOX_TOKEN=
```

Optionally you can add your own uploaded cloudinary images into ```seeds/images.js``` and then you can run ```node seeds/index``` to seed the DB.

After the above steps, run MongoDB locally with ```mongod``` and run ```npm start``` to start the application. You will then be able to access it at localhost:3000.

## Acknowledgements

This project was based on the Yelp Camp tutorials in [The Web Developer Bootcamp 2021](https://www.udemy.com/course/the-web-developer-bootcamp) course.
