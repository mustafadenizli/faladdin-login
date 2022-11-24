Feature: faladdin login steps

  @testRun
  Scenario: user wants to login on faladdin
    Given user on login page
    When user taps to Google Button: "Google ile Devam Et" on login page
    Then user should see kvkk text title: "Kullanıcı Aydınlatma Metni"
    When user taps to Anladım button
    Then user should see account select screen page title: "Bir hesap seçin"
    When user select account
    Then user should see success screen: "Faladdin’e hoş geldin!"
    When user taps to close icon
    Then user should see home page image view header
    When user taps to login icon
    Then user should see profil page title: "Profilim"
    When user taps to settings icon
    Then user should see settings language text: "Dil"
    When user taps to delete account button
    Then user should see confirmation screen page title: "Hesabını silmek istediğine emin misin?"
    When user taps to yes delete button
    Then user should see faladdin promotional screen image
