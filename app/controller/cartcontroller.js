const cart = require('../models/cart');

// TODO: create a cart music

module.exports = {
    creatcart: async (req, res) => {
        // get attribute of cart 
        const { CART_ID ,CART_NAME,CART_PRICE,CART_NUMBER ,CART_IMAGE,CART_STATUS} = req.body;
        try {
            const cart = new cart({
                CART_ID ,CART_NAME,CART_PRICE,CART_NUMBER ,CART_IMAGE,CART_STATUS
            })

            // save cart in database
         cart.save();
            return res.status(201).json({ cart: cart, message: "Create new cart successfully" });
        } catch (err) {
            res.status(500).json(err);
        }
    },
      // get all info of the cart
      getAlcart: async (req, res) => {
        try {
            let cart = await cart.find().limit(4);
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json(err);
        }
    },

    // get one info of the cart
      getOne: async (req, res) => {
        try {
            let cate = await cart.findById(req.params.id);
            // let a = cart.find({topic_id: {$in: cart}})

            res.status(200).json(cate); 
        } catch (err) {
            res.status(500).json(err);
            console.log(error);
        }
    },

         //   update one
      updateOne: async (req, res) => {
        try {
            await cart.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json(" cart updated successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    },
     //  get one
     getTopicIcart: async (req, res) => {
        try {
            let cart = await cart.find().populate("topic_id");
            res.status(200).json(cart);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //  delete one
    deleteOne: async (req, res) => {
        try {
            let cate = await cart.findById(req.params.id);
            await cate.delete();
            res.status(200).json( "cart deleted successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    },



}
