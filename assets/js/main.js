/* MILESTONE 1 (da fare entro le 18):
stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
trasformare la stringa foto in una immagine effettiva

BONUS 2 (solo se non sei giá fuso):
organizzare i singoli membri in card/schede */


const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];


//stampare su console le informazioni di nome, ruolo e la stringa della foto

//console.log(team);

const teamElement = document.querySelector('.row')


for (let i = 0; i < team.length; i++) {
    let teamMember = team[i];
    
    console.log(teamMember.name);
    console.log(teamMember.role);
    console.log(teamMember.image);
    console.log('_____');
}



/*
BONUS
*/

//stampare le stesse informazioni su DOM sottoforma di stringhe
//trasformare la stringa foto in una immagine effettiva

for (let i = 0; i < team.length; i++) {
    const memberTeam = team[i]

    const p = document.createElement('p')
    const img = document.createElement('img')
    const div = document.createElement('div')

    p.append(memberTeam.name, memberTeam.role, img,)
    teamElement.append(img, p, div )

    img.src = "./img/" + memberTeam.image

  
}


//organizzare i singoli membri in card/schede


const pElements = document.querySelectorAll('p')
//console.log(pElement);

for (const pElement of pElements) {
    pElement.classList.add('member_name')
}

const imgElements = document.querySelectorAll('img')

for (const imgElement of imgElements) {
    imgElement.classList.add('member_img', 'img-fluid')
}

const cardElements = document.querySelectorAll('.row > div')

for (const cardElement of cardElements) {
    cardElement.classList.add('card')
}










