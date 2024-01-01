import bcryptjs from "bcryptjs";
import { userSignin, userSignup } from "../validate/index.js";
import { user } from "../models/index.js";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const { error } = userSignup.validate(req.body);
    if (error) {
      return res.status(404).json({
        messages: error.message,
      });
    }

    const findUser = await user.findOne({ email: req.body.email });
    if (findUser) {
      return res.status(400).json({ messages: "Tài khoản đã tồn tại!" });
    }

    const pwHash = await bcryptjs.hash(String(req.body.password), 10);
    const data = await user.create({
      ...req.body,
      password: pwHash,
      confirmPassword: undefined,
    });

    if (!data) {
      return res.status(404).json({
        messages: "Đăng ký thất bại!",
      });
    }

    return res.status(200).json({
      messages: "Đăng ký thành công!",
      data: {
        ...req.body,
        password: undefined,
        confirmPassword: undefined,
      },
    });
  } catch (error) {
    return res.status(404).json({
      messages: error.message,
    });
  }
};

const signin = async (req, res) => {
  try {
    const { error } = userSignin.validate(req.body);
    if (error) {
      return res.status(404).json({
        messages: error.message,
      });
    }

    const findUser = await user.findOne({ email: req.body.email });
    if (!findUser) {
      return res.status(404).json({
        messages: "Tài khoản không tồn tại!",
      });
    }

    const checkPassword = await bcryptjs.compare(
      req.body.password,
      findUser.password
    );
    if (!checkPassword) {
      return res.status(404).json({
        messages: "Mật khẩu không chính xác!",
      });
    }

    const token = await jwt.sign({ findUser }, process.env.TOKEN, {
      expiresIn: "7d",
    });

    findUser.password = undefined;

    return res.status(200).json({
      messages: "Đăng nhập thành công!",
      findUser,
      token,
    });
  } catch (error) {
    return res.status(404).json({
      messages: error.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const data = await user.find({});

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Không tìm thấy danh sách user!",
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export default { signup, signin, getAll };
