import { Schema, model } from 'mongoose';

const priceSchema = new Schema({
  symbol: String,
  price: Number,
  timestamp: { type: Date, default: Date.now }
});

export const Price = model('Price', priceSchema);
