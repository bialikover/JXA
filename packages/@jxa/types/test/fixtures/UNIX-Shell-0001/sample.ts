var app = Application.currentApplication(); // 現在実行しているアプリケーションを取得
app.includeStandardAdditions = true;
var text = app.doShellScript("ls"); // lsコマンド
app.displayDialog(text);
