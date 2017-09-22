var Glance = require("glance-webdriver").default

var glance = new Glance({
  driverConfig: { desiredCapabilities: { browserName: 'chrome' } }
});

glance.url("https://google.com/");
