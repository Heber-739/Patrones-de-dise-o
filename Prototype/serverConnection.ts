(()=>{
    class Connection{
        constructor(
                    public driver:string,
                    public server:string,
                    public database:string,
                    public user:string,
                    public password:string
                    ){}
    
    }

class ServerConnectionPrototype {
    public connection: Connection;
    public key: string;

    constructor(connection:Pick<ServerConnectionPrototype,"connection"> ){
        this.connection = connection.connection;
    }

    public clone(): ServerConnectionPrototype {
        const clone = new ServerConnectionPrototype({...this})
        console.log(clone);
        return clone;
    }
    public setKey(key:string){
        this.key = key;
    }

}


function conectToServer() {
    const connectionData = new Connection("MySql","localhost","users","cosme fulanito","123");
    let conect = new ServerConnectionPrototype({connection:connectionData})
    conect.setKey('cosme.123');
    let retry = conect.clone();
    console.log(conect);
    console.log(retry);
    console.log(conect === retry)

}

conectToServer();
})()