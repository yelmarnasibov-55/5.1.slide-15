const express = require("express");

const app=express()

app.get('/',(req,res)=>{
    let employees=[
        { "name": "Sam", "age": 45 },
        { "name": "Tom", "age": 34 },
        { "name": "Bill", "age": 18 }
    ]
    res.json(employees)
})

app.listen(3000,()=>{
    console.log('Server started on 3000 port')
})