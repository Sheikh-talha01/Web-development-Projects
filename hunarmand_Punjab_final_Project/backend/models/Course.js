const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    category: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    lessons: [{
        title: { type: String, required: true },
        content: { type: String }, // Can be URL or text
        order: { type: Number }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
