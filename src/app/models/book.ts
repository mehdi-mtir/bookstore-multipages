export class Book {
  id : number;
  titre : string;
  auteur : string;
  prix : string;

  constructor(id : number, titre : string, auteur : string, prix : string){
    this.id = id;
    this.titre = titre;
    this.auteur = auteur;
    this.prix = prix;
  }

}
