const User = require("../models/user-schema");

// Create user
exports.createUser = (req, res, next) => {
  const { name } = req.body;
  User.findOne({
    where: { name: name },
  })
    .then((user) => {
      if (user) {
        return res.status(400).json({
          message: "User already exist",
        });
      }
      return User.create({
        name: name,
      }).then((user) => {
        return res.status(200).json({
          message: "User created successfully",
          user: user.id,
        });
      });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

// Update user
exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const { newName } = req.body;
  User.findOne({
    where: {
      id: id,
    },
  })
    .then((user) => {
      if (user) {
        user.name = newName;
        user.save();
        return res.status(200).json({
          message: "Name changed successfully",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

// Delete user
exports.deleteUser = (req, res, next) => {
  const { id } = req.params;
  User.findOne({
    where: {
      id: id,
    },
  })
    .then((user) => {
      if (user) {
        user.destroy({
          where: {
            id: id,
          },
        });
        return res.status(200).json({
          message: "User deleted successfully",
        });
      }
      return res.status(404).json({
        message: "User not found",
      });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

// Find User by ID
exports.findUser = (req, res, next) => {
  const { id } = req.params;
  User.findOne({
    where: {
      id: id,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      return res.status(200).json({
        user,
      });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

exports.findAllUser = (req, res, next) => {
  User.findAll()
    .then((user) => {
      if (!user || user.length === 0) {
        return res.status(404).json({
          message: "No user exist",
        });
      }
      return res.status(200).json({
        user,
      });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};
