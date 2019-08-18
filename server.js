var express = require("express");
var mongojs = require("mongojs");
var axios = require("axios");
var cheerio = require("cheerio");

var app = express();

var databaseUrl = "nytScraper";
var collections = ["scrapedData"];

var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
    console.log("Database Error: ", error);
});

app.get("/", function(req, res) {
    res.render("home", {        
    });
})