import mongoose, { Schema, Document } from 'mongoose';

// Interface for the Event document
export interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: 'online' | 'offline' | 'hybrid';
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const eventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  description: { type: String, required: true },
  overview: { type: String, required: true },
  image: { type: String, required: true },
  venue: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  mode: { type: String, enum: ['online', 'offline', 'hybrid'], required: true },
  audience: { type: String, required: true },
  agenda: { type: [String], required: true },
  organizer: { type: String, required: true },
  tags: { type: [String], required: true },
}, { timestamps: true });

// Pre-save hook to generate a slug from the title before saving
eventSchema.pre<IEvent>('save', function (next) {
  if (this.isModified('title')) {
    this.slug = this.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }
  // Normalize date to ISO format and validate time
  try {
    this.date = new Date(this.date).toISOString();
  } catch (error) {
    return next(new Error('Invalid date format.'));
  }
  next();
});

const Event = mongoose.models.Event || mongoose.model<IEvent>('Event', eventSchema);

export default Event;