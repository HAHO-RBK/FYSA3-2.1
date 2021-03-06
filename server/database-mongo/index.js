var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var { Offer } = require("./models/offerModel.js");
var { Order } = require("./models/orderModel.js");
var { Prof } = require("./models/profModel.js");
var { User } = require("./models/userModel.js");
var { Worker } = require("./models/workerModel.js");
mongoose.connect(
  "mongodb+srv://user:Y0QIFKndntB1HIz3@cluster0.efioa.mongodb.net/DIGITAL-DEALERS?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
//
//user
//Y0QIFKndntB1HIz3

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
});

// const prof = new Prof({
//   name: "electrician",
//   workers: ["5fd21a43d7fb12085881099f"]
// });

// order.save();

var insertOffer = function (data) {
  return Offer.create(data);
};

var getAllOffers = function () {
  return Offer.find({});
};

var getOffersByWorkerId = function (id) {
  return Offer.find({ worker_id: id });
};

var deleteOfferById = function (id) {
  return Offer.findByIdAndDelete(id);
};

var selectAllProf = function (callback) {
  Prof.find({})
    .populate("workers")
    .exec((err, prof) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, prof);
      }
    });
};
var addProf = (data, callback) => {
  var newprof = new Prof(data);
  newprof.save(callback);
};
var deleteProf = (id, callback) => {
  Prof.findByIdAndDelete(id).exec(callback);
};
var updateProf = (id, data, callback) => {
  var updatedata = new Prof(data);
  Prof.findOneAndUpdate({ _id: id }, updatedata, { upsert: true }, callback);
};
var findAllWorker = (callback) => {
  Worker.find().populate("prof").exec(callback);
};
var selectOneWorker = function (worker, callback) {
  Worker.findOne({ username: worker.username }, function (err, result) {
    if (err) {
      console.log("error while searching worker");
      callback(err, null);
    } else {
      // if (result) {
      // }
      console.log("db: Worker found:");
      console.log(result);
      callback(null, result);
    }
  });
};
var findAllUser = function (callback) {
  User.find({}).exec(callback);
};
var banUser = async (id, callback) => {
  const user = await User.findOne({ _id: id });
  User.findByIdAndUpdate(id, { $set: { ban: !user.ban } }, callback);
};
var banWorker = async (id, callback) => {
  const user = await Worker.findOne({ _id: id });
  Worker.findByIdAndUpdate(id, { $set: { ban: !user.ban } }, callback);
};
var selectOneUser = function (user, callback) {
  console.log("Yooo");
  User.findOne({ username: user.username }, function (err, result) {
    if (err) {
      console.log("error while searching user");
      callback(err, null);
    } else {
      // if (result) {
      // }
      console.log("db: User found:");
      console.log(result);
      callback(null, result);
    }
  });
};

const addWorker = function (worker, callback) {
  var profile = new Worker(worker);
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(profile.password, salt, function (err, hash) {
      profile.password = hash;
      profile.save((err, profile) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, profile);
        }
      });
    });
  });
};
const addOrder = function (order, callback) {
  var myorder = new Order(order);
  myorder.save((err, order) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, order);
    }
  });
};

const addUser = function (user, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      User.create(user)
        .then((res) => {
          callback(null, res);
        })
        .catch((err) => {
          console.log(err);
          callback(err, null);
        });
    });
  });
};

var selectAllOrders = function (callback) {
  Order.find()
    .populate("offer")
    .populate("user")
    .exec((err, orders) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, orders);
      }
    });

  // Order.find({}, function (err, orders) {
  //   if (err) {
  //     callback(err, null);
  //   } else {
  //     callback(null, orders);
  //   }
  // });
};

var selectWorkerPandingOrders = function (data, callback) {
  Order.find({ worker_id: data, state: "pending" })
    .populate("user_id")
    .exec((err, orders) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, orders);
      }
    });
};
var selectWorkerDoingOrders = function (data, callback) {
  Order.find({ worker_id: data, state: "doing" })
    .populate("user_id")
    .exec((err, orders) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, orders);
      }
    });
};
var selectWorkerDoneOrders = function (data, callback) {
  Order.find({ worker_id: data, state: "done" })
    .populate("user_id")
    .exec((err, orders) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, orders);
      }
    });
};

var selectUserOrders = function (data, callback) {
  Order.find({ user_id: data })
    .populate("worker_id")
    .exec((err, orders) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, orders);
      }
    });
};
var updateUser = async function (user, callback) {
  var userid = user._id;
  delete user._id;
  console.log(user);
  const res = await User.replaceOne({ _id: userid }, user);
  callback(res);
};
var updateWorker = async function (worker, callback) {
  var workerid = worker._id;
  delete worker._id;
  console.log(worker);
  const res = await Worker.replaceOne({ _id: workerid }, worker);
  callback(res);
};
var updateOrder = function (data, callback) {
  Order.findOneAndUpdate(
    { _id: data.id },
    { state: data.state },
    function (err, orders) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, orders);
      }
    }
  );
};

module.exports.addWorker = addWorker;
module.exports.addUser = addUser;
module.exports.updateWorker = updateWorker;
module.exports.updateUser = updateUser;
module.exports.addOrder = addOrder;
module.exports.updateOrder = updateOrder;
module.exports.selectOneUser = selectOneUser;
module.exports.selectAllProf = selectAllProf;
module.exports.selectOneWorker = selectOneWorker;
module.exports.selectAllOrders = selectAllOrders;
module.exports.selectWorkerPandingOrders = selectWorkerPandingOrders;
module.exports.selectWorkerDoingOrders = selectWorkerDoingOrders;
module.exports.selectWorkerDoneOrders = selectWorkerDoneOrders;
module.exports.selectUserOrders = selectUserOrders;
module.exports.insertOffer = insertOffer;
module.exports.findAllUser = findAllUser;
module.exports.findAllWorker = findAllWorker;
module.exports.addProf = addProf;
module.exports.deleteProf = deleteProf;
module.exports.updateProf = updateProf;
module.exports.banUser = banUser;
module.exports.banWorker = banWorker;
module.exports.getOffersByWorkerId = getOffersByWorkerId;
module.exports.getAllOffers = getAllOffers;
module.exports.deleteOfferById = deleteOfferById;
