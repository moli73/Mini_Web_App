var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Bacon ipsum dolor amet chuck jowl tenderloin strip steak porchetta. Kielbasa strip steak beef ribs ham turkey t-bone flank prosciutto bresaola pork alcatra meatloaf meatball capicola. Cow pork belly pancetta swine bacon kevin shank tenderloin. Fatback rump short ribs strip steak, frankfurter tenderloin leberkas tri-tip. Jowl leberkas cupim, pork pig bresaola hamburger turducken ribeye ham. Tenderloin porchetta tail chicken jowl andouille. Corned beef spare ribs shankle porchetta sirloin."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Bacon ipsum dolor amet chuck jowl tenderloin strip steak porchetta. Kielbasa strip steak beef ribs ham turkey t-bone flank prosciutto bresaola pork alcatra meatloaf meatball capicola. Cow pork belly pancetta swine bacon kevin shank tenderloin. Fatback rump short ribs strip steak, frankfurter tenderloin leberkas tri-tip. Jowl leberkas cupim, pork pig bresaola hamburger turducken ribeye ham. Tenderloin porchetta tail chicken jowl andouille. Corned beef spare ribs shankle porchetta sirloin."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Bacon ipsum dolor amet chuck jowl tenderloin strip steak porchetta. Kielbasa strip steak beef ribs ham turkey t-bone flank prosciutto bresaola pork alcatra meatloaf meatball capicola. Cow pork belly pancetta swine bacon kevin shank tenderloin. Fatback rump short ribs strip steak, frankfurter tenderloin leberkas tri-tip. Jowl leberkas cupim, pork pig bresaola hamburger turducken ribeye ham. Tenderloin porchetta tail chicken jowl andouille. Corned beef spare ribs shankle porchetta sirloin."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;
