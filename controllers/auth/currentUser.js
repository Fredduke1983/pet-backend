const currentUser = async (req, res) => {
  const user = req.user;

  res.json({
    user,
  });
};

module.exports = currentUser;
