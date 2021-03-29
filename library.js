const { Options } = require('selenium-webdriver/chrome');

var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

  var driver = new webdriver.Builder().forBrowser('chrome').build();
  driver.get('https://library-app.firebaseapp.com');

  driver.findElement(By.css('input'));
  driver.findElement(By.css('.btn-primary')).getText().then(function(txt){
    console.log("The text of the button is: " + txt);
  });
  driver.findElements(By.css('nav li')).then(function(elements){
    elements.map(function(el){
      el.getText().then(function(txt){
        console.log("the text of the navbar element is: " + txt);
      });
    });
  });




  // driver.sleep(10000);
  // driver.quit();

