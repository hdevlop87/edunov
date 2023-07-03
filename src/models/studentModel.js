import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const { Schema } = mongoose;

const StudentSchema = new Schema({
   name: {
      type: String,
      required: false,
      trim: true,
   },
   email: {
      type: String,
      required: true,
      lowercase: true,
   },
   password: {
      type: String,
      required: true,
   },
   points: {
      type: Number,
      default: 0,
   },
   classes: [
      {
         className: {
            type: String,
            required: true,
         },
         classId: {
            type: String,
            required: true,
         },
      },
   ],
   teacherId: {
      type: String, // Change this from ObjectId to String
      required: true,
   },
   avatar: {
      type: String,
      trim: true,
      default: ''
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
}, {
   timestamps: true
});

// Add a pre-save hook to hash the password
StudentSchema.pre('save', async function (next) {
   if (!this.isModified('password')) {
      return next();
   }
   
   try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
   } catch (error) {
      return next(error);
   }
   next();
});

StudentSchema.index({ email: 1, 'classes.classId': 1 }, { unique: true });
var Student = mongoose.models.Student || mongoose.model('Student', StudentSchema);

export default Student;