import voucher from "../models/voucher.js";
import { schemaVoucher } from "../validate/index.js";

const getAll = async (req, res) => {
  try {
    const {
      _limit = 10,
      _page = 1,
      _order = "asc",
      _sort = "createdAt",
    } = req.query;

    const options = {
      page: _page,
      limit: _limit,
      order: _order,
      sort: {
        [_sort]: _order === "asc" ? 1 : -1,
      },
    };

    // const data = await voucher.find({});
    const data = await voucher.paginate({}, options);

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Không tìm thấy voucher!",
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getOne = async (req, res) => {
  try {
    const data = await voucher.findById(req.params.id).exec();

    if (!data) {
      return res.status(404).json({
        message: "Không tìm thấy voucher!",
      });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const addVoucher = async (req, res) => {
  try {
    const { error } = schemaVoucher.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    } else {
      const findCode = await voucher.findOne({ code: req.body.code });
      if (findCode) {
        return res.status(404).json({
          message: "Voucher đã tồn tại!",
        });
      }

      const data = await voucher.create(req.body);

      if (!data) {
        return res.status(404).json({
          message: "Tạo mới voucher thất bại!",
        });
      }
      return res.status(200).json({
        message: "Tạo mới voucher thành công!",
        data,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateVoucher = async (req, res) => {
  try {
    const body = req.body;
    const { error } = schemaVoucher.validate(body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    } else {
      const data = await voucher.findByIdAndUpdate(req.params.id, body);

      if (data.acknowledged === false) {
        return res.status(404).json({
          message: "Cập nhật voucher thất bại!",
        });
      }

      return res.status(200).json({
        message: "Cập nhật voucher thành công!",
        data,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteVoucher = async (req, res) => {
  try {
    const data = await voucher.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "Xóa voucher thất bại!",
      });
    }

    return res.status(200).json({
      message: "Xoá voucher thành công!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const applyVoucher = async (req, res) => {
  try {
    const { voucherCode, totalPrice, orderId } = req.body;

    // Kiểm tra xem voucher có tồn tại không
    const findVoucher = await voucher.findOne({
      code: voucherCode,
      // applied: false,
    });

    // if (!findVoucher) {
    //   return res
    //     .status(404)
    //     .json({ error: "Voucher không tồn tại hoặc đã được áp dụng!" });
    // }

    // Kiểm tra xem voucher đã hết hạn chưa
    const currentDate = new Date();
    console.log(currentDate.getDay());
    if (currentDate > findVoucher.expirationDate) {
      return res
        .status(400)
        .json({ error: "Voucher đã hết hạn sử dụng!" });
    }

    // Kiểm tra xem voucher giảm bao nhiêu %, nếu không có thì mặc định là 0
    const discount = findVoucher.discountPercent || 0;

    // Tính giá sau khi áp dụng voucher
    let salePrice = totalPrice - ((totalPrice * discount) / 100);

    //Nếu giá sale lơn hơn giá trị tối đa của vouvher thì tổng giá chỉ trừ đi giá trị tối đa của voucher
    if (((totalPrice * discount) / 100) > findVoucher?.maxDiscount || salePrice < 0) salePrice = totalPrice - findVoucher?.maxDiscount

    //Update trạng thái voucher đã được sử dụng!
    findVoucher.applied = true;
    await findVoucher.save();

    return res.status(200).json({ salePrice });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export default {
  getAll,
  getOne,
  updateVoucher,
  addVoucher,
  deleteVoucher,
  applyVoucher,
};
