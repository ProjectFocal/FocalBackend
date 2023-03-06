exports.allAccess = (req, res) => {
  res.status(200).send({ message: "User has access to public content" });
};

exports.userBoard = (req, res) => {
  res.status(200).send({ message: "User has access to user content" });
};

exports.adminBoard = (req, res) => {
  res.status(200).send({ message: "User has access to admin content" });
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send({ message: "User has access to moderator content" });
};
