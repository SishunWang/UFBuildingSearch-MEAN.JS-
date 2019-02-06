/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
mongoose = require('mongoose'), 
Schema = mongoose.Schema, 
Listing = require('./ListingSchema.js'), 
assert = require('assert'),
config = require('./config');


/* Connect to your database */
mongoose.connect(config.db.uri);



var findLibraryWest = function() {
  Listing.find({name:"Library West"},function(err,listings){
    if(err) throw err;
  console.log(listings);
  });
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};
var removeCable = function() {
  Listing.findOneAndRemove({code:'CABL'},function(err){
    if(err) throw err;
      console.log('Deleted!');
  });
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsMemorial = function() {
  Listing.findOneAndUpdate({name:"Phelps Laboratory"},{address:"ILoveU"},function(err,listings){
    if(err) throw err;
      console.log(listings);
  });


  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
  Listing.find({},function(err,listings){
    if(err) throw err;
    console.log(listings);
  });
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};


findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();