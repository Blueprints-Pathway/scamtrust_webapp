"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transcationData = exports.sidebarData2 = exports.sidebarData = void 0;

var _home = _interopRequireDefault(require("../assets/images/home.png"));

var _transfer = _interopRequireDefault(require("../assets/images/transfer.png"));

var _Wallet = _interopRequireDefault(require("../assets/images/Wallet.png"));

var _support = _interopRequireDefault(require("../assets/images/support.png"));

var _settings = _interopRequireDefault(require("../assets/images/settings.png"));

var _logout = _interopRequireDefault(require("../assets/images/logout.png"));

var _awaiting = _interopRequireDefault(require("../assets/images/awaiting.png"));

var _completed = _interopRequireDefault(require("../assets/images/completed.png"));

var _ongoing = _interopRequireDefault(require("../assets/images/ongoing.png"));

var _cancelled = _interopRequireDefault(require("../assets/images/cancelled.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sidebarData = [{
  id: "dashboard",
  title: "Dashboard",
  path: "/",
  img: _home["default"]
}, {
  id: "transcation",
  title: "Transcation",
  path: "/transcation",
  img: _transfer["default"]
}, {
  id: "wallet",
  title: "wallet",
  path: "/transcation",
  img: _Wallet["default"]
}, {
  id: "wallet",
  title: "wallet",
  path: "/transcation",
  img: _Wallet["default"]
}, {
  id: "settings",
  title: "Support",
  path: "/suppport",
  img: _support["default"]
}];
exports.sidebarData = sidebarData;
var sidebarData2 = [{
  id: "dashboard",
  title: "dashboard",
  path: "/",
  img: _support["default"]
}, {
  id: "dashboard",
  title: "sign out",
  path: "/",
  img: _logout["default"]
}];
exports.sidebarData2 = sidebarData2;
var transcationData = [{
  name: "Ridic Ventures",
  amount: "250,000.00",
  date: "25th May, 2022",
  status: "Awaiting Approval",
  img: _awaiting["default"],
  device: " Iphone 11..."
}, {
  name: "Ridic Ventures",
  amount: "250,000.00",
  date: "25th May, 2022",
  status: "Completed",
  img: _completed["default"],
  device: " Iphone 11..."
}, {
  name: "Ridic Ventures",
  amount: "250,000.00",
  date: "25th May, 2022",
  status: "On-going",
  img: _ongoing["default"],
  device: " Iphone 11..."
}, {
  name: "Ridic Ventures",
  amount: "250,000.00",
  date: "25th May, 2022",
  status: "Cancelled",
  img: _cancelled["default"],
  device: " Iphone 11..."
}];
exports.transcationData = transcationData;