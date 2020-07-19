let accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    let accordionItems = accordion.querySelectorAll('.accordion-item');
    accordionItems.forEach(accordionItem => {
        let accordionHeader = accordionItem.querySelector('.accordion-header');
        accordionHeader.addEventListener('click', function() {
            accordionItem.classList.toggle('show');
        });
    });
});