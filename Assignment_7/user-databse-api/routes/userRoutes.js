const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET all users
router.get("/", async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
});

// POST new user
router.post("/", async (req,res)=>{
    const { name, email } = req.body;

    if(!name || !email){
        return res.status(400).json({ message: "Name and email required" });
    }

    const user = new User({ name, email });

    try{
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch(err){
        res.status(400).json({ message: err.message });
    }
});

// PUT update user
router.put("/:id", async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({ message:"User not found" });

        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        const updatedUser = await user.save();
        res.json(updatedUser);

    } catch(err){
        res.status(400).json({ message: err.message });
    }
});

// DELETE user
router.delete("/:id", async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({ message:"User not found" });

        await user.remove();
        res.json({ message:"User deleted" });

    } catch(err){
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;