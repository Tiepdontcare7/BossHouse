import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const voucher = mongoose.model(
  "Voucher",
  new Schema(
    {
      code: { type: String, required: true },
      discountPercent: { type: Number, required: true },
      maxDiscount: { type: Number, required: true },
      expirationDate: { type: String, required: true },
      isActive: { type: Boolean, required: true, default: true },
      applied: { type: Boolean, required: true, default: false },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  ).plugin(mongoosePaginate)
);

export default voucher;
