const cartItems = document.querySelector('.cart_items');
const deleteItems = document.querySelector('.delete_items');

const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]'); // парсит наш storage

if(cartStorage.length !== 0) {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = `Очистить корзину`;
    deleteItems.appendChild(deleteButton);

    cartStorage.forEach((el) => {
        const { itemTitle, itemPrice } = el;

        const newCard = document.createElement('div');
        const newTitle = document.createElement('h3');
        const newPrice = document.createElement('p');
        const newButton = document.createElement('button');
        const newBr = document.createElement('hr');

        newTitle.innerText =`${itemTitle}`;
        newPrice.innerText = `${itemPrice}`;
        newButton.innerText = `Удалить товар`;
        newButton.id = `${itemTitle}`;

        newCard.appendChild(newTitle);
        newCard.appendChild(newPrice);
        newCard.appendChild(newButton);
        newCard.appendChild(newBr);

        cartItems.appendChild(newCard);

        deleteButton.addEventListener('click', () => {
            localStorage.clear();
            location.reload();
        })

        newButton.addEventListener('click', (e) => {
            const filterStorage = cartStorage.filter((item) => item.itemTitle !== e.target.id);
            localStorage.setItem('cart', JSON.stringify([... filterStorage]));
            location.reload();

        })

    })
}
