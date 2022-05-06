"use strict"; //js일때

//hello라는 컨트롤러 함수를 만들어서 외부에서 사용
//function hello(req,~~~와 같은문법)
const home=(req,res)=>{
res.render("home/index"); //해당 로직을 실행
 };

 const login=(req,res)=>{
    res.render("home/login"); //해당 로직을 실행
     };

     //hello, login을 index.js에서 사용할 수 있도록 모듈을 밖으로 배자
     module.exports={
        home,
         login,
     }