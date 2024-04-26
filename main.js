class User{
    constructor(name,id){
        this.n=name;
        this.i=id;
    }

    sayHello(){
        return `hello`;
    }
};


class Admin extends User{
    constructor(name,id,permission){
        super(name,id);
        this.p=permission;
    }
};


let newUser= new User("Osama",20);
let newAdmin= new Admin("Gamal",2,);


console.log(newUser.name);
console.log(newAdmin.p);
