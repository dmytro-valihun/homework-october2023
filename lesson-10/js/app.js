function showCategory() {
    const divProducts = document.querySelector('.products');
    divProducts.textContent = '';
    const detailsDiv = document.querySelector('.details')
    detailsDiv.textContent = '';
    const divCategory = document.querySelector('.categories');
    for (let i = 0; i < data.length; i++) {
        const elem = document.createElement('div');
        elem.textContent = data[i].name;
        elem.addEventListener('click', showProducts)
        elem.setAttribute('data-category', i)
        divCategory.appendChild(elem)
    }
}

function showProducts(event) {
    const addDiv = document.querySelector('.advertisment');
    addDiv.textContent = '';
    const detailsDiv = document.querySelector('.details')
    detailsDiv.textContent = '';
    const indexCategory = event.target.getAttribute('data-category');
    const divProducts = document.querySelector('.products');
    divProducts.innerHTML = '';
    const prodArr = data[indexCategory].products;
    for (let i = 0; i < prodArr.length; i++) {
        const elem = document.createElement('div');
        elem.textContent = prodArr[i].name;
        elem.setAttribute('data-category', indexCategory)
        elem.setAttribute('data-product', i)
        elem.addEventListener('click', showItem);
        divProducts.appendChild(elem)
    }
}

function showItem(event) {
    const detailsDiv = document.querySelector('.details')
    detailsDiv.textContent = '';
    const category = event.target.getAttribute('data-category');
    const product = event.target.getAttribute('data-product');
    const currentProduct = data[category].products[product];
    for (let keys in currentProduct) {
        const elem = document.createElement('div');
        elem.innerHTML = `${keys}: ${currentProduct[keys]}`;
        detailsDiv.appendChild(elem)
    }
    const button = document.createElement('button');
    button.textContent = 'buy now!';
    detailsDiv.appendChild(button);
    button.addEventListener('click', showAdd.bind(null, currentProduct.name));
}

function showAdd(nameProduct) {
    console.log(nameProduct)
    const detailsDiv = document.querySelector('.details')
    detailsDiv.textContent = '';
    const divProducts = document.querySelector('.products');
    divProducts.textContent = '';
    const addDiv = document.querySelector('.advertisment');
    addDiv.textContent = `the item has been bought - ${nameProduct}`
}

showCategory()