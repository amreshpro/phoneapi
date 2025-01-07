import User from "../models/User";

export const searchByName = async (req: any, res: any) => {
  const query = req.query.query;

  try {
    const users = await User.find({ name: new RegExp(query, "i") }).populate("contacts");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const searchByPhone = async (req: any, res: any) => {
  const phone = req.query.phone;

  try {
    const users = await User.find({ phone }).populate("contacts");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
