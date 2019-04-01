describe('Protractor Demo App', function () {
	beforeEach(() => {
		browser.waitForAngularEnabled(false);
		browser.get('https://zhivkozz.github.io/DemoPage/');
		browser.driver.manage().window().maximize();
	});
	it('test', function () {

		let elFirstName = element(by.css('#basicBootstrapForm>div:nth-child(1)>div:nth-child(2)>input'));
		let elLastName = element(by.css('#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input'));
		let elHomeAdres = element(by.css('#basicBootstrapForm > div:nth-child(2) > div > textarea'));
		let elEmailAres = element(by.css('#eid > input'));
		let elPhonrNR = element(by.css('#basicBootstrapForm > div:nth-child(4) > div > input'));
		//let elLastName = element(by.css('#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input'));
		//let elLastName = element(by.css('#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input'));
		//let elLastName = element(by.css('#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input'));
		browser.sleep(1500);
		elFirstName.sendKeys('Zhivko');
		browser.sleep(1500);
		elLastName.sendKeys('Ivanov');
		browser.sleep(1500);
		elHomeAdres.sendKeys('Калейца');
		browser.sleep(1500);
		elEmailAres.sendKeys('zz.@zz.com');
		browser.sleep(1500);
		elPhonrNR.sendKeys('0123456789');
		browser.sleep(1500);
		//expect(element(by.binding('latest')).getText()).toEqual('5'); // This is wrong!
	});
});