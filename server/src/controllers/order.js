import order from "../models/order.js";

export const getAllOrder = async (req, res) => {
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

    // const orders = await order.find({});
    const orders = await order.paginate({}, options);
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const addOrder = async (req, res) => {
  try {
    const { userId, products, fullName, phoneNumber, address } = req.body;

    // Kiểm tra đồng bộ để tránh tình trạng race condition
    const userOrder = await order.findOne({ userId });

    // Nếu không tìm user, tạo mới order
    if (!userOrder) {
      const newOrder = await order.create({
        userId,
        fullName,
        address,
        phoneNumber,
        products: products.map((p) => ({
          productId: p.productId,
          name: p.name,
          price: p.price,
          quantity: p.quantity,
          message: p.message,
          dateTime: p.dateTime,
          paymentMethod: p.paymentMethod,
        })),
      });

      if (!newOrder) {
        return res.status(500).json({ message: "Tạo mới đơn hàng thất bại!" });
      }

      return res
        .status(200)
        .json({ message: "Thêm sản phẩm vào order thành công!" });
    }

    // Nếu đã có đơn hàng, thêm từng sản phẩm vào đơn hàng hiện tại
    products.forEach((p) => {
      userOrder.products.unshift({
        productId: p.productId,
        name: p.name,
        price: p.price,
        quantity: p.quantity,
        dateTime: p.dateTime,
        paymentMethod: p.paymentMethod,
      });
    });

    // Lưu lại đơn hàng đã cập nhật
    await userOrder.save();

    return res
      .status(200)
      .json({ message: "Thêm sản phẩm vào order thành công!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { userId, orderProductId, status } = req.body;

    const userOrder = await order.findOne({ userId });

    if (!userOrder) {
      return res
        .status(404)
        .json({ error: "Đơn hàng của người dùng không khả dụng!" });
    }

    const productIndex = userOrder.products.findIndex(
      (p) => p._id == orderProductId
    );
    userOrder.products[productIndex].status = status;

    const data = await userOrder.save();

    return res.status(200).json({ updated: true, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { userId, orderProductId } = req.body;

    const userOrder = await order.findOne({ userId });

    if (!userOrder) {
      return res
        .status(404)
        .json({ error: "Đơn hàng của người dùng không khả dụng!" });
    }

    userOrder.products = userOrder.products.filter(
      (p) => p._id != orderProductId
    );

    const data = await userOrder.save();

    return res.status(200).json({ deleted: true, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
