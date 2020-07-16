import mongoose from 'mongoose';

const FavoriteSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    marketOpen: {
      type: String,
      required: true,
    },
    marketClose: {
      type: String,
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    matchScore: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Favorite ||
  mongoose.model('Favorite', FavoriteSchema);
