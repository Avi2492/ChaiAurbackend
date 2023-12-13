import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
  {
    medicines: {
      type: String,
      required: true,
    },
    report: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    multipleMedicine: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
