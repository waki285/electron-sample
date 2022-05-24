const { app, BrowserWindow } = require("electron");
const path = require("path");
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // 説明のためにほとんどすべてのプロパティ出してるけど普通に省略できるよ
  const mainWindow = new BrowserWindow({
    // ウィンドウのサイズを指定
    width: 800,
    height: 600,
    alwaysOnTop: false, // ウィンドウを常に上に表示するかどうか
    autoHideMenuBar: true, // メニューバーを非表示にするかどうか
    center: false, // ウィンドウを画面中央に表示するかどうか
    closable: true, // ウィンドウを閉じることができるかどうか
    frame: true, // ウィンドウの枠を表示するかどうか
    fullscreen: false, // ウィンドウをフルスクリーン表示するかどうか
    fullscreenable: true, // ウィンドウをフルスクリーン表示するようにすることができるかどうか
    hasShadow: true, // ウィンドウに影をつけるかどうか
    maximizable: true, // ウィンドウを最大化できるかどうか
    minimizable: true, // ウィンドウを最小化できるかどうか
    movable: true, // ウィンドウを動かすことができるかどうか
    resizable: true, // ウィンドウをリサイズできるかどうか
    skipTaskbar: false, // タスクバーに表示させないかどうか
    titleBarStyle: "default", // タイトルバーのスタイル
    x: 0, // ウィンドウのX座標
    y: 0, // ウィンドウのY座標
    webPreferences: {
      devTools: true, // デバッグウィンドウを開くことができるかどうか
      contextIsolation: true, // コンテキストを隔離するかどうか
      preload: path.join(__dirname, "preload.js"), // プリロードするファイルのパス
    }
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));

  // 開発者ツールを開く
  mainWindow.webContents.openDevTools();
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});