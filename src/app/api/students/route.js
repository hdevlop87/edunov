import dbConnect from '@/lib/connectDB';
import Student from '@/models/studentModel';
import Class from '@/models/classModel';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
    let students;
    const { searchParams } = new URL(req.url);
    try {
        await dbConnect();
        const teacherId = searchParams.get('teacherId');
        const classId = searchParams.get('classId');
        if (classId) {
            students = await Student.find({ 'classes.classId': classId });
        }
        else if (teacherId) {
            students = await Student.find({ teacherId: teacherId });
        }

        return NextResponse.json({ success: true, data: students });

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}

export const POST = async (req) => {
    try {
        const body = await req.json();
        const { email, teacherId, classSelectedID } = body;

        const existingStudent = await Student.findOne({
            email,
            'teacherId': teacherId,
        });

        if (existingStudent) {
            return NextResponse.json({success: false,message: 'A student with the same email already exists for this teacher.',});
        }
        else {
            const studentData = {...body,password: '123456'};
            const student = await Student.create(studentData);
            const existingUser = await User.findOne({ email });

            if (!existingUser) {
                await User.create({
                    email: student.email,
                    password: student.password,
                    avatar: student.avatar,
                    name: student.name,
                    role: 'student',
                });
            }

            await Class.findByIdAndUpdate(classSelectedID, {
                $push: { studentIds: student._id },
                $inc: { studentCount: 1 },
            });
            return NextResponse.json({ success: true, data: student });
        }
    }
    catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}

export const DELETE = async (req) => {
    try {
        await Student.deleteMany({});
        return NextResponse.json({ success: true, message: 'All Students have been deleted.' });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}