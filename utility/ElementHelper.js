const {expect} = require("chai");
const Console = require("console");

class ElementHelper {

    async elementClick(element) {
        await console.log("elementClick adımı başladı: " + element)
        let elementValue = await $(element)
        try {
            await elementValue.click()
            await console.log("elementClick adımı başarıyla gerçekleşti")
        } catch (e) {
            await this.writeConsoleFail("elementClick adımı başarısız oldu")
            await expect(true, e).equal(false)
        }
    }

    async elementCheck(element){
        try {
            await console.log("elementCheck adımı başladı" + element)
            await $(element)
            await console.log("elementCheck adımı başarıyla gerçekleşti")
        } catch (e) {
            await console.log("elementCheck adımı başarısız")
            await expect(true, e).equal(false)
        }
    }

    async elementCheckWithText(element,text){
        await console.log("elementCheckWithText adımı başladı" + element)
        let elementValue = await $(element).getText()
        try {
            await expect(elementValue).contain(text)
            await console.log("elementCheckTextContains adımı başarıyla gerçekleşti " + elementValue)
        } catch (e) {
            await console.log("elementCheckTextContains adımı başarısız")
            await expect(true, e).equal(false)
        }
    }

    async elementClickWithText(element,text){
        await console.log("elementClickWithText adımı başladı" + element)
        let elementValue = await $(element)
        let clickValueText = await $(elementValue).getText()
        try {
            await expect(clickValueText).contain(text)
            await elementValue.click()
            await console.log("elementClickWithText adımı başarıyla gerçekleşti" + text)
        } catch (e) {
            await console.log("elementClickWithText adımı başarısız")
        }
    }

    async elementSendkey(element,text) {
        await console.log("elementSendKey adımı başladı" + element)
        let elementValue = await $(element)
        try {
            await elementValue.setValue(text)
            await console.log("elementSendKey adımı başarıyla gerçekleşti" + text)
        } catch (e) {
            await console.log("elementSendKey adımı başarısız")
            await expect(true, e).equal(false)
        }
    }

    async getText(element) {
        await console.log("getText adımı başladı" + element)
        let elementValue = await $(element)
        try {
            let result = await elementValue.getText();
            await console.log("getText adımı başarıyla gerçekleşti" + result)
        } catch (e) {
            await console("getText adımı başarısız oldu")
            await expect(true, e).equal(false)
        }
    }

    async scroll(){
        const window = await browser.getWindowSize()
        await browser.touchAction([
            { action: 'press', x: window.width / 2, y: (window.height * 3) / 4 },
            { action: 'wait', ms: 1000 },
            { action: 'moveTo', x: window.width / 2, y: window.height / 4 },
            'release',
        ])
        await browser.pause(250)
    }

}
module.exports = new ElementHelper();
