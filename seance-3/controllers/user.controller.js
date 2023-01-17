
let USERS = [
    {
        id:'16',
        name:'Dahmen'
    },
    {
        id:'2',
        name:'IFA'
    },
    {
        id:'3',
        name:'TALBI'
    },
    {
        id:'4',
        name:'MERIEH'
    },
    {
        id:'7',
        name:'MSEKNI'
    }
]
let getAllUsers = (req,res)=>{
    res.status(200).json(USERS)
}


let addUser = (req,res)=>{
    
    let {name}  = req.body
    if(!name){
        res.status(400).json({"msg":"Name is required !"})
        return
    }
    USERS.push({id:USERS.length+1,name})
    res.status(200).json(USERS)
}
let getUserById = (req,res)=>{
    const {id} = req.params
    let user = USERS.filter(user=>user.id==id)
    if(!user.length){
        res.status(404).json({"msg":"User not found"})
    }
    res.json({user: user[0]})

}


export {
    getAllUsers,
    addUser,
    getUserById
}