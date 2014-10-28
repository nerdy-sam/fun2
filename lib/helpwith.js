function HelpWith() {};

// https://stackoverflow.com/a/23577651/1113077
HelpWith.prototype.opt = function(options, name, default) {
  return options && options[name] !== undefined ? options[name] : default;
};

module.exports = HelpWith;
