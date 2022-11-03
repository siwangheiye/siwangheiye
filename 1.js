auto();
if (!device.isScreenOn()) //息屏状态将屏幕唤醒
    device.wakeUp();//唤醒设备
   sleep(1000); // 等待屏幕亮起
   if(currentActivity().search("com.tencent.wework") == -1){//当前 APP 是企业微信
 
    launchApp("企业微信");//launch("com.tencent.wework");
    toast('企业微信已打开');
    sleep(8000);
    }
     
    while(!click("消息"));sleep(1500);    //这里是需要点击的工作台，自行修改
    while(!click("健康上报"));sleep(3000); //因为是while()，所以只要没有点击到文字，就会一直循环
    toast('进入健康上报');
    click(602,2166);
    sleep(3000);

    click(390,795);sleep(1500);
    Input()

click(318,1214);sleep(1000);
settext([i],text);
settext("36.5");
settext("36.5");

click(490,1288);
settext([i],text);
settext("36.5");
settext("36.5");

click("无",0);sleep(1500);
swipe(586,1747,700,586,1747);
click("无",1);sleep(1500);
click(489,1119);sleep(1500);

    

