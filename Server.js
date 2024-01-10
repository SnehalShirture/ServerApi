const express = require('express')
const bodyparser = require('body-parser')
const server = new express()
server.use(bodyparser.json())
const mongoose = require('mongoose')

//Database Connectivity
mongoose.connect('mongodb://127.0.0.1:27017/exampledb',{
    useNewUrlParser:true
}).then((result)=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log("Not Connected")
});

const stdList=[
    {
      stdno:"1",
      StudentName:"Snehal ",
      StudentClass:"12th",
      Course:"MCA",
      Percentage:89
    },
    {
      stdno:"2",
      StudentName:"Satendra",
      StudentClass:"12th",
      Course:"BCA",
      Percentage:25
    },
    {
      stdno:"3",
      StudentName:"Komal",
      StudentClass:"12th",
      Course:"MCom",
      Percentage:25
    },
    {
      stdno:"4",
      StudentName:"Rajesh",
      StudentClass:"12th",
      Course:"BCom",
      Percentage:65
    },
    {
      stdno:"5",
      StudentName:"PAlak",
      StudentClass:"12th",
      Course:"MSC",
      Percentage:84
    },
]
// Student who Passed the Examination (get)
// server.get('/PassStudent', (req, res) => {
//   const Stdpass =stdList.filter((stdp)=>stdp.Result=="Passed")
//     res.send(Stdpass)
    
// })
// Student Course (POST)
server.post('/getstdbycourse', (req, res) => {
  const Stdpass =stdList.filter((stdp)=>stdp.Course == req.body.Course) 
   res.status(200).json(Stdpass)

});

// Student who Failed the Examination
server.get('/FailedStudent', (req, res) => {
  const Stdfail =stdList.filter((stdf)=>stdf.Percentage<30)
  
    res.send(Stdfail)
})
// Student who Passed the Examination
server.get('/PassedStudent', (req, res) => {
  const Stdpass =stdList.filter((stdf)=>stdf.Percentage>30)
  
   res.send(Stdpass)

})
// Student who got distinction in the Examination
server.get('/DistintionStudent', (req, res) => {
  const StdDist =stdList.filter((stdf)=>stdf.Percentage>75)
  
    res.send(StdDist)
})

server.get('/users', (req, res) => {
    const usrs = ["Ashish", "Sam", "Amol"]
    res.send(usrs)
})

server.post('/Mypost',(req,res)=>{
  const user ={
    UserName:req.body.UserName,
    UserClass:req.body.UserClass,
    UserRoll:req.body.UserRoll

  }

  res.status(200).json(user)
  
})

{/*{
   "UserName":"Snehal",
   "UserClass":"12th",
   "UserRoll":"203"

} */}

server.post('/adduser', (req, res) => {
    const user = {
        UserName: req.body.UserName,
        UserPassword: req.body.UserPassword,
        UserEmail: req.body.UserEmail
    }

    // {
    //     "UserName": "Ashish",
    //     "UserPassword": "asd",
    //     "UserEmail": "aashish@gmail.com",
    // }
    res.status(200).json(user)
})




server.listen(5000, () => {
    console.log("Server Started")
})