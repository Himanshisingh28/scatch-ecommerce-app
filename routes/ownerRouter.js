const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if(process.env.NODE_ENV === "development");{
    router.get("/create", async function(req, res){
        let owners = await ownerModel.find();
        if (owners.length > 0){
            return res
            .status(503)
            .send("You don't have permission in create a new owner.");
        }

        let { fullname, email, password} = req.body;

        let createOwner = await ownerModel.create({
            fullname,
            email,
            password,
        });
        res.send("we can create a new owner")
    });
}


router.get("/", function(req, res){
    res.send("Working");
});


module.exports = router;