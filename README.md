## url2app

將一個透過Browser才能瀏覽的網頁或網站打包成一個跨平台的桌面應用程式。  

url2app is a tool for wrapping an url to an desktop APP.

### 可支援的作業系統平台(Supported OS platform)  

因為是使用Electron框架所寫成，所以基本上Electron能支援的平台都可以執行。  

Because the project uses electron framework, any famous OS can also run it.  
* Windows  
* MacOS  
* Linux  

### 使用方式(How to use it)  

  1. 從github把程式碼下載回來本機端  
  
  Download source code from github  
  ```
  git clone https://github.com/WayneChang65/url2app.git  
  ```  
  2. 進入url2app目錄  
  
  Get into url2app directory  
  ```
  cd url2app
  ```
  3. 將要顯示的url寫入package.json的app2url_url元素中。  
  
  Assign url in element app2url_url of package.json file  
  ```
   "app2url_url": "http://localhost:8008/milling/index.html"  
  ```
  4. 或者是將要顯示的url寫入**URL2APP_URL**系統環境變數中。以Linux為例，可以寫在.zshrc(shell是zsh)。3或4的方式都可，如果兩個都指定，將以**URL2APP_URL**系統環境變數為優先。  
  
  Or assign url in env variable **URL2APP_URL** . If package.json and env variable are both assigned, assignment by package.json will be skipped.  
  ```
  export URL2APP_URL="http://localhost:8008/milling/index.html"  
  ```  
  5. 執行程式  

  Run it.  
  ```
  npm run start  
  ```
  6. 執行結果。以下是用一個local網站進行測試的結果。  
  
  Result. Test by a local url.  
  ![image](https://raw.githubusercontent.com/WayneChang65/url2app/master/img/readme01.png)  

### Build成各作業系統平台的安裝檔(Build install or setup file)  

因為本專案是使用Electron框架所寫成，所以建立各平台安裝檔可以使用兩個較常見的工具([electron-builder](https://github.com/electron-userland/electron-builder/blob/master/README.md)以及[electron-packager](https://github.com/electron/electron-packager))進行製作，有需要可上各自Github找文件閱讀。(本專案是使用electron-builder)  

This project is designed by Electron framework, so we can chose the famous build tool like [electron-builder](https://github.com/electron-userland/electron-builder/blob/master/README.md) or [electron-packager](https://github.com/electron/electron-packager).  
  1. 使用以下指令Build Mac版本安裝檔。  

  Build for Mac version  
  ```
  npm run build-mac
  ```
  2. 使用以下指令Build Win版本安裝檔  
  
  Build for Windows version  
  ```
  npm run build-win
  ```

## 貢獻一己之力 (Contribution)  

url2app 雖然是一個小模組，但本人還是希望這個專案能夠持續進步！若有發現臭蟲(bug)或問題，請幫忙在Issue留言告知詳細情形。  
歡迎共同開發。歡迎Pull Request，謝謝。:)  

Even though url2app is a small project, I hope it can be improving. If there is any issue, please comment and welcome to fork and send Pull Request. Thanks. :)  