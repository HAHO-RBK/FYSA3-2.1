var mongoose = require("mongoose");

var orderSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  offer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Offer"
  },
  info: String,
  date: String,
  state: String,
  location: String
});
var Order = mongoose.model("Order", orderSchema);

module.exports.Order = Order;
