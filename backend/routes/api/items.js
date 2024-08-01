import express from "express";
const router = express.Router();

// Load Item model
import Item from "../../models/Items.js";

// @route GET api/books/test
// @desc Tests items route
// @access Public
router.get("/test", (req, res) => res.send("item route testing!"));

// @route GET api/books
// @desc Get all items
// @access Public
router.get("/", (req, res) => {
  Item.find()
    .then((books) => res.json(items))
    .catch((err) => res.status(404).json({ noitemsfound: "No items found" }));
});

// @route GET api/items/:id
// @desc Get single item by id
// @access Public
router.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => es.status(404).json({ noitemsfound: "No items found" }));
});

// @route POST api/items
// @desc Add/save items
// @access Public
router.post("/", (req, res) => {
  Item.create(req.body)
    .then((item) => res.json({ msg: "Item added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this item" }));
});

// @route PUT api/items/:id
// @desc Update item by id
// @access Public
router.put("/:id", (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the database" })
    );
});

router.delete("/:id", (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then((book) => res.json({ msg: "Item entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such item" }));
});

export default router;
