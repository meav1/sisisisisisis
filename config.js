const config = {
    "ownerID": "477189482206986240", //kendi IDınızı yazınız
    "admins": [""],
    "support": [""],
    "token": "Njk5MDU3MTEwNzQyMjA0OTk4.Xqyt_w.tHic5WkzfP7xa9NMq0XLXZez9J0", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "mEN12Nszs4qogO7pLm19dTYp3mQLY3FK", //botunuzun secretini yazınız
      "callbackURL": `https://dashim.parzıval.org/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "https://dashim.parzıval.org/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;