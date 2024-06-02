const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const { genericSearch, copyrightSearh, trademarkSearch } = require("../controllers/searchesController");

router.use(requireAuth);

router.get("/cases", genericSearch);
router.get("/copyright", copyrightSearh);
router.get("/trademark", trademarkSearch);

module.exports = router;
