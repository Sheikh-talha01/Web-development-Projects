const Enrollment = require('../models/Enrollment');

// @desc    Enroll in a course
// @route   POST /api/enroll
exports.enrollCourse = async (req, res) => {
    const { courseId } = req.body;
    try {
        const alreadyEnrolled = await Enrollment.findOne({ student: req.user._id, course: courseId });
        if (alreadyEnrolled) return res.status(400).json({ message: 'Already enrolled' });

        const enrollment = await Enrollment.create({
            student: req.user._id,
            course: courseId
        });
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get my courses
// @route   GET /api/enroll/my-courses
exports.getMyCourses = async (req, res) => {
    try {
        const enrollments = await Enrollment.find({ student: req.user._id }).populate('course');
        res.json(enrollments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
