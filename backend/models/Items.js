import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  expiration_date: {
    type: Date,
    required: true,
  },
  available_date_time: {
    type: Date,
    required: true,
  },
  pickup_location: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("item", ItemSchema);

export default Item;
