import Spam from "../models/Spam";

export const markSpam = async (req: any, res: any) => {
  const { phone } = req.body;

  try {
    const spam = new Spam({ phone, reportedBy: req.user.userId });
    await spam.save();
    res.status(201).json({ message: "Spam marked successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
