@PowerShell -ExecutionPolicy Bypass -Command Invoke-Expression $('$args=@(^&{$args} %*);'+[String]::Join(';',(Get-Content '%~f0') -notmatch '^^@PowerShell.*EOF$')) & goto :EOF
npm install
node app.js
Start iexplore.exe
$Browser=new-object -com internetexplorer.application
$Browser.navigate2("192.168.0.1 :3000")
$Browser.visible=$true