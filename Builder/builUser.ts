import { KeyUser, User } from "./User";


export class UserBuilder {
    private  currentUser: User = {} as User;
    private  picks: KeyUser[] = [];

  setName(name:string):UserBuilder{
        this.currentUser['name'] = name;
        this.picks.push('name')
        return this;
    }
  setUsername(username:string):UserBuilder{
        this.currentUser['username'] = username;
        this.picks.push('username')
        return this;
    }
  setLastName(lastName:string):UserBuilder{
        this.currentUser['lastName'] = lastName
        this.picks.push('lastName')
        return this;
    }
  setAddress(address:string):UserBuilder{
        this.currentUser['address'] = address
        this.picks.push('address')
        return this;
    }
  setBirthday(birthday:Date):UserBuilder{
        this.currentUser['birthday'] = birthday
        this.picks.push('birthday')
        return this;
    }
  setMail(mail:string):UserBuilder{
        this.currentUser['mail'] = mail
        this.picks.push('mail')
        return this;
    }
  setAge(age:number):UserBuilder{
        this.currentUser['age'] = age
        this.picks.push('age')
        return this;
    }


  build(): Pick<User, any >  {
        let user: Pick<User, any > = {} as User;
        this.picks.forEach((p: KeyUser)=>{
            user[p] = this.currentUser[p];
        })
        this.currentUser = {} as User
        this.picks = [];
        return user;
    }
}