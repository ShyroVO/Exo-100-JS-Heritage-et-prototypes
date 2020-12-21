function Vehicule (couleur, roues, marque) {
    this.couleur = couleur;
    this.roues = roues;
    this.marque = marque;

    this.demarrer = function (){
        console.log("La voiture go loin");
    }

    this.arreter = function (){
        console.log("la voiture se stop")
    }
}

Vehicule.prototype.Velo = function (rayonRoues, typePeinture) {
    this.rayonRoues = rayonRoues;
    this.typePeinture = typePeinture;

    this.monter = function (){
        console.log("Je monte sur un vélo");
    }
}

Vehicule.prototype.Voiture = function (assurance, proprietaire){
    this.assurance = assurance;
    this.typePeinture = proprietaire;

    this.passerAuCarWash = function (){
        console.log("blablabla ;-)");
    }
}

