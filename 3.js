const puppeteer = require( puppeteer );

(async () => {

const browser = await puppeteer.launch();

const page = await browser.newPage();

await page.setViewport({ // 设置视窗大小

width: 1080,

height: 2340

});

//await page.goto(https://example.com ); // 打开页面
launchApp("苏周到");sleep(5000);
click(554,1896);
click(694,673);sleep(100);
click(694,673);sleep(3000);
click(998,1058);sleep(2000);

await page.screenshot({我的手机: jkm.png });// path: 截屏文件保存路径

await browser.close();
})
