import mongoose, { Schema, Document } from 'mongoose';
import Event from './event.model';

// Interface for the Booking document
export interface IBooking extends Document {
  eventId: mongoose.Schema.Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const bookingSchema = new Schema<IBooking>({
  eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true, index: true },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
}, { timestamps: true });

// Pre-save hook to verify that the eventId exists
bookingSchema.pre<IBooking>('save', async function (next) {
  if (this.isNew) {
    const eventExists = await Event.findById(this.eventId);
    if (!eventExists) {
      return next(new Error('Event not found.'));
    }
  }
  next();
});

const Booking = mongoose.models.Booking || mongoose.model<IBooking>('Booking', bookingSchema);

export default Booking;
