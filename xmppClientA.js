const xmpp = require("simple-xmpp");
//hussein
xmpp.on ("online", data => {
    console.log("Hey you are online! ")
    console.log(`Connected as ${data.jid.user}`)
    send();
})

function send () {
    setTimeout(send, 5000);
    xmpp.send("percy@localhost", `hi! ${Date.now()}`)
}
xmpp.on("error", error => 
    console.log(`something went wrong!${error} `))

xmpp.on("chat", (from, message)=>{
    console.log(`Got a message! ${message} from ${from}`)
})

xmpp.on('groupchat', function(conference, from, message, stamp) {
	console.log('%s says %s on %s on %s at %s', 
                from, message, conference, stamp.substr(0,9), stamp.substr(10));
});

xmpp.connect({
    "jid": "percy@localhost",
    "password": "12345",
    "host": "localhost",
    "port": 5222
})

/*
 epmd -d   epmd running

ejabberdctl live

epmd -names       running nodes

opt/ejabberd-23.04/bin     is the  root

/etc/init.d/ejabberd start

cd /opt/ejabberd-20.03/bin
./ejabberdctl register mf marekfoss.org ********
> User mf@marekfoss.org successfully registered
*/
