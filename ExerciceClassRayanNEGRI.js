"use strict"; //signifie on va travailler avec java strict pour avoir aucune erreur

/**             Class
 * 
 * Creer une class pokemon avec parametre name,attack,defense,hp,luck une methode isLucky et une methode attckPokemon
 * 
 * Creer deux instance de pokemon avec des stats differentes 
 * 
 * tant que l un deux n est pas mort 
 * le premier attaue le second (isLucky + attackPokemon)
 * afficher la vie et les degats endommagés du second
 * si le second est mort arreter la boucle 
 * le second attaque le premier (isLucky + attackPokemon)
 * afficher la vie et les degats endommagés du premier
 *  * si le premier est mort arreter la boucle 
 * 
 * afficher une message de fin pour le pokemon perdant
 * 
 * Formule
 * degat =att de l'attaquant - def du defenseur
 * la luck correspon a la probabilite de touche l'adversaire (precision en pourcentage)
 * generer un nombre aleatoire avec math.random()
 * Si le nombre est inferieur a luck du pokemon alors le pokemon peut attaquer 
 */


class Pokemon{       //création de la class pokemon
    constructor(name,attack,defense,hp,luck){    //création du constructeur de la classe Pokemon avec en parametre name,attack,defense,hp,luck
        this.name=name 
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.luck=luck
    }
    attackPokemon(pokemon){
        if(this.isLucky()){
            let damage=this.attack-pokemon.defense
            pokemon.hp-=damage
            console.log(this.name+' a attqué '+pokemon.name+' pour '+damage+' de degat il lui reste '+pokemon.hp+" points de vie");
        }else {
            console.log(this.name+" a raté son attaque");
        }
    }
    isLucky(){
        return this.luck>Math.random()
    }
}
let dracofeu=new Pokemon('Dracofeu',14,8,100,0.5);
let leviator=new Pokemon('Leviator',18,4,70,0.8);

while(dracofeu.hp >0 && leviator.hp>0){
    dracofeu.attackPokemon(leviator)
    if(leviator.hp<=0){
        console.log(leviator.name+" is dead !");
        break;
    }
    leviator.attackPokemon(dracofeu)
    if(dracofeu.hp<=0){
        console.log(dracofeu.name+" is Dead !");
        break;
    }
}


