"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var HealthCheck = function HealthCheck() {
  _classCallCheck(this, HealthCheck);
};

exports["default"] = HealthCheck;

_defineProperty(HealthCheck, "healthCheck", function (_req, res) {
  return res.sendStatus(200).end();
});
