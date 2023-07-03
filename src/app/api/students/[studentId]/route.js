// [studentId].js
import dbConnect from '@/lib/connectDB';
import Student from '@/models/studentModel';
import Class from '@/models/classModel';
import { NextResponse } from 'next/server';


export const DELETE = async (req, { params }) => {
    const studentId = params.studentId
    try {
        await dbConnect();
        const deletedStudent = await Student.findByIdAndDelete(studentId);

        if (!deletedStudent) {
            return NextResponse.json({ success: false, message: 'Student not found' });
        }

        await Class.updateMany(
            { studentIds: studentId },
            { $pull: { studentIds: studentId }, $inc: { studentCount: -1 } }
        );

        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}

// const studentHandler = async (req, res) => {
//     const {
//         method,
//         query: { studentId },
//     } = req;

//     switch (method) {
//         case 'GET':
//             try {
//                 const singleStudent = await Student.findById(studentId);
//                 if (!singleStudent) {
//                     return res.status(404).json({ success: false, message: 'Student not found' });
//                 }
//                 res.status(200).json({ success: true, data: singleStudent });
//             } catch (error) {
//                 res.status(400).json({ success: false, message: error.message });
//             }
//             break;

//         case 'PUT':
//             try {
//                 const student = await Student.findByIdAndUpdate(studentId, req.body, {
//                     new: true,
//                     runValidators: true,
//                 });

//                 if (!student) {
//                     return res.status(404).json({ success: false, message: 'Student not found' });
//                 }

//                 res.status(200).json({ success: true, data: student });
//             } catch (error) {
//                 res.status(400).json({ success: false, message: error.message });
//             }
//             break;

//         default:
//             res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
//             res.status(405).json({ success: false, message: `Method ${method} not allowed` });
//     }
// };
