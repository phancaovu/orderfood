const express = require("express");
const router = express.Router();


const { createfood, getAllfood, getOne, updateOne, deleteOne  } = require("../controller/foodcontroller");

router.post("/createfood", createfood);
router.get("/getAllfood", getAllfood);
router.get("/getOnefood/:id",getOne);
router.patch("/updateOnefood/:id",updateOne);
router.delete("/deleteOnefood/:id",deleteOne);

module.exports = router;