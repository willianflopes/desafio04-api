import { db } from '../models/index.js';

const gradesSchema = db.mongoose.Schema({
  name: {
    type: String,
    requerid: true,
  },
  subject: {
    type: String,
    requerid: true,
  },
  type: {
    type: String,
    requerid: true,
  },
  value: {
    type: Number,
    requerid: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

schema.method('toJSON', () => {
  const { __v, _id, ...object } = this.toObject();

  object.id = _id;

  return object;
});

const Grades = db.mongoose.model('grades', gradesSchema);

export default Grades;
