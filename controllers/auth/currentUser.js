const currentUser = async (req, res) => {
  const user = req.user;

  res.json({
    ...user.toObject(),
    password: undefined,
  });
};

module.exports = currentUser;
