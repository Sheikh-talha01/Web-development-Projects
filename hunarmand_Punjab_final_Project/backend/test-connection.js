const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config({ path: path.join(__dirname, '.env') });

console.log('--- LMS Diagnostic Start ---');
console.log('1. Checking .env file...');
if (fs.existsSync(path.join(__dirname, '.env'))) {
    console.log('   [OK] .env file found.');
    console.log('   MONGO_URI:', process.env.MONGO_URI ? 'Defined' : 'MISSING');
    console.log('   JWT_SECRET:', process.env.JWT_SECRET ? 'Defined' : 'MISSING');
} else {
    console.log('   [ERROR] .env file NOT FOUND in backend folder.');
}

console.log('\n2. Testing MongoDB Connection...');
if (!process.env.MONGO_URI) {
    console.log('   [SKIP] Cannot test MongoDB without URI.');
} else {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('   [OK] Successfully connected to MongoDB.');
            process.exit(0);
        })
        .catch(err => {
            console.log('   [ERROR] MongoDB Connection Failed!');
            console.log('   Details:', err.message);
            console.log('\n--- RECOMMENDATION ---');
            console.log('If you do not have MongoDB installed on your PC, you MUST install it:');
            console.log('https://www.mongodb.com/try/download/community');
            process.exit(1);
        });
}
