Feature: faladdin kahve türü end-to-end test

  @Android @EndToEndTest1
  Scenario: Faladdin - Tarot Falı end to end test (profil güncellemesi olmadan ilkkez üye olup Tarot falına user tıklar.)
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
    Then user should see header title: "<merhaba>"
    When user fills the name field
    And user taps to Devam et button "<Devam Et>"
    Then user should see header title: "<cinsiyetin nedir?>"
    When user selects gender
    And user taps to Devam et button "<Devam Et>"
    Then user should see page title: "<Doğum tarihin nedir?>"
    When user selects birthday date
    And user taps to Devam et button "<Devam Et>"
    Then user should see page title: "<Çalışma durumun nedir?>"
    When user selects the run state from the list
    And user taps to Devam et button "<Devam Et>"
    Then user should see page title: "<İlişki durumun nedir?>"
    When user selects the run state from the list
    And user taps to Devam et button "<Devam Et>"
    Then user should see loading image
    Then user should see tarot falı header: "<Tarot Kartlarını Seç>"


  @Android @EndToEndTest2
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
