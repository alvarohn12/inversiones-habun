let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{

        listElement.classList.toggle('arrow');

        let height=0;
        let menu=listElement.nextElementSibling;
        if(menu.clientHeight =="0"){
        height=menu.scrollHeight;
        }
        menu.style.height=`${height}px`;
    })
})
document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter');
    const cards = document.querySelectorAll('.card');

    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            const selectedFilters = Array.from(filters)
                .filter(f => f.checked)
                .map(f => f.value);

            cards.forEach(card => {
                const cardClasses = Array.from(card.classList);
                if (selectedFilters.length === 0 || selectedFilters.some(f => cardClasses.includes(f))) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById("navToggle");
    const navClose = document.getElementById("navClose");
    const nav = document.getElementById("nav");
    const listItems = document.querySelectorAll(".list__item--click");

    navToggle.addEventListener("click", function() {
        nav.classList.toggle("open");
    });

    navClose.addEventListener("click", function() {
        nav.classList.remove("open");
    });

    listItems.forEach(item => {
        item.addEventListener("click", function() {
            this.classList.toggle("list__item--click");
        });
    });
});
