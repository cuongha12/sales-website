"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveUserToLocalStorage = exports.saveUserToLocalStorage = void 0;

var saveUserToLocalStorage = function saveUserToLocalStorage(user) {
  return {
    type: "SAVE_USER",
    playload: user
  };
};

exports.saveUserToLocalStorage = saveUserToLocalStorage;

var RemoveUserToLocalStorage = function RemoveUserToLocalStorage(user) {
  return {
    type: "REMOVE_USER",
    playload: user
  };
};

exports.RemoveUserToLocalStorage = RemoveUserToLocalStorage;