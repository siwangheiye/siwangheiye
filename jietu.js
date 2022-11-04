auto(); // 自动打开无障碍服务
setScreenMetrics(1080, 2340);
var appName = rawInput("苏周到");
openAppSetting(getPackageName(appName));
while(!click("强制停止"));

launchApp("苏周到");sleep(6000);//打开苏周到
click(554,1896);//首页面x
//if(textContains("苏康码").find().click()) //匹配页面包含手机的元素
//click(554,1896);sleep(1000);
if(text("苏康码").exists()){

    textContains("苏康码").find().click()// 当表达式成立时要执行的代码

}else{click(554,1896);sleep(1000);// 当表达式不成立时要执行的代码
}

//text("苏康码").find().click(); //点击苏康码(先查找再点击)

//click(694,673);sleep(100);//点击苏康码
//click(694,673);sleep(4000);//点击苏康码

//click(998,1058);sleep(2000);//点击全屏
//swipe(840,33,500,1000,2000);sleep(1000);
//click(891,941);sleep(6500);//截图
//engines.stopAllAndToast();
if(text("新冠疫苗").exists()){
    sleep(1000);toast("1ok");
    //匹配页面包含手机的元素
}else{
    textContains("苏康码").find().click()
}
sleep(1000);toast("准备截图拉");
//text("苏康码").find().click(); //点击苏康码(先查找再点击)

requestScreenCapture(false);//请求截图
var im = captureScreen();//截图
var path = "/sdcard/screenshot.png";
//保存图片
im.saveTo(path);
toast("保存图片");//tosat提示
//把图片加入相册中
app.sendBroadcast(

    new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, android.net.Uri.fromFile(new java.io.File(path)))  
);sleep(2000);


while(!click("行程卡"));sleep(5500);    //这里是需要点击的工作台，自行修改 

//click(904,2134);sleep(6500);//打开行程卡
if(text("当前查询内容").exists()){
    sleep(1000);toast("2ok");
    click(180,1459);sleep(1000);
    //匹配页面包含手机的元素
}else{
    textContains("行程卡").find().click();toast("未打开行程卡！")
}

while(!click("查询"));sleep(5500);

//click(566,1658);sleep(3000);//查询
//swipe(840,33,500,1000,2000);sleep(1000);
//click(891,941);sleep(5000);
toast("完成！");
home();
//engines.stopAllAndToast();//停止所有脚本


requestScreenCapture(false);//请求截图
var im2 = captureScreen();//截图
var path2 = "/sdcard/screenshot2.png";
//保存图片
im2.saveTo(path2);
toast("保存图片");//tosat提示
//把图片加入相册中
app.sendBroadcast(

    new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, android.net.Uri.fromFile(new java.io.File(path)))  
);sleep(2000);

engines.stopAllAndToast();