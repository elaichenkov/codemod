browser.url(env.url + '/ng1/calculator');
$("*[ng-model=\"first\"]").setValue(4);
$("#gobutton").click();
let list = $$('.count span');
$("a=" + postTitle).isExisting();
var dog = $$(".pet=Dog");

$('#abc').$('#def').isExisting()
$('#abc').$('#def').isExisting()

browser.$("*[ng-model=\"first\"]").setValue(4);
browser.$$("#gobutton")[0].click();

firstNum.setValue('1');
browser.pause(1000)
browser.debug()
browser.debug()
const source = browser.getSource()
const url = browser.getUrl()
const url2 = browser.getUrl()
browser.execute(function() {console.error('error from test'); });

(async () => {
    const EC = require("wdio-wait-for");
    var button = $('#xyz');
    var isClickable = EC.elementToBeClickable(button);

    // You can define your own expected condition, which is a function that
    // takes no parameter and evaluates to a promise of a boolean.
    var urlChanged = function() {
        return browser.getUrl().then(function(url) {
            return url === 'http://www.angularjs.org';
        });
    };

    // You can customize the conditions with EC.and, EC.or, and EC.not.
    // Here's a condition to wait for url to change, $('abc') element to contain
    // text 'bar', and button becomes clickable.
    var condition = EC.and(urlChanged, EC.textToBePresentInElement($('abc'), 'bar'), isClickable);

    let handles = await browser.getWindowHandles();
    browser.switchToWindow(handles[handles.length - 1])
    const a = 1 + 1
    console.log('test');
    const b = 2 + 2
    let handles = await browser.getWindowHandles();
    browser.closeWindow();
    // the parent should be 2 less than the length of all found window handlers
    browser.switchToWindow(handles[handles.length - 2]);

    const config = await browser.config
    let config = await browser.config;
    console.log(config);
    const windowLocation = await browser.getWindowRect()
})

browser.switchToFrame('composeWidget');
browser.closeWindow()
browser.reloadSession()
browser.reloadSession()

var foo = $("#foo");
foo.clearValue();
$("#foo").clearValue()
expect(foo.elementId).not.toBe(undefined);

browser.keys("ArrowDown");

browser.waitUntil(async () => {
    return await this.pageLoaded();
}, {
    timeout: this.timeout.xl,
    timeoutMsg: 'timeout: waiting for page to load. The url is: ' + this.url
})
browser.waitUntil(async () => {
    return await this.pageLoaded();
}, {
    timeout: 12345
})

browser.getLogs("browser");

var row = $$("*[ng-repeat=\"dataRow in displayedCollection\"]")[1];
var cells = row.$$('td');

var width = 800;
var height = 600;
browser.setWindowRect(0, 0, width, height);
browser.deleteCookies();

var titleIsNotFoo = require("wdio-wait-for").not(
    require("wdio-wait-for").titleIs('Foo')
);

browser.getWindowRect();
browser.addCookie({ name: "version", value: "v1" });
browser.deleteCookie("enableMock");
browser.getCookie("name");
browser.getCookies();
browser.back();
browser.forward();
browser.refresh();
browser.url("https://webdriver.io");
