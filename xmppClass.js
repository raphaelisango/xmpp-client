// xmpp module
class xmppclass {
  #PORT;
  #DOMAIN;
  #CLIENT;
  #XMPP;
  #EXECA;

  // #connect;

  constructor(xmpp, execa, port, domain) {
    this.#PORT = port;
    this.#DOMAIN = domain;
    this.#EXECA = execa;
    this.#XMPP = xmpp;
  }
  connect({ jid, password, host, port }) {
    this.#XMPP.connect({
      jid: jid,
      password: password,
      host: host,
      port: port,
    });
    return this;
  }
  Send(user, host, message) {
    this.#XMPP.send(`${user}@${host}`, message);
  }
  On(event) {
    this.#XMPP.on(event, callbackfunc);
  }
  async User(command, script) {
    switch (command) {
      case "register":
        return (output = await this
          .#EXECA`echo "percymiler" | sudo -S register ${script.name} ${script.host} ${script.password}`); //sudo prosodyctl register passy localhost 1234
        break;
      case "password":
        return (output = await this
          .#EXECA`echo "percymiler" | sudo -S register ${script.name} ${script.host} ${script.password}`); //sudo prosodyctl register passy localhost 1234

        break;
      case "delete":
        return (output = await this
          .#EXECA`echo "percymiler" | sudo -S prosodyctl deluser  ${script.name}@${script.host} `); //sudo prosodyctl register passy localhost 1234

        break;

      default:
        return 0;
        break;
    }
  }
}

function XmppClass(xmpp, port, domain) {
  return new xmppclass(xmpp, port, domain);
}

export default XmppClass;
/*
  USE CASE EXAMPLE
  import XmppClass from "./path"
  
  
  cont Xmpp = XmppClass(xmpp, 3000,localhost);
       
      Xmpp.On("error", error => console.log(`something went wrong!${error} `))
      Xmpp.On("online", data => {
                setInterval(()=>{
    
         Xmpp.Send("percy","localhost", `hi dude`)
    }, 1000);
     })
       
      Xmpp.connect({
            "jid": "percy@localhost",
            "password": "12345",
            "host": "localhost",
            "port": 5222
      });


  
   */
