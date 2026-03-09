const mongoose = require('mongoose');

const enrollmentSchema = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Course'
    },
    progress: { type: Number, default: 0 } // Percentage 0-100
}, { timestamps: true });

module.exports = mongoose.model('Enrollment', enrollmentSchema);
