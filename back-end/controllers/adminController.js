export const createSomething = async (req, res) => {
  try {
    res.status(201).json({
      message: "Admin-only route working ✅",
      admin: req.user.name
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
