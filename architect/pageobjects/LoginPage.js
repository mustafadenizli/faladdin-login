
const ElementHelper = require('../../utility/ElementHelper.js');

const kesfet = 'android=new UiSelector().resourceId("com.faladdin.app:id/getStartedButton")'
const imageViewHeader = 'android=new UiSelector().resourceId("com.faladdin.app:id/imgViewHeader")'
const AccountIcon = 'android=new UiSelector().resourceId("com.faladdin.app:id/rlAccount")'
const createAccountText = 'android=new UiSelector().resourceId("com.faladdin.app:id/tvCreateAccount")'
const selectAccountButton = 'android=new UiSelector().resourceId("com.faladdin.app:id/btnAccountSelect")'
const googleWithGoOn = 'android=new UiSelector().resourceId("com.faladdin.app:id/tvGoogle")'
const kvkkTitle = 'android=new UiSelector().resourceId("com.faladdin.app:id/md_text_title")'
const buttonPositive = 'android=new UiSelector().resourceId("com.faladdin.app:id/md_button_positive")'
const selectScreenPageTitle = 'android=new UiSelector().resourceId("com.google.android.gms:id/main_title")'
const googleAccount = 'android=new UiSelector().resourceId("com.google.android.gms:id/list").childSelector(new UiSelector().className("android.widget.LinearLayout").index(0))'
const welcomeScreenText = 'android=new UiSelector().resourceId("com.faladdin.app:id/tvWhatsNewTitle")'
const welcomeScreencloseIcon = 'android=new UiSelector().resourceId("com.faladdin.app:id/imgBack")'
const profilPageTitle = 'android=new UiSelector().resourceId("com.faladdin.app:id/title_profile")'
const settingsButton = 'android=new UiSelector().resourceId("com.faladdin.app:id/imgBtnSettings")'
const settingsLanguageName = 'android=new UiSelector().resourceId("com.faladdin.app:id/tvLanugage")'
const deleteAccountUserButton = 'android=new UiSelector().resourceId("com.faladdin.app:id/tvUserDelete")'
const confirmationScreenTitle = 'android=new UiSelector().resourceId("com.faladdin.app:id/tvTitle")'
const confirmationButton = 'android=new UiSelector().resourceId("com.faladdin.app:id/tvInbox")'
const faladdinImage = 'android=new UiSelector().resourceId("com.faladdin.app:id/imgIcon")'
class LoginPage {

    async getLoginPage() {
        //bura ayrılabilirdi sadece login akışı otomatize edileceği için burayı tek bir given'da tutmak istedim.
        //kullanıcı direk login ekranına geliyor bu metot ile.
        await ElementHelper.elementClick(kesfet)
        await ElementHelper.elementCheck(imageViewHeader)
        await ElementHelper.elementClick(AccountIcon)
        await ElementHelper.elementCheck(createAccountText)
       // await ElementHelper.elementClick(selectAccountButton)
    }

    async clickGoogleButton(text) {
        await ElementHelper.elementClickWithText(googleWithGoOn,text)
    }

    async checkKvkkTitle(text) {
        await ElementHelper.elementCheckWithText(kvkkTitle,text)
    }

    async clickOkeyButton() {
        await ElementHelper.elementClick(buttonPositive)
    }

    async checkSelectScreenPageTitle(text) {
        await ElementHelper.elementCheckWithText(selectScreenPageTitle,text)
    }

    async clickSelectAccount() {
        await ElementHelper.elementClick(googleAccount)
    }

    async checkSuccessScreenText(text){
        await ElementHelper.elementCheckWithText(welcomeScreenText,text)
    }

    async clickCloseIcon() {
        await ElementHelper.elementClick(welcomeScreencloseIcon)
    }

    async checkHomePageTitle(text){
        await ElementHelper.elementCheckWithText(welcomeScreenText,text)
    }

    async checkImageViewHeader(){
        await ElementHelper.elementCheck(imageViewHeader)
    }

    async clickLoginIcon(){
        await ElementHelper.elementClick(AccountIcon)
    }

    async checkProfilPageTitle(text) {
        await ElementHelper.elementCheckWithText(profilPageTitle, text)
    }

    async clickSettingsIcon(){
        await ElementHelper.elementClick(settingsButton)
    }

    async checkSettingsLanguageName(text) {
        await ElementHelper.elementCheckWithText(settingsLanguageName, text)
    }

    async clickDeleteAccountButton(){
        await ElementHelper.scroll()
        await ElementHelper.elementClick(deleteAccountUserButton)
    }

    async checkConfirmationScreenPageTitle(text){
        await ElementHelper.elementCheckWithText(confirmationScreenTitle, text)
    }

    async clickConfirmYesButton(){
        await ElementHelper.elementClick(confirmationButton)
    }

    async checkScreenImage() {
        await ElementHelper.elementCheck(faladdinImage)
    }

}

module.exports = new LoginPage();
