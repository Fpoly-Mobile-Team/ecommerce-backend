import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  image: {
    type: String,
    default: 'n/a',
  },
  imageGallery: [String],
  categoryMain: { type: String, default: 'uncategorized' },
  categorySub: [String],
  tag: [String],
  description: String,
  price: Number,
  created: {
    type: Date,
    default: Date.now,
  },
});
