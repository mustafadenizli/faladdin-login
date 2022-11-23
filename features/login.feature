Feature: faladdin login steps

  @Android @EndToEndTest @test1
  Scenario: Faladdin - Tarot Falı end to end test (profil güncellemesi olmadan ilkkez üye olup Tarot falına user tıklar.)
    Given user on faladdin home page
    When user taps to Tarot falı menu on home page
    Then user should see tarot falı header: "<Tarot Kartlarını Seç>"
    And user select random kart
    And user drags the card in the history area
    And user select random kart
    And user drags the card in the now area
    And user select random kart
    And user drags the card in the feature area
    And user taps to Devam et button "<Devam Et>"
    Then user should see header title: "<merhaba>"
    And user fills the name field
    And user taps to Devam et button "<Devam Et>"
    Then user should see header title: "<cinsiyetin nedir?>"
    And user selects gender
    And user taps to Devam et button "<Devam Et>"
    Then user should see page title: "<Doğum tarihin nedir?>"
    And user selects birthday date
    And user taps to Devam et button "<Devam Et>"
    Then user should see page title: "<Çalışma durumun nedir?>"
    And user selects the run state from the list
    And user taps to Devam et button "<Devam Et>"
    Then user should see page title: "<İlişki durumun nedir?>"
    And user selects the run state from the list
    And user taps to Devam et button "<Devam Et>"
    Then user should see loading image
    Then user should see tarot falı header: "<Tarot Kartlarını Seç>"

  @Android @EndToEndTest @test2
  Scenario: Faladdin - Tarot Falı end to end test
    Given user on faladdin home page
    When user taps to Tarot falı menu on home page
    Then user should see tarot falı header: "<Tarot Kartlarını Seç>"
    When user select random kart
    And user drags the card in the history area
    And user select random kart
    And user drags the card in the now area
    And user select random kart
    And user drags the card in the feature area
    And user taps to Devam et button "<Devam Et>"
    Then user should see page title: "<test,fal konusunu seç>"
    When user selects the run state from the list
    And user taps to Devam et button "<Devam Et>"
    Then user should see loading image
    Then user should see final screen text: "<bekleyiniz falınız hazırlanıyor>"
    When user taps to back button on page
    Then user should see text: "<falın hazırlanıyor>" on home page
    When user waits for the fortune-telling result
    Then user should see text: "<falın hazır>" on home page
    When user taps to button: "<Hemen Oku>" on home page
    Then user should see page title text: "<Tarot Falı>"
    Then user should see page date text: "<Tarot Falı>"

  @test3
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
