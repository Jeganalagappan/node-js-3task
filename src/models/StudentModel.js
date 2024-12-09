import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you're referencing a User model
    required: true,
  },
  // other fields...
});

const Mentor = mongoose.model('Mentor', mentorSchema);

export default Mentor;
