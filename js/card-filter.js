const filterOnClass = 'filter-on';

const beastItems = Array.from(document.getElementsByClassName('card type-beast'));
const gearItems = Array.from(document.getElementsByClassName('card type-gear'));
const mythItems = Array.from(document.getElementsByClassName('card type-myth'));

const buttonBeast = document.getElementById('filter-beast');
const buttonGear = document.getElementById('filter-gear');
const buttonMyth = document.getElementById('filter-myth');
const buttonClear = document.getElementById('filter-all');

buttonBeast.addEventListener('click', () => {
    hideAll();
    clearButtons();
    beastItems.forEach(item => {
        item.style.display = 'block';
    });
    buttonBeast.classList.add(filterOnClass);
});

buttonGear.addEventListener('click', () => {
    hideAll();
    clearButtons();
    gearItems.forEach(item => {
        item.style.display = 'block';
    });
    buttonGear.classList.add(filterOnClass);
});

buttonMyth.addEventListener('click', () => {
    hideAll();
    clearButtons();
    mythItems.forEach(item => {
        item.style.display = 'block';
    });
    buttonMyth.classList.add(filterOnClass);
});

buttonClear.addEventListener('click', () => {
    clearButtons();
    buttonClear.classList.add(filterOnClass);

    showAll();
});

function showAll() {
    beastItems.forEach(item => {
        item.style.display = 'block';
    });
    gearItems.forEach(item => {
        item.style.display = 'block';
    });
    mythItems.forEach(item => {
        item.style.display = 'block';
    });

}

function hideAll() {
    beastItems.forEach(item => {
        item.style.display = 'none';
    });
    gearItems.forEach(item => {
        item.style.display = 'none';
    });
    mythItems.forEach(item => {
        item.style.display = 'none';
    });
}

function clearButtons() {
    buttonClear.classList.remove(filterOnClass);
    buttonBeast.classList.remove(filterOnClass);
    buttonGear.classList.remove(filterOnClass);
    buttonMyth.classList.remove(filterOnClass);
}
