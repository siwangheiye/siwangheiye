auto();
if (!device.isScreenOn()) //息屏状态将屏幕唤醒
    device.wakeUp();//唤醒设备
   sleep(1000); // 等待屏幕亮起
   if(currentActivity().search("com.tencent.wework") == -1){//当前 APP 是企业微信
 
    launchApp("企业微信");//launch("com.tencent.wework");
    toast('企业微信已打开');
    sleep(6000);
    }
     
    while(!click("消息"));sleep(500);    //这里是需要点击的工作台，自行修改
    while(!click("健康上报"));sleep(1000); //因为是while()，所以只要没有点击到文字，就会一直循环
    toast('进入健康上报');
    click(602,2166);
    sleep(2000);

    click(390,795);sleep(1500);
    var a = testContains("36.5");
    if(!a.checked())
a.click();

click(318,1214);sleep(1000);
var b = testContains("36.6");
    if(!b.checked())
b.click();

click(490,1288);
var c = testContains("36.8");
    if(!c.checked())
c.click();

click("无",0);sleep(1500);
swipe(586,1747,700,586,1747);
click("无",1);sleep(1500);
click(489,1119);sleep(1500);

    

