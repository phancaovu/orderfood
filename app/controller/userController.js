const user = require("../models/user");

module.exports = {
    //register
    register:(req,res) =>{
        const {phoneNumber, passWord} = req.body;

        try {
            const items = new user({
                phoneNumber, passWord
            });

            items.save();

            res.status(200).json({msg: "create User success", items})

        } catch (error) {
            res.status(500).json(error)
        }
        
    },
    //Login: 
    login: async (req,res) =>{
        try {
            const User = await user.findOne({phoneNumber: req.body.phoneNumber} );
            if (!User) {
                res.status(404).json("Incorrect username");
              }
            else {
                console.log("dang nhap thanh cong")  
            }
            
            // if(User && pass){
            //     console.log("dang nhap thanh cong")
            // }
            // {password: req.params.password}
        } catch (err) {
            res.status(500).json(err);
            // res.json({
            //     message: "dang nhap that bai"
            // })
        }
    },
    createUser: async (req, res) => {

        const {phoneNumber, passWord} = req.body;

        try {
            const items = new user({
                phoneNumber, passWord 
            });

            items.save();

            res.status(200).json({msg: "create User success", items})

        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAllUser: async (req,res) => {
        try {
            let users = await user.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error)
        }
       },

}