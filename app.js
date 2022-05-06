
//**************************모듈******************** */
const express=require("express"); //express 모듈 다운로드 받기
const app=express(); //app모듈에서 express띄우기
const res = require("express/lib/response");


//**************************앱 세팅******************** */
//이 화면이 관리될 폴더를 파라미터로 넘겨주면 됨
app.set("views","./views");
//views안에 생성된 html코드들을 어떤 엔진으로 생성할지 적어줌
app.set("view engine","ejs");


//listen으로 3000번 포트 열고, 두번째 파라미터에선 콜백 함수로 
//하단에 터미널띄우고 현재 이디렉토리에서 터미널이 열림 
//pwd하면 현재 디렉토리 표시하고
//app.js파일을 js로 읽어줌 node는 js파일을 v8엔진을 활용해서이 코드를 해석해달라는 js전용컴파일러같은거

//서버에서 루트 경로를 만들자
//브라우저에서 루트 경로가 들어오면 내가 이런 응답을 해줄건데 어떤 요청이 들어왔는지 알아야해서 파라미터로
//req를 인식하고 res를 받는다 일단 어떤 요청인지 해석 안하고 바로 response해서 send해보자
//ctrl+s로 저장하고 ctrl+c로 서버 종료 후 다시 실행해야함
//해당 경로로 들어온 클라가 요청했을때 우리가 응답한거임
// app.get("/", (req,res)=>{
//  res.send(
//      res.render("home/index")
//  )

// });
//=>이거 여기 쓰기 싫어서 routes/home만들고 그 안에 만든거 여기서 불러다씀

//**************************라우팅******************** */
//use-> 미들웨어를 등록해주는 메서드.
// 루트 경로로 들어오면 home으로 보내라
const home=require("./routes/home")  //index.js로 이동해서 callback함수가 실행도딤
app.use("/",home); 


//http://localhost:3000/login  로 접속
// /는 꼭 넣어줘야함 /는 root를 의미하는거고 /에서 login경로로 빠지면 로그인 화면으로 가게되는거임
//브라우저가 요청한 걸로으로 이동하는 라우팅기능까지 해본거임
//`` 해줘야 줄바꿈해주는곳도 인식
//app.use("/login",home);
// app.get("/login",(req,res)=>{
//     res.send( 
//         res.render("home/login")
//     );
// });

const POST=3000;
app.listen(POST,function () {
    console.log("서버가동");
});

