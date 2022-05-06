 //이거 궅이모듈화 안해서 쓰려면 app.js의 밑에있는부분 걍 살리자
 //이 파일엔 app이 없어서 불러와야함
 const app=require("../app") // 내가 여기서 app.js에 있는 앱을 불러와도 저쪽에서 보내줘야함
 const POST=3000;
 app.listen(POST,()=>{
     console.log("서버가동");
 });