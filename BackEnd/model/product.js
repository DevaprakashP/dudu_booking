const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    place: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: String, required: true },
    timing: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    reviews: { type: String, required: true },
    feedback: { type: String, required: true },
    rating: { type: String, required: true },
    image: { type: Object, required: true },
    image1: { type: Object, required: true },
    image2: { type: Object, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
exports.Product = Product;

const userSchema = new mongoose.Schema(
  {
    address: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
    country: { type: String, required: true },
    mobile: { type: String, required: true },
    hotel_id: { type: String, required: true },
    user_id: { type: String, required: true },
    hotel_name: { type: String, required: true },
    user_name: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    place: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const UserData = mongoose.model("UserData", userSchema);
exports.UserData = UserData;

const authSchema = new mongoose.Schema(
  {
    Username: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    userType: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const AuthData = mongoose.model("AuthData", authSchema);
exports.AuthData = AuthData;
