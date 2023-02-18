const router = require("express").Router()
const {getAllPeople,getPeopleById,createPeople,updatePeople,deletePeople } = require("../controllers/people")



// read ALl
router.get("/",getAllPeople)


// read single
router.get("/:id",getPeopleById)


// create 
router.post("/",createPeople)


// update 
router.put("/:id",updatePeople)


// delete
router.delete("/:id",deletePeople)



module.exports = router