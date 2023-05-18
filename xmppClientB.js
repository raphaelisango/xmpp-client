
import {createRequire} from "module";

const require = createRequire(import.meta.url);

const xmpp = require("simple-xmpp");

import XmppClass from "./xmppClass.js"
  
  
  const Xmpp = XmppClass(xmpp, 5222,"localhost");
       
      Xmpp.On("error", error => console.log(`something went wrong!${error} `))
      Xmpp.On("online", data => {
                setInterval(()=>{
         console.log("hi dude"); console.log(Xmpp.Send("percy","localhost", `hi dude`));
         
    }, 1000);
     })
       
      Xmpp.connect({
            "jid": "percy@localhost",
            "password": "12345",
            "host": "localhost",
            "port": 5222
      });

