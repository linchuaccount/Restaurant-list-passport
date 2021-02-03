# 餐廳清單 Restaurant list

相較於前一個版本(Restaurant-list2.0_refactor-router)，這次增加了使用者的註冊和登入功能，當使用者註冊帳號後，可以使用 email 和密碼登入自己的餐廳清單，在餐廳清單內可以新增餐廳資料，並對每筆餐廳資料進行修改或刪除，也可以在首頁瀏覽所有的餐廳卡片，並且可以改變餐廳卡片的排列順序，當使用者點進卡片後可以瀏覽餐廳的詳細資訊。

## Heroku 連結

https://mysterious-oasis-90647.herokuapp.com/users/login

## 登入畫面 Login Page

![image](https://raw.githubusercontent.com/linchuaccount/Restaurant-list-passport/master/screencapture-localhost-3000-users-login-2021-02-04-02_14_55.png)

## 餐廳卡片 Home Page

![image](https://github.com/linchuaccount/Restaurant-list2.0_refactor-router/blob/master/restaurantListPage.png?raw=true)

## 功能 Features

- 使用 email 和密碼註冊帳號
- 使用 email 和密碼登入帳號
- 使用 facebook 註冊帳號(尚未開放)
- 使用 facebook 登入帳號(尚未開放)
- 瀏覽所有餐廳卡片
- 瀏覽一筆餐廳詳細資訊
- 新增一筆餐廳資訊
- 修改一筆餐廳資訊
- 刪除一筆餐廳資訊
- 可以餐廳名稱進行搜尋
- 可以類別排列餐廳卡片順序

## 環境需求

node.js v10.15.0  
bcryptjs v2.4.3
body-parser v1.19.0  
connect-flash v0.1.1  
dotnec v8.2.0  
express v4.17.1  
express-handlebars v5.2.0  
express-session v1.17.1  
method-override v3.0.0  
mongoose v5.10.16  
passport v0.4.1  
passport-facebook v3.0.0  
passport-local v1.0.0  
nodemom (建議安裝)  
在本地使用需安裝 MongoDB

## 餐廳清單安裝與執行方法

在終端機輸入以下指令:

1. 下載檔案
   `git clone https://github.com/linchuaccount/Restaurant-list.git`
2. 進入專案資料夾
   `cd restaurant_list_passport`
3. 安裝套件
   `npm install`
4. 啟動伺服器
   `npm run dev`
5. 當終端機顯示`App is running on http://localhost:3000`，表示伺服器已成功啟動
6. 在瀏覽器輸入網址`http://localhost:3000`，即可開始使用餐廳清單

## 常用腳本

啟動伺服器 `npm run dev`  
載入種子資料 `npm run seed`
