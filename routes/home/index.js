"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/",ctrl.home);
router.get("/login", ctrl.login);

module.exports = router; //router를 외부로 넘겨주기 설정