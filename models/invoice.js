const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var invoiceSchema = new mongoose.Schema({
  restaurantname      : String,
  email               : String,
  ordernumber         : String,
  username            : String,
  deliveryaddress     : String,
  productOnename      : String,
  productOnequantity  : Number,
  productTwoname      : String,
  productTwoquantity  : Number,
  productThreename    : String,
  productThreequantity: Number,
  productFourname     : String,
  productFourquantity : Number,
  productFivename     : String,
  productFivequantity : Number,
  productSixname      : String,
  productSixquantity  : Number,
  bill                : Number

});


const Invoice = new mongoose.model("Invoice",invoiceSchema);
module.exports = Invoice;
