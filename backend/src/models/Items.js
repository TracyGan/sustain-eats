import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  pickupTime: {
    type: Date,
    required: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("item", ItemSchema);
