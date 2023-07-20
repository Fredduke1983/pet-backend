const currentUser = async (req, res) => {
  const { email, name } = req.user;
  console.log(email);

  res.json({
    email,
    name,
  });
};

module.exports = currentUser;
