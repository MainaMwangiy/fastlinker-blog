const router = require("express").Router()
const handlers = require("../handlers")

router.get("/", handlers.Home)
router.post("/create-new-user", handlers.AddUsers)

module.exports = router;