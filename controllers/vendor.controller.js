const User = require('../models/User');
const Restaurant = require('../models/restaurants');

exports.renderVendorPage = function (req,res) {
    var userInfo = req.user.email
    var name     = req.user.name
    User.findOne({email:userInfo},function(err,foundUser){
    if(foundUser.vendor === "no"){
      console.log("For Vendors Only")
      res.redirect('home')
    }else{
      Restaurant.find({},function(err,foundrestaurant){
        res.render("vendor",{newListItems:foundrestaurant,name:name})
      })
      
    }
  })
}

exports.renderRestCreatePage = function (req,res) {
    var userInfo = req.user.email
    User.findOne({email:userInfo},function(err,foundUser){
    if(foundUser.vendor === "no"){
      res.redirect("home")
    }else{
      res.render("vendorResCreate")
    }
  })
}

exports.createResturant = function (req,res) {
    var restaurantName = req.body.restaurantname;
               // Product One
  var prodOnename = req.body.productOneName;
  var prodOnePrice = req.body.productOnePrice;
  var prodOneimageurl = req.body.productOneImageurl;
                // Product Two
  var prodTwoname = req.body.productTwoName;
  var prodTwoPrice = req.body.productTwoPrice;
  var prodTwoimageurl = req.body.productTwoImageurl;
                // Product Three
  var prodThreename = req.body.productThreeName;
  var prodThreePrice = req.body.productThreePrice;
  var prodThreeimageurl = req.body.productThreeImageurl;
                 //Product Four
  var prodFourname = req.body.productFourName;
  var prodFourPrice = req.body.productFourPrice;
  var prodFourimageurl = req.body.productFourImageurl;
                 // Product Five
  var prodFivename = req.body.productFiveName;
  var prodFivePrice = req.body.productFivePrice;
  var prodFiveimageurl = req.body.productFiveImageurl;
                // Product Six
  var prodSixname = req.body.productSixName;
  var prodSixPrice = req.body.productSixPrice;
  var prodSiximageurl = req.body.productSixImageurl;

  var owner = req.body.vendorname;
  var address = req.body.storeaddress;

  var CreateRestaurant = Restaurant({
    restaurantName    :  restaurantName,
    restaurantaddress :  address,
    vendorname        :  owner,

    productOneName:      prodOnename,
    productOnePrice:     prodOnePrice,
    productOneimageurl:  prodOneimageurl,

    productTwoName:       prodTwoname,
    productTwoPrice:      prodTwoPrice,
    productTwoimageurl:   prodTwoimageurl,

    productThreeName:     prodThreename,
    productThreePrice:    prodThreePrice,
    productThreeimageurl: prodThreeimageurl,

    productFourName:      prodFourname,
    productFourPrice:     prodFourPrice,
    productFourimageurl:  prodFourimageurl,

    productFiveName:      prodFivename,
    productFivePrice:     prodFivePrice,
    productFiveimageurl:  prodFiveimageurl,

    productSixName:       prodSixname,
    productSixPrice:      prodSixPrice,
    productSiximageurl:   prodSiximageurl

  });

  CreateRestaurant.save();
  console.log("restaurant have successfully created")
  res.render("vendorsuccess",{Subject:"Your"+" "+restaurantName+" "+"have been successfully upload to ECE GRUBHUB.",
                          message:"As Always Thank you choosing Rutgers ECE "});
}