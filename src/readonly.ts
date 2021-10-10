export {};

class VisaCard {
  constructor(public readonly owner: string){
  }
}

let myVisaCard = new VisaCard('Ham-san');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';