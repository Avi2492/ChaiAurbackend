import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      reuired: true,
    },
    address1: {
      type: String,
      reuired: true,
    },
    address2: {
      type: String,
    },
    city: {
      type: String,
    },
    pincode: {
      type: String,
      required: true,
    },
    specilisedIn: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);
