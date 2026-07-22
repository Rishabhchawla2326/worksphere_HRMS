const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email :{
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["admin", "hr", "employee"],
            default: "employee",
        },
        department: {
            type: String,
            required: true,
        },
        designation: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        joiningDate: {
            type: Date,
            default: Date.now,
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
        },
        mustChangePassword: {
            type: Boolean,
            default: true,
        },
        profileImage: {
            type: String,
            default: "",
        },
    
    },
    {
        timestamps: true

    }
);
module.exports = mongoose.model("User", userSchema);
