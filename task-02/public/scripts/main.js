let items = [];

async function fetchData() {
    let url = "/todo";
    try {
        const response = await fetch(url);
        const data = await response.json();
        items = data;
    } catch (err) {
        console.log(err);
    }
}

async function setItems() {
    await fetchData();
    let list = document.querySelector('ul');
    items.forEach(item => {
        let listItem = document.createElement('li');
        let itemData = item.item;
        listItem.textContent = itemData;
        listItem.addEventListener('click', async (event) => {
            event.target.remove();
            await fetch('/todo/' + itemData, {
                method: 'DELETE',
            });
        });
        list.appendChild(listItem);
    });
}

setItems();
