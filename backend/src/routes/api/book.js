import express from "express";
const router = express.Router();

// Loading Item Model
import Item from "../../models/Items";

// @route GET api/items/test
// @desc Tests items route
// @access Public
router.get("/test", (req, res) => res.send("item route testing!"));

// @route GET api/items
// @desc Get all items
// @access Public
router.get("/", (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json({ noitemsfound: "No Items found" }));
});

// @route POST api/items
// @desc Add items
// @access Public
router.post("/", (req, res) => {
  Item.create(req.body)
    .then((item) => res.json({ msg: "Item added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add the item" }));
});

// @route DELETE api/items/:id
// @desc Delete items by id
// @access Public
router.delete("/:id", (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then((item) => res.json({ msgs: "Item entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such item" }));
});
