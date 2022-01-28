class SalleManager {
#listSalle = [];
counter = 0;

get listSalle (){
    
    return this.#listSalle
}

addSalle(salle){
    this.counter = this.counter +1
    salle.id = this.counter

    this.#listSalle.push(salle)
}

getId(id){
    for(let i=0; i < this.listSalle.length; i++){
        if(id == this.#listSalle[i].id){
            return this.#listSalle[i]
        }
    }

}

editSalle(salle){
    for(let i=0; i < this.#listSalle.length; i++){
        if(salle.id == this.#listSalle[i].id){
            this.#listSalle[i] = salle
        }
    }
}

deleteSalle(id){
    this.#listSalle = this.#listSalle.filter(function(salle){
        return salle.id != id
    })
}
}