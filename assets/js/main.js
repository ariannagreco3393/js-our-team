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

//seleziono il div team dal DOM
const teamElement = document.querySelector('.team')


for (let i = 0; i < team.length; i++) {
    let teamMember = team[i];
    
    console.log(teamMember.name);
    console.log(teamMember.role);
    console.log(teamMember.image);
    console.log('_____');
}



//stampare le stesse informazioni su DOM sottoforma di stringhe

for (let i = 0; i < team.length; i++) {
    const memberTeam = team[i]

    const p = document.createElement('p')
    p.append(memberTeam.name, memberTeam.role, memberTeam.image,)
    teamElement.append(p)
}


/*
BONUS
*/

//trasformare la stringa foto in img

for (let k = 0; k < team.length; k++) {
    const membro = team[k];

    const img = document.createElement('img')
    img.src = "./img/" + membro.image
    teamElement.append(img)   
}

