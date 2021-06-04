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
    constructor(id,name,owner,memes){
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.memes = memes;
    }
    
    constructor(id,name,owner,memes){
        this.id = id;
        this.name = name;
        this.owner = owner;
    }
    addmeme(){
        if(meme instanceof Meme){
            this.memes.push(meme);
        }
        else{
            console.log("dieu")
        }

    }
    update(id,data){
        let place = this.fine(id);
        if(place != -1){
            this.memes[place].update(data);
        }
    }
    deletememes(){
        for (let i = 0; i < this.memes.length; i++) {
            if (id == this.memes[i].id) {
                this.memes.splice(i, 1);
            };
        }

    }
    show(){
        console.log(this)
    }
}

// bài 2 mình chưa biết làm 


