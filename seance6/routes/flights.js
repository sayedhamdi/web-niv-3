const router = require("express").Router()

const { getAllFlights,getFlightById,createFlight } = require("../controllers/flights")


router.get("/",getAllFlights)
router.get("/:id",getFlightById)
router.post("/",createFlight)

module.exports = router