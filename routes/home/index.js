"use strict"; //자바스크립트의 어쩌구 준수

//현재 app은 index.js에 없으니까 app사용할 수 있도록 해보자
const express=require("express");
const router=express.Router(); //app이라고 안하고 보통 router라고하고 이거


router.get("/login",(req,res)=>{
        res.render("home/login")
});

router.get("/",(req,res)=>{
        res.render("home/index")
});

module.exports=router;