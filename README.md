# Yelp Camp <!-- omit in toc -->

An application for finding and reviewing camp grounds. 

## Table of Contents <!-- omit in toc -->

- [General Information](#general-information)
- [Features](#features)
- [Setup](#setup)
- [Acknowledgements](#acknowledgements)

## General Information

I built this project while following along with [The Web Developer Bootcamp 2021](https://www.udemy.com/course/the-web-developer-bootcamp) course. In the application, you are able to browse, add, edit, and review fake camp grounds. It's built with Node.js, Express and MongoDB.

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

Clone this repo to your desktop and run `npm install` to install all dependencies.

Create an `.env` file in the yelp-camp directory.

Register a Cloudinary account and add your cloudinary cloud name, cloudinary key, and cloudinary secret to the `.env` file under these keys:

```txt
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
```

Register a Mapbox account and add your Mapbox token to the `.env` file under this key:

```txt
MAPBOX_TOKEN=
```

Optionally you can add your own uploaded cloudinary images into `seeds/images.js` and then you can run `node seeds/index` to seed the DB.

After the above steps, run MongoDB locally with `mongod` and run `npm start` to start the application. You will then be able to access it at localhost:3000.

## Acknowledgements

This project was created while following along with the Yelp Camp tutorials in [The Web Developer Bootcamp 2021](https://www.udemy.com/course/the-web-developer-bootcamp) course.
