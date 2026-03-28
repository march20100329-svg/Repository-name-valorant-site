const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// 讓網站可以讀前端檔案
app.use(express.static("public"));

// 假資料
const userData = {
    test: {
        password: "1234",
        history: [
            { date: "2025-01-01", item: "1000 VP", price: 300 },
            { date: "2025-02-10", item: "2050 VP", price: 600 },
            { date: "2025-03-05", item: "Battle Pass", price: 450 }
        ]
    }
};

// API
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    console.log("登入：", username);

    const user = userData[username];

    if (!user || user.password !== password) {
        return res.json({
            success: false,
            message: "帳號或密碼錯誤"
        });
    }

    res.json({
        success: true,
        history: user.history
    });
});

// Render 需要
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});