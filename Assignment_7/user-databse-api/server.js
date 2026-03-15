const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// Connect MongoDB (local)
mongoose.connect("mongodb://127.0.0.1:27017/userdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("MongoDB Connected"))
    .catch(err=>console.log(err));

// Routes
app.use("/api/users", userRoutes);

const PORT = 3000;
app.listen(PORT, ()=>console.log("Server running on port " + PORT));