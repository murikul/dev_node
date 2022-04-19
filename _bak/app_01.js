const express = require("express");
const app = express();

//루트 디렉토리 지정
//루트로 접근하면 아래 req, res로 처리할 거임, 콜백함수를 통하여
app.get("/", (req, res)=>{
    res.send("root dir")
});

//실제 Server open 포트 3000번을 열어둠 
app.listen(3000, () =>{
    console.log("server start");
});

// app.listen(3000, function(){
//     console.log("server start")
// });

// 앱 셋팅
app.set("views","./views");
app.set("view engine","ejs");  //뷰 엔진 ejs 사용


//-----------------------------------------------------------
app.get("/login", (req, res)=>{
    //res.send("this is login");
    res.send(`
    <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" placeholder="아이디"><br>
    <input type="text" placeholder="비밀번호"><br>
    <button>로그인</button>
</body>
</html>
    `)
});



