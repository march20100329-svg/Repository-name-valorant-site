const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

//  讓 public 可以被讀
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// 測試用首頁
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 接收登入資料
app.post("/login", (req, res) => {
    console.log("🔥 收到前端請求");

    const { username, password } = req.body;

    console.log("帳號：", username);
    console.log("密碼：", password);

    res.json({
        success: true,
        message: "後端已收到資料"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});