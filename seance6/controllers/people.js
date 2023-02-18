const { PrismaClient }  =  require('@prisma/client')
const peopleSchema = require('../validation/people')
const prisma = new PrismaClient()
const PeopleSchema = require("../validation/people")


const getAllPeople = async (req,res)=>{
    const persons = await prisma.people.findMany()
    res.json(persons)
}

const getPeopleById = async (req,res)=>{
    let  id   = Number(req.params.id)
    let person = await prisma.people.findFirst({
        where : {
            id : id
        }
    })
    if(!person){
        res.status(404).json({msg:"Person does not exist"})
        return
    }
    res.json(person)
}



const createPeople = async (req,res)=>{
    //validation
    let { value ,error } = PeopleSchema.validate(req.body)
    console.log(value,error)
    if (error){
        res.status(400).json({msg: error.details[0].message})
        return
    }
    let person = await prisma.people.create({data:value})
    res.json(person)
}
const updatePeople = async (req,res)=>{
    let id = Number(req.params.id)
    let person = await prisma.people.findFirst({
        where: { id : id}
    })
    let { first,last} = req.body
    if( !first && !last  && (first =="" || last =="")){
        res.status(400).json({"msg":"invalid request please set one variable at least"})
        return
    }
    try {   
        let updatePerson = await prisma.people.update({
          where : {
            id: id
          },
          data : {
            ...person,
            ...req.body
          }
        })
        res.json(updatePerson)
    }catch(e){
        res.status(400).json({msg: e.message})
    }
}


const deletePeople = async (req,res)=>{
    let id = Number(req.params.id)
    try {
        let deletedPeople = await prisma.people.delete({
            where : {
                id:id
            }
        }) 
        res.json(deletedPeople)
    }catch(err){
        res.status(400).json({msg:err.message})
    }
}


module.exports = {
    getAllPeople,
    getPeopleById,
    createPeople,
    updatePeople,
    deletePeople
}