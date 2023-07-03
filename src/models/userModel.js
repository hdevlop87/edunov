import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const { Schema } = mongoose;

const UserSchema = new Schema({
   name: {
      type: String,
      trim: true,
      default: ''
   },
   email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   role: {
      type: String,
      enum: ['admin','student', 'teacher'],
      default: 'teacher'
   },
   avatar: {
      type: String,
      default: ''
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
});

UserSchema.pre('save', async function (next) {

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



var User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;