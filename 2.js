auto(); // 自动打开无障碍服务
setScreenMetrics(1080, 2340)



if(currentActivity().search("com.caict.xingchengka") == -1){//当前 APP 是企业微信

    //launchApp("企业微信");//
    app.launch("com.caict.xingchengka");
    toast('通信行程卡已打开');
    log('通信行程卡已打开')
    sleep(5000);
    }
gestures([350, [300, 400], [300, 1400]],
         [350, [600, 400], [600, 1400]],
         [350, [900, 400], [900, 1400]]);//三指下滑截图
sleep(5000);
if(currentActivity().search("com.tencent.wework") == -1){//当前 APP 是企业微信

//launchApp("企业微信");//
app.launch("com.tencent.wework");
toast('企业微信已打开');
log('企业微信已打开')
sleep(5000);
}


while(!click("工作台"));sleep(500);    //这里是需要点击的工作台，自行修改
swipe(500,2000,500,1000,201);//上滑//因为是while()，所以只要没有点击到文字，就会一直循环
while(!click("健康上报"));sleep(3000); //
while(!click("仲恺本科生健康上报"));  //绝对对于text的坐标点击，手机不同自己微调一下
sleep(2000);
click("广州市内（校内）");sleep(500);
click("上传当前位置");sleep(500);
if(id("ceq").exists())
id("ceq").click();

click("本人及同住人员均无异常"); sleep(500);
click("否",1); sleep(50);//谢谢你企业微信
swipe(700, 1900, 700, 450, 1000);//上滑
click("否",3);sleep(50);//合着问题里的“否”也能算进去是吧
click("否",5);sleep(50);
click("绿码");sleep(500);
swipe(700, 1900, 700, 450, 1000);//上滑

//有网络不稳定导致失败的概率
//辣鸡小程序
/* click("通信行程卡小程序");sleep(5000);
className("android.view.View").text("同意并授权运营商查询本人在疫情期间7天内到访地信息").depth(20).findOne().click();
sleep(500);
className("android.widget.Button").findOne().click()
sleep(5000);//预留加载时间

gestures([350, [300, 400], [300, 1400]],
         [350, [600, 400], [600, 1400]],
         [350, [900, 400], [900, 1400]]);//三指下滑截图
sleep(1000);

back();sleep(500)//返回上一步
back();sleep(500); */

//这个地方如果报错，我的建议是用绝对坐标点击
var c = text("点击上传").indexInParent(1).findOnce().bounds();//通信行程卡截图上传
var x = c.centerX();
var y = c.centerY();
click(x,y);
sleep(500);

var d = text("其他方式").findOnce().bounds();
var z = d.centerX();
var w = d.centerY();
click(z,w);
sleep(2000);

click(250,750);sleep(500);//选择照片

click("是",8); sleep(500);//给予足够的上传时间
log('通信行程卡截图上传完毕')
className("android.view.View").text("绿色行程卡").waitFor();

    var e = textContains("同意并提交").findOnce();
    if(!e.checked())
    e.click();

    toast('打卡成功');//消息提示
    log('已提交');//消息提示
    sleep(500);

//以下为清空后台锁屏模块，可有可无
home();//返回桌面
recents();//清空后台
sleep(2000);
id("clearAnimView").findOne().click();
home();
sleep(500);
//实现锁屏须在桌面主页放一个锁屏小部件
//当然每部手机情况不同，所以需要编程动手能力
className("android.widget.RelativeLayout").desc("锁屏").findOne().click(); //作者：Air-Holic https://www.bilibili.com/read/cv18879376 出处：bilibili