// bài 1 Meme
class Meme{
    id;
    name;
    image; 
    dateModified;
        constructor(id,name,img,dateModified){
            this.id = id;
            this.name = name;
            this.image = img;
            this.dateModified = dateModified;
          
        }
    show(){
        Meme.textContent =` name : ${this.name} , image : ${this.image}, dateModified: ${this.dateModified} `
    }
    update(data) {
               this.name = data.name;
               this.image = data.image;
                Meme.textContent = `name : ${this.name} , image : ${this.image}, dateModified: ${this.dateModified}`
        
            }
}

//bài 1.2 Meme colection
class Memecolection {
    id;
    name;
    owner;
    memes;
    addmeme(){

    }
    update(){

    }
    deletememes(){


    }
    show(){

    }
}