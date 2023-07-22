# UNDER CONSTRUCTION

### Saturday July 15, 2023

#

# Databases: Embedded vs Server

Who gets the data? Like, physically. 

That's the question we're trying to answer here. And it's probably the most overlooked question when it comes to types of databases. It's asking whether you want to use SQLite or MySQL. What's the difference? Where your data is stored.

## The Client/Server Model

### MySQL - MongoDB -  DynamoDB - Neo4j

You're putting your pictures on a server somewhere (God knows where, but probably within a couple hundred miles) and getting them with an internet connection. 

If you've ever had to sign in to anything like Amazon or Instagram, you've probably used a database that follows the client/server model. This is where you have a **Database Server** that you can connect to, and then get your data. Pretty much any service, business, or app tht requires an internet connection uses a database with this model for some reason or another.

These databases are designed to be run as servers, either using yours or someone else's, and connected to via an internet connection. Because they're desined to be ran somewhere else, the sky's the limit on what these types of databases can due. As such, they're generally fully fledged and flush with features and have a higher overhead. And if they aren't on your device, you need a newtork connection.

## The Embedded Model

### SQLite - Core Data - MySQL - Neo4j

You're putting your pictures on your device and only your device (what are you hiding?) and getting them because they're on your phone and you don't need an internet connection.

If you've ever used your phone to take a photo or picture, download a movie, write an idea down in notes, you're probably putting it into the embedded database on your device. Pretty much any device with an SSD or Hard Disk or any long term memory storage has one. Especially phones - SQLite for Android and Core Data for iOS.

These databases are designed to be lightweight and fast for personal use. Why wait for a picture to load if you already have it on your phone? That being said, the data exists in only one place. It'd be like if Instagram had only one user - you. 

## Why is MySQL and Neo4j listed in both?

Some databases can be used as an embedded database, and some databases like SQLite are designed to feel like they run a client/server model to users. There are always applications that blur distinctions in order to get the best of both. 