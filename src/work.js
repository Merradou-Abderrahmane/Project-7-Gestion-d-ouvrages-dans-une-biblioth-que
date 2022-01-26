class Work {
    id;
    title;
    author;
    price;
    date;
    language;
    type;

//   get id(){
//       return this.id;
//   }
  
//   set id(value){
//       this.id = value;
//   }

//   get title(){
//       return this.title;
//   }

//   set title(value){
//       this.title = value;
//   }

    workDetail(){
        var detail = `L'ouvrage ${this.title} est un ${this.type} en langue ${this.language}, écrit par ${this.author} et publié le ${this.date}. Le prix de ${this.title} est de ${this.price} Dhs.`
        return detail
    }
}