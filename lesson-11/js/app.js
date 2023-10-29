document.querySelector('.btnSave').addEventListener('click', checkInfo);
const form = document.querySelector('.mainForm');

function checkInfo() {
    const nameInput = form.userName.value;
    const famInput = form.userFamilia.value;
    const date = form.date.value;
    const genderValue = form.gender.value;
    const city = form.city.value;
    const address = form.address.value;
    const checks = [];
    for (let i = 0; i < form.lang.length; i++) {
        if (form.lang[i].checked) {
            checks.push(form.lang[i].value)
        }
    }
    const userName = checkNames(nameInput);
    const userFamilia = checkNames(famInput);
    
    if (userName && 
        userFamilia && 
        date && 
        genderValue && 
        city && 
        address && 
        checks.length > 0) {
        showInfo()
    }
}

function showInfo() {
    const body = document.querySelector('.body')
    form.remove();
    const div = document.createElement('div');
    div.textContent = 'URA!';
    body.appendChild(div)
}


function checkNames(name) {
    if (isNaN(name) && name !== null) {
        return true;
    } else {
        return false;
    }
}
