const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// ⭐ 強制絕對路徑
const publicPath = path.join(__dirname, "public");
console.log("PUBLIC PATH:", publicPath);

app.use(express.static(publicPath));

// 測試 root
app.get("/", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
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
    console.log("Server running on " + PORT);
});