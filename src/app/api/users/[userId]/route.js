
import dbConnect from '@/lib/connectDB';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';


export const GET = async (req, { params }) => {
    await dbConnect();
    const userId = params.userId;
    try {
        const singleUser = await User.findById(userId);
        if (!singleUser) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: singleUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: `Error retrieving user: ${userId}` }, { status: 500 });
    }
};

export const PUT = async (req, { params }) => {
    const userId = params.userId;
    const updatedData =  await req.json();

    console.log(updatedData);

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true});

        if (!updatedUser) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: updatedUser, message: 'User updated successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: `Error updating user: ${userId}` }, { status: 500 });
    }
};

export const DELETE = async (req, { params }) => {
    const userId = params.userId;

    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: null, message: 'User deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: `Error deleting user: ${userId}` }, { status: 500 });
    }
};


