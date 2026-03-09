const Course = require('../models/Course');

// @desc    Get all courses
// @route   GET /api/courses
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('instructor', 'name');
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get course by ID
// @route   GET /api/courses/:id
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate('instructor', 'name');
        if (course) res.json(course);
        else res.status(404).json({ message: 'Course not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a course
// @route   POST /api/courses
exports.createCourse = async (req, res) => {
    const { title, description, category, price } = req.body;
    try {
        const course = new Course({
            title,
            description,
            instructor: req.user._id,
            category,
            price
        });
        const createdCourse = await course.save();
        res.status(201).json(createdCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update a course
// @route   PUT /api/courses/:id
exports.updateCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (course) {
            course.title = req.body.title || course.title;
            course.description = req.body.description || course.description;
            course.category = req.body.category || course.category;
            course.price = req.body.price || course.price;

            const updatedCourse = await course.save();
            res.json(updatedCourse);
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a course
// @route   DELETE /api/courses/:id
exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (course) {
            await course.deleteOne();
            res.json({ message: 'Course removed' });
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
