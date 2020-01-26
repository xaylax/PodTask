const { App } = require('@slack/bolt');
const store = require('./store');

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN
});


app.event('app_home_opened', ({ event, say }) => {  
  // Look up the user from DB
  let user = store.getUser(event.user);
 
  if(!user) {
    user = {
      user: event.user,
      channel: event.channel
    };
    store.addUser(user);
   
    say(`Good morning, <@${event.user}>! Here are some stats for _Ayla Orucevic_, your backend dev team lead:`);
    say(`♫ _Ayla_ listened to 4 hours of Intro to Python courses this week!`);
    say(`♫ Python has been added to her interests/skill profile!`);
    say(`♫ She's also been exploring topics such as *leadership*, *FORTRAN* and *SQL*`);


  } else {
    say(`Good morning, <@${event.user}>! Here are some stats for _Baby Yoda_, your backend dev team lead:`);
    say(`♫ _Baby_ listened to 6 hours of Intermediate C++ courses this week!`);
    say(`♫ C++ has been added to her interests/skill profile!`);
    say(`♫ She's also been exploring topics such as *yoga*, *YAML* and *Groovy*`);
  }
});