let itens = [
  {
    image: './assets/img/actions/dragonballpersonagem.jpg',
    name: 'Goku Super Sayajin 2',
    price: 'R$175,00',
    type: 'action',
  },
  {
    image: './assets/img/actions/starwarspersonagem.jpg',
    name: 'Baby Yoda',
    price: 'R$150,00',
    type: 'action',
  },
  {
    image: './assets/img/actions/Woody.png',
    name: 'Woody',
    price: 'R$130,00',
    type: 'action',
  },
  {
    image: './assets/img/actions/BuzzLightyear.jpg',
    name: 'Buzz Lightyear',
    price: 'R$130,00',
    type: 'action',
  },
  {
    image: './assets/img/actions/aranhadeferro.jpg',
    name: 'Iron Spider',
    price: 'R$200,00',
    type: 'action',
  },
  {
    image: './assets/img/actions/Captain America Endgame.png',
    name: 'Captain America',
    price: 'R$200,00',
    type: 'action',
  },
  {
    image: './assets/img/actions/iron_man_mark_l_infinity_war.jpg',
    name: 'Iron Man Infinity War',
    price: 'R$200,00',
    type: 'action',
  },
  {
    image: './assets/img/actions/Frodo and Gollum.jpg',
    name: 'Frodo and Gollum',
    price: 'R$180,00',
    type: 'action',
  },
  {
    image: './assets/img/actions/Legolas.jpg',
    name: 'Legolas',
    price: 'R$140,00',
    type: 'action',
  },
  {
    image: './assets/img/actions/FunkoHP.jpg',
    name: 'Funko Harry Potter',
    price: 'R$140,00',
    type: 'action',
  },
  {
    image: './assets/img/actions/Severus Snape.jpg',
    name: 'Severus Snape',
    price: 'R$140,00',
    type: 'action',
  },
  {
    image: './assets/img/actions/Super Mario.jpg',
    name: 'Super Mario',
    price: 'R$100,00',
    type: 'action',
  },
  {
    image: './assets/img/actions/Crash Bandicoot.jpg',
    name: 'Crash Bandicoot',
    price: 'R$80,00',
    type: 'action',
  },
  {
    image: './assets/img/painting/C-3PO.jpg',
    name: 'C-3PO',
    price: 'R$120,00',
    type: 'painting',
  },
  {
    image: './assets/img/painting/Star wars.jpg',
    name: 'Star Wars',
    price: 'R$120,00',
    type: 'painting',
  },
  {
    image: './assets/img/painting/Stranger Things 1.jpg',
    name: 'Stranger Things S1',
    price: 'R$120,00',
    type: 'painting',
  },
  {
    image: './assets/img/painting/Stranger Things 4.jpg',
    name: 'Stranger Things S4',
    price: 'R$120,00',
    type: 'painting',
  },
  {
    image: './assets/img/painting/Joker.jpg',
    name: 'Joker',
    price: 'R$180,00',
    type: 'painting',
  },
  {
    image: './assets/img/painting/I am Batman.jpg',
    name: `I'm Batman`,
    price: 'R$50,00',
    type: 'painting',
  },
  {
    image: './assets/img/painting/The Lord of the Rings.jpg',
    name: 'The Lord of the Rings',
    price: 'R$100,00',
    type: 'painting',
  },
  {
    image: './assets/img/painting/Marvel Civil War.jpg',
    name: 'Civil War',
    price: 'R$150,00',
    type: 'painting',
  },
  {
    image: './assets/img/painting/Marvel Infinity War.jpg',
    name: 'Avengers Infinity War',
    price: 'R$110,00',
    type: 'painting',
  },
  {
    image: './assets/img/painting/Marvel Endgame.jpg',
    name: 'Avengers Endgame',
    price: 'R$110,00',
    type: 'painting',
  },
  {
    image: './assets/img/painting/Marvel.jpg',
    name: 'Marvel Comics',
    price: 'R$80,00',
    type: 'painting',
  },
  {
    image: './assets/img/painting/Controller.jpg',
    name: 'Controller',
    price: 'R$20,00',
    type: 'painting',
  },
  {
    image: './assets/img/painting/You Matter.jpg',
    name: 'You Matter',
    price: 'R$50,00',
    type: 'painting',
  },
];

let listFigures = [{ nome: 'Action Figures' }]; //Irá armazenar todos os objetos que fazem parte da seção de action figures.
let listFrames = [{ nome: 'Posters' }]; //Irá armazenar todos os objetos que fazem parte d-a seção de frames.

function separateItens(lista) {
  for (i = 0; i < lista.length; i++) {
    if (lista[i].type == 'action') {
      listFigures.push(lista[i]);
    } else if (lista[i].type == 'painting') {
      listFrames.push(lista[i]);
    }
  }
}
separateItens(itens);
