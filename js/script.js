console.log('JS OK');

/* 
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina gradevole. */

// FUNZIONI --------------------------------------------------------


// function cardsCreate () {

//     for (i = 0; i < team.length; i++) {

//         const members = team[i];

//         console.log(members.name);
//         console.log(members.role);



//         // Creo le card 
//         const card = document.createElement('div');
//         card.classList.add('card');

//         container.appendChild(card);


//         const img = document.createElement('img');
//         img.classList.add('img');

//         card.append(img);

//         const name= document.createElement('h4');
//         name.classList.add('name');

//         card.append(name);

//         const role = document.createElement('p');
//         role.classList.add('role');

//         card.append(role);


//     }
// }


// Recupero elemento dalla pagina 

const container = document.getElementById('team-box')
let items = '';


// Array membri 

const team = [
    {
        img: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        role: 'Founder & CEO',

    },

    {
        img: 'img/angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        role: 'Chief Editor',

    },

    {
        img: 'img/walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        role: 'Office Manager',

    },

    {
        img: 'img/angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        role: 'Social Media Manager',

    },

    {
        img: 'img/scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        role: 'Developer',

    },

    {
        img: 'img/barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        role: 'Graphic Designer',

    }
]


for (i = 0; i < team.length; i++) {
    const members = team[i];


    // Creo stringhe

    for (const key in members) {
        items += `<p>${members[key]}</p>`;
    }
}

console.table(team);


// cardsCreate();


// Stampo in pagina le stringhe 

container.innerHTML  = items;



