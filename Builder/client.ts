import { KeyUser, User } from "./User"
import { UserBuilder } from "./builUser"

(()=>{
    let user:Pick<User, KeyUser> = new UserBuilder().setAddress('asd').setMail('asd').setAge(32).build()
})()