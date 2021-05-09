## url2app
將一個透過Browser才能瀏覽的網頁或網站打包成一個跨平台的桌面應用程式。

### 可支援的作業系統平台  
因為是使用Electron框架所寫成，所以基本上Electron能支援的平台都可以執行。
* Windows  
* MacOS  
* Linux  

### 使用方式  
  1. 將要打包的url寫入**URL2APP_URL**系統環境變數中  
  以Linux為例，可以寫在.zshrc(shell是zsh)
  ```
  export URL2APP_URL="http://localhost:8008/milling/index.html"  
  ```
  2. 從github把程式碼下載回來本機端  
  ```
  git clone https://github.com/WayneChang65/url2app.git  
  ```  
  3. 進入url2app目錄
  ```
  cd url2app
  ```
  4. 執行程式  
  ```
  npm run start  
  ```
  5. 執行結果
  以下是用一個local網站進行測試的結果。
  ![image](https://raw.githubusercontent.com/WayneChang65/url2app/master/img/readme01.png)  