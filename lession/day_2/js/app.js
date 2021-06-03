// tên , tuổi , giới tính , vị trí trong gia đình,
// hành dộng ăn , ngủ , đi chơi
class Person{
    name;
    age;
    favorites;
   
    constructor(_name,_age,_sex,_role){
        this.name = _name;
        this.age = _age;
        this.favorites = _favorites
       

    }
    eat(){
        console.log("ăn gì đó");

    }
    sleep(){

        console.log("ngủ quá giờ");

    }
    play(){
        console.log("chơi quá giờ ");
    }
    
}
// let father = new Person("dad","30","male","bo");
// father.sleep();
// father.introduce();
// let mother = new Person();
// mother.name ="suggar daddy"
// mother.age = "20"
// mother.sex = "male"
// mother.role = "father"
// console.log(mother);

// pet " name , age , species.furcolor,legs,sleep(),play()"
// class Pet{
    
//     namePet;
//     agePet;
//     speciesPet;
//     furcolorPet;
//     legsPet;
//     constructor(_namePet,_agePet,_speciesPet,_furcolorPet,legsPet){
//         this.namePet = _name;
//         this.agePet = _age;
//         this.speciesPet = _age
//         this.furcolorPet = _role
//         this.legsPet = _legs
//     }
    
//     sleep(){
//         console.loge("ngu ban ngay")
//     }
  
//     play(){
//         console.log("dem khong ngu ")
//     }


// }

class Boy extends Person {
    handsome;
    constructor(name,age,favorites,handsome,girlFriend){
        super(name, age, favorites);
        this.handsome = "handsome";
        this.girlFriend = "beautifullgirl";


 
   }
   cook(ngon){
       console.log("nau nhung mon an" +ngon)
   }
   work(hard){
        console.log("lam việc rất là" +hard)
   }
}
class GoodBoy extends Boy{
    good;
    constructor(name,age,favorites,beauty,boyFriend,good)
    super(name,age,favorites,handsome,girlFriend)
    doSomething(){
        console.log("lam viec tot")
    }
}
class BadBoy extends Boy{
    bad;

    constructor(name,age,favorites,beauty,boyFriend,good,bad)
    super(name,age,favorites,beauty,boyFriend,good)
    racing(speed){
        console.log("lái xe với tốc độ"+speed)
    }
}
    


class Girl extends Person{
    beauty;
    boyFriend;
    constructor(name,age,favorites,beauty,boyFriend)
    super(name,age,favorites)
    cook(){
    }
    shopping(){

    }
}
class PlayGirl extends Girl{
    Playwhat;
    constructor(name,age,favorites,beauty,boyFriend,Playwhat)
    super(name,age,favorites,beauty,boyFriend)
}
let GB1 = new GoodBoy("gut boi",20,"em an com chua",10,null,11 )
console.log(GB1)
