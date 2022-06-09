const food = require('../models/food');

// TODO: add new a topic
// // FOOD_ID,FOOD_NAME,FOOD_PRICE,FOOD_DETAIL,FOOD_IMAGE
module.exports = {
    createfood: (req, res) => {
        try {
            // get request body
            const {FOOD_ID,FOOD_NAME,FOOD_PRICE,FOOD_DETAIL,FOOD_IMAGE} = req.body;

             // create new food
            const food = new food({
                FOOD_ID,FOOD_NAME,FOOD_PRICE,FOOD_DETAIL,FOOD_IMAGE
            });

            // save food
            food.save();

            // check status and return new food
            return res.status(201).json({ message: "Create new food successfully" });
            
        } catch (error) {
            console.error(error);
        }

    },
    // get all info of the food
    getAllfood: async (req, res) => {
        try {
            let food = await food.find();
            res.status(200).json(food);
        } catch (error) {
            res.status(500).json(err);
        }
    },
    // get one info of the food
      getOne: async (req, res) => {
        try {
            let food = await food.findById(req.params.id);
            res.status(200).json(food);
        } catch (err) {
            res.status(500).json(err);
            console.log(error);
        }
    },
      //   update one
      updateOne: async (req, res) => {
        try {
            await food.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json("food updated successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //  delete one
    deleteOne: async (req, res) => {
        try {
            let topic = await food.findById(req.params.id);
            await topic.delete();
            res.status(200).json("food deleted successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    },

     //  get one
     getSongInfood: async (req, res) => {
        try {
            let food = await food.find().populate("song_id");
            res.status(200).json(food);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}