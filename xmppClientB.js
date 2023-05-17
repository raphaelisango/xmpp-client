
import {createRequire} from "module";

const require = createRequire(import.meta.url);

const xmpp = require("simple-xmpp");

xmpp.on ("online", data => {
    console.log("Hey you are online! ")
    console.log(`Connected as ${data.jid.user}`)
    send();
})

function send () {
    setInterval(()=>{
    
         xmpp.send("passy@localhost", `hi dude`)
    }, 1000);
    
}
send ();
xmpp.on("error", error => 
    console.log(`something went wrong!${error} `))

xmpp.on("chat", (from, message)=>{
    console.log(`Got a message! ${message} from ${from}`)
})

xmpp.connect({
    "jid": "passy@localhost",
    "password": "1234",
    "host": "localhost",
    "port": 5222
});

