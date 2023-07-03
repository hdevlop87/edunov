import dbConnect from '@/lib/connectDB';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';

export const GET = async () => {
    let users;
    try {
        await dbConnect();
        users = await User.find();
        return NextResponse.json({ success: true, data: users });

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}

export const POST = async (req) => {

    const userData = await req.json();

    const {email } = userData;

    try {
        await dbConnect();
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ success: false, message: 'User with this email already exists' });
        }
        const newUser = new User(userData);
        await newUser.save();
        return NextResponse.json({ success: true, message: 'User created successfully' });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
};

export const DELETE = async (req) => {
    try {
        await User.deleteMany({});
        return NextResponse.json({ success: true, message: 'All Students have been deleted.' });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}