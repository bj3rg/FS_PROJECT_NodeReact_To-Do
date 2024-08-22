const ToDo = require("../models/toDo-schema");
const User = require("../models/user-schema");

exports.createToDo = (req, res, next) => {
  const { item } = req.body;
  const { id } = req.params;
  User.findOne({
    where: { id: id },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "User does not exist",
        });
      }
      ToDo.create({
        item: item,
        user_id: id,
      }).then((post) => {
        return res.status(201).json({
          message: "Post created",
          post,
        });
      });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};
exports.updateToDo = (req, res, next) => {
  const { newItem } = req.body;
  const { id } = req.params;
  ToDo.findOne({
    where: {
      id: id,
    },
  })
    .then((post) => {
      if (post) {
        post.item = newItem;
        post.save();
        return res.status(200).json({
          message: "Updated successfully",
          post,
        });
      }
      return res.status(404).json({
        message: "P",
      });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

exports.finishToDo = (req, res, next) => {
  const { id } = req.params;
  ToDo.findOne({
    where: {
      id: id,
    },
  })
    .then((post) => {
      if (post) {
        post.isDone = true;
        post.save();
        return res.status(200).json({
          message: "Post updated successfully",
          post,
        });
      }
      return res.status(404).json({
        message: "Post not found",
      });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

exports.deleteToDo = (req, res, next) => {
  const { id } = req.params;
  ToDo.findOne({
    where: {
      id: id,
    },
  })
    .then((post) => {
      if (post) {
        post.destroy();
        return res.status(200).json({ message: "Deleted successfully" });
      }
      return res.status(404).json({ message: "Post not found" });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

exports.findAllToDoByUserId = (req, res, next) => {
  const { user_id } = req.params;
  ToDo.findAll({
    where: {
      user_id: user_id,
    },
  })
    .then((post) => {
      if (!post || post.length === 0) {
        return res.status(404).json({
          message: "No post found",
        });
      }
      return res.status(200).json({
        post,
      });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};
