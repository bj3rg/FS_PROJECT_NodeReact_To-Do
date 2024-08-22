const Premade = require("../models/premadeToDo-schema");

exports.createPremade = (req, res, next) => {
  const { item } = req.body;
  Premade.create({
    item: item,
  })
    .then((item) => {
      return res.status(200).json({
        message: "Item added successfully",
        item,
      });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

exports.updatePremade = (req, res, next) => {
  const { id } = req.params;
  const { newItem } = req.body;
  Premade.findOne({
    where: {
      id: id,
    },
  })
    .then((premade) => {
      if (premade) {
        premade.item = newItem;
        premade.save();
        return res.status(200).json({
          premade,
        });
      }
      return res.status(404).json({
        message: "Premade not found",
      });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

exports.findAllPremade = (req, res, next) => {
  Premade.findAll()
    .then((premades) => {
      if (!premades || premades.length === 0) {
        return res.status(404).json({ message: "No premade exist" });
      }
      return res.status(200).json({
        premades,
      });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};
exports.deletePremadeById = (req, res, next) => {
  const { id } = req.params;
  Premade.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      return res.status(200).json({
        message: "Item deleted successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

exports.deleteAllPremade = (req, res, next) => {
  Premade.truncate()
    .then(() => {
      return res.status(200).json({ message: "Delete all item successfully" });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};
