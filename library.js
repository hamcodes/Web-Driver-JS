var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

  var driver = new webdriver.Builder().forBrowser('chrome').build();
  driver.get('https://library-app.firebaseapp.com');

  driver.findElement(By.css('input')).then(function(el){
    console.log("success " + el);
  });
  driver.findElement(By.css('.btn-primary')).then(function(el){
    console.log("found the button " + el);
  });
  // driver.findElement(By.css('.alert-success'));
  driver.findElements(By.css('nav li')).then(function(array){
    console.log("found the elements you wanted " + array);
  });




  // driver.sleep(10000);
  // driver.quit();

