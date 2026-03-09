const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');
const User = require('./models/User');

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB for seeding...');

        // 1. Create a sample instructor
        const instructor = await User.findOneAndUpdate(
            { email: 'instructor@example.com' },
            {
                name: 'Professor Ahmed',
                email: 'instructor@example.com',
                password: 'password123',
                role: 'Instructor'
            },
            { upsert: true, new: true }
        );

        // 2. Sample Courses
        const courses = [
            {
                title: 'Full Stack Web Development',
                description: 'Learn MERN stack from scratch with real-world projects.',
                instructor: instructor._id,
                category: 'Web Development',
                price: 99
            },
            {
                title: 'Graphic Design Masterclass',
                description: 'Master Photoshop, Illustrator and UI/UX design principles.',
                instructor: instructor._id,
                category: 'Design',
                price: 49
            },
            {
                title: 'Digital Marketing Excellence',
                description: 'Strategy for SEO, Social Media, and Google Ads.',
                instructor: instructor._id,
                category: 'Marketing',
                price: 29
            }
        ];

        await Course.deleteMany(); // Clear existing
        await Course.insertMany(courses);

        console.log('--- SEEDING COMPLETE ---');
        console.log('Sample Instructor: instructor@example.com / password123');
        console.log('Check your website now!');
        process.exit();
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
};

seedData();
