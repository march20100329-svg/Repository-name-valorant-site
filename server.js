const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

// 測試用首頁
app.get("/", (req, res) => {
    res.send("後端正常運行 ✔");
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

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
