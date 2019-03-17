"use strict"
const jumbotron = document.querySelector('.jumbotron');





// create
const titleContainer = document.createElement('div');   
const mainTitle = document.createElement('h1');
const redText = document.createElement('span');

const listContainer = document.createElement('div');
const list = document.createElement('ul');


// add class
titleContainer.classList.add('row', 'title-container');
mainTitle.classList.add('text-center');
redText.classList.add('red-text');

listContainer.classList.add('row', 'list-container')



// add attr


//add text
mainTitle.textContent = 'TRIBUTE PAGE';
redText.textContent = 'DEADPOOL';

// append
jumbotron.append(titleContainer);
titleContainer.append(mainTitle);
mainTitle.append(redText);

jumbotron.append(listContainer);
listContainer.append(list);
console.log(jumbotron);



const spanArr = ['SOME YEAR', 'SOME OTHER YEAR', 'SOME OTHER DIFERENT YEAR', 'YET ANOTHER YEAR', 'YESTERDAY?', 'NO...', 'WHO CARES?', 'DUNNO', 'MEEH', '????', '@$%^#'];
const liArr = ['- BORN IN CANADA AS WADE WILSON.', '- HIS MOTHER DIED OF CANCER WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.', '- WADE BEGAN HIS MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.', '- IN AMERICA, HE MET AND FELL IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.', '- LEARNING THAT HE HAD CONTRACTED CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.', '- IN PURSUE OF HOPE FOR HIS TERMINAL CONDITION, HE JOINS THE WEAPON X PROGRAM', '- HIS CANCER WAS TEMPORARILY ARRESTED VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE', '- DURING ONE MISSION, WILSON KILLED HIS TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.', '- IN THE HOSPICE HE WAS TORTURED BY THE DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR DEAD', '- FOLLOWING HIS ESCAPE HE SOON RETURNED TO HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL', '- WHY DO YOU KEEP READING, THIS IS SO BORING...'];

const fnCreateLi = function(textLiArr, textSpanArr) {
    for(let i=0; i<textLiArr.length; i++) {
        let listItem = document.createElement('li');
        let textInitem = document.createElement('span');

        listItem.classList.add('list-item');
        textInitem.classList.add('red-text');

        listItem.textContent = textLiArr[i];
        textInitem.textContent = textSpanArr[i];

        list.append(listItem);
        listItem.prepend(textInitem);
    }
}
const listItems = fnCreateLi(liArr, spanArr);
console.log(listItems);






// function createNode(tag, classArr, attrObj, text, container, mode) {
//     let el = document.createElement(tag); //create
//     // add class
//     if (classArr !== null) {
//         for (let className of classArr) {
//             el.classList.add(className)
//         }
//     }
//     for (let key in attrObj) { //add attr
//         let hasKey = attrObj.hasOwnProperty(`${key}`);
//         if (hasKey) {
//             el.setAttribute(`${key}`, attrObj[key]);
//         }
//     }
//     el.textContent = text; // add text
//     container[mode](el);
//     return el;
// }

// let titleContainer = createNode('div', ['row', 'title-container'], null, null, jumbotron, 'append');
// let h1 = createNode('h1',['text-center'], null,' TRIBUTE PAGE', titleContainer, 'append');
// let deadpoolSpan = createNode('span', ['red-text'], null, 'DEADPOOL', h1, 'prepend');
// let deadpoolP = createNode('p', ['text-center'], null, 'WITH GREAT POWER COMES GREAT', titleContainer, 'append' );
// let deadpoolPSpan = createNode('span', ['red-text'], null, 'IRRESPONSIBILITY', deadpoolP, 'append' );
// let imgContainer =  createNode('div', ['row'], {id: 'title', src: 'main-image-container'}, null, jumbotron, 'append');
// let imgContainerImg = createNode('img', ['img-responsive', 'inside-shadow'], {id: 'src', src: "http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg"}, null, imgContainer, 'append');
// let ulContainer = createNode('div', ['row', 'list-container'], null, null, jumbotron, 'append');
// let titleUl = createNode('ul', null, null, null, ulContainer, 'append');





























