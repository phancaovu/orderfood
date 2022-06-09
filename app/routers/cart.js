const express = require("express");
const router = express.Router();


const {createcart, getAllcart, getTopicIncart, getSongcart  } = require("../controller/cartcontroller");

router.post("/createcart", createcart);
router.get("/getAllcart", getAllcart);
router.get("/getOnecart/:id",getOne);
router.patch("/updateOnecart/:id",updateOne);
router.delete("/deleteOnecart/:id",deleteOne);

module.exports = router;