const indexView = (req, res, next) => {
  res.render("layout");
};

const iconView = (req, res, next) => {
  res.render("icons");
};

module.exports = { indexView, iconView };
