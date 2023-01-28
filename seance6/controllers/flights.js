
const { PrismaClient }  =  require('@prisma/client')
const prisma = new PrismaClient()
const flightSchema = require("../validation/flights")
const getAllFlights = async (req,res)=>{
    let flights = await prisma.flights.findMany({
        include : {
            origin : true,
            destination : true
        }
    })
    res.json(flights)
}

const getFlightById = async (req,res)=>{
    let  id   = Number(req.params.id)
    let flight = await prisma.flights.findFirst({
        include : {
            origin : true,
            destination : true
        },
        where : {
            id : id
        }
    })
    if(!flight){
        res.status(404).json({msg:"flight does not exist"})
        return
    }
    res.json(flight)
}

const createFlight = async (req,res)=>{
    // nekhou el body mtaa el req
    let { value,error } = flightSchema.validate( req.body)
    if(error){
        console.log(error)
        res.status(400).json({msg: error.details[0].message})
        return
    }
    let { origin_id,destination_id,duration} = req.body
    console.log(req.body)
    try  {
        let newFlight = await prisma.flights.create({
            data : {
                origin_id,
                destination_id,
                duration
            }
        })
        console.log(newFlight)
        res.status(201).json(newFlight)

    }catch(e){
        console.log(e)
        res.status(400).json({msg:"Error in body of the request please verify the data"})
        return
    }
   
}

module.exports = {
    getAllFlights,
    getFlightById,
    createFlight
}