const colors = ["red", "green", "blue", "pink", "brown", "yellow"];
const colorList = [...colors, ...colors];
const cardsCount = colorList.length;
const allCards = document.querySelector('.row');   //cards 
let activeCard = null;
let countAppearingCard = 0;

//===============================================================

function buildCard(color) {

    let parent = document.createElement('div');
    parent.classList.add('col-md-3');
    let child = document.createElement('div');
    child.classList.add('inner');
    child.setAttribute('data-color', color);
    child.setAttribute('data-appearingColor', 'false');
    parent.append(child);

    parent.addEventListener('click', function () {
        child.style.backgroundColor = color;
        let child_appearing_color=child.getAttribute('data-appearingColor');

        if(activeCard === child || child_appearing_color === 'true')
        {
            return;
        }
        if (activeCard == null) {
            activeCard = child;
            return;
        }


        // card match
        let childColor = child.getAttribute('data-color');
        let activeColor = activeCard.getAttribute('data-color');

        if (childColor === activeColor) {
            child.setAttribute('data-appearingColor', true);
            activeCard.setAttribute('data-appearingColor', true);
            countAppearingCard += 2;
            activeCard = null;
            if (countAppearingCard === cardsCount) {
                alert('you win ! refersh page again to play');
            }
            return;
        }

        // card not match

        setTimeout(() => {
            child.style.backgroundColor = null;
            activeCard.style.backgroundColor = null;
            activeCard = null;
            return;
        }, 1000);

    })
    console.log(parent);

    return parent;
}


//================================

for (let i = 0; i < cardsCount; i++) {
    let randomIndex = Math.floor(Math.random() * colorList.length);
    let color = colorList[randomIndex];
    colorList.splice(randomIndex, 1);
    let card = buildCard(color);
    allCards.appendChild(card);

}