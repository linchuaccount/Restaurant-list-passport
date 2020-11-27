# 餐廳清單 Restaurant list

一個簡單的餐廳清單，使用者可以瀏覽所有餐廳卡片，並以餐廳名稱進行搜尋，當使用者點擊餐廳卡片後可以看到餐廳的詳細資訊，此外使用者也可以自行新增一筆餐廳資料，並對每筆餐廳資料進行修改或刪除。

## 功能 Features

- 瀏覽所有餐廳卡片
- 瀏覽一筆餐廳詳細資訊
- 新增一筆餐廳資訊
- 修改一筆餐廳資訊
- 刪除一筆餐廳資訊
- 可以餐廳名稱進行搜尋

## 環境需求

node.js v10.15.0  
express v4.17.1  
express-handlebars v5.2.0  
mongoose v5.10.16  
body-parser v1.19.0  
nodemom

## 餐廳清單安裝與執行方法

在終端機輸入以下指令:

1. 下載檔案
   `git clone https://github.com/linchuaccount/Restaurant-list.git`
2. 進入專案資料夾
   `cd restaurant_list2.0`
3. 安裝套件
   `npm install`
4. 啟動伺服器
   `npm run dev`
5. 當終端機顯示`App is running on http://localhost:3000`，表示伺服器已成功啟動
6. 在瀏覽器輸入網址`http://localhost:3000`，即可開始使用餐廳清單

## 常用腳本

啟動伺服器 `npm run dev`  
載入種子資料 `npm run seed`
