import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Orders",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
          required: true,
        },
        dateTime: {
          type: String,
          require: true,
        },
        message: {
          type: String,
          required: false,
        },
        status: {
          type: String,
          enum: [
            "Chờ Xác Nhận",
            "Đã Xác Nhận",
            "Đang Giao Hàng",
            "Đã Nhận Hàng",
            "Đã xác nhận thanh toán",
            "Đã Hủy",
          ],
          default: "Chờ Xác Nhận",
          required: true,
        },
        paymentMethod: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
).plugin(mongoosePaginate);

const order = mongoose.model("Order", orderSchema);

export default order;
