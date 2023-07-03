import mongoose from 'mongoose';
import Student from './studentModel';

const { Schema, models, model } = mongoose;

const ClassSchema = new Schema({
   name: {
      type: String,
      trim: true,
      required: true
   },
   grade: {
      type: String,
      trim: true,
      required: true
   },
   subject: {
      type: String,
      trim: true,
      default: '',
      required: false
   },
   teacherId: {
      type: String,
      ref: 'User',
      required: true
   },
   studentIds: [
      {
         type: String,
         ref: 'User'
      }
   ],
   studentCount: {
      type: Number,
      default: 0
   },

   tpWorkIds: [
      {
         type: String,
         ref: 'User'
      }
   ],
   tpWorkCount: {
      type: Number,
      default: 0
   },
   
   iconUrl: {
      type: String,
      trim: true,
      default: ''
   },
   iconBgColor: {
      type: String,
      trim: true,
      default: ''
   }
}, {
   timestamps: true
});

ClassSchema.pre('deleteOne', { document: false, query: true }, async function () {
   const classId = this.getQuery()["_id"];
   await Student.deleteMany({ "classes.classId": classId });
});



var Class = models.Class || model('Class', ClassSchema);

export default Class;