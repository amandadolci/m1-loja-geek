function geekWordCards(secao) {
  let sections = document.querySelector('.sections');
  let section = document.createElement('section');
  sections.appendChild(section);

  let div1 = document.createElement('div');
  section.appendChild(div1);

  let sectionTitle = document.createElement('h1');
  sectionTitle.setAttribute('class', 'section-title');
  sectionTitle.innerHTML = secao[0].nome;
  div1.appendChild(sectionTitle);

  let div2 = document.createElement('div');
  section.appendChild(div2);

  let ul = document.createElement('ul');
  ul.setAttribute('class', 'div-list');
  div2.appendChild(ul);

  for (i = 1; i < secao.length; i++) {
    let item = secao[i];
    let li = document.createElement('li');
    ul.appendChild(li);

    let div2_1 = document.createElement('div');
    div2_1.setAttribute('class', 'list-card');
    li.appendChild(div2_1);

    let a = document.createElement('a');
    a.setAttribute('class', 'card-item');
    div2_1.appendChild(a);

    let img = document.createElement('img');
    img.setAttribute('class', 'card-img');
    img.src = item.image;
    img.alt = item.name;
    a.appendChild(img);

    let h2 = document.createElement('h2');
    h2.innerHTML = item.name;
    a.appendChild(h2);

    let valor = document.createElement('small');
    valor.innerHTML = item.price;
    div2_1.appendChild(valor);
  }
}
geekWordCards(listFrames);
geekWordCards(listFigures);
