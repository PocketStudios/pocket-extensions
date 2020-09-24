/*
 * © 2020 - Pocket Inc.
 */

//Tabs:

exports.tab = function() {};

//Open a new tab of specified URL.
exports.tab.create = function (url) {}

//Close a tab using it's ID.
exports.tab.close = function (ID) {}

//Get Active Tab ID.
exports.tab.getActiveTab = function () {}

//Load URL of Tab ID.
exports.tab.loadURL = function (ID,url) {}

//Get URL of Tab ID.
exports.tab.getURL = function (ID) {}


//Settings:


exports.settings = function () {};

//Get Current Browser Theme
exports.settings.getTheme = function () {}

//Get Current Browser Home
exports.settings.getHome = function () {}

//Get Current Search Engine
exports.settings.getEngine = function () {}

//Get Current Browser Version
exports.settings.getVersion = function () {}

//Logging:


exports.log = function () {};

//Send Info Log Message
exports.log.info = function () {}

//Send Error Log Message
exports.log.error = function() {};

//Events
//InComplete.
