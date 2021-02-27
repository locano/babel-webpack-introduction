export const createCard = ()=> {
    const card = document.createElement('div');
    card.classList = "card animate__animated animate__bounceInLeft";
    card.style.width = '350px';
    
    
    const img = document.createElement('img');
    img.classList = "card-img-top";
    img.src = '../images/webpack-logo.png';
    img.alt = "Card image";
    img.width="350";
    
    const cardBody = document.createElement('div');
    const cardText = document.createElement('p');
    cardText.innerText = "Ok... sometimes WebPack can be a little stressful";
    cardText.classList="card-text";
    cardBody.appendChild(cardText);
    
    card.appendChild(img);
    card.appendChild(cardBody);
    return card;
}