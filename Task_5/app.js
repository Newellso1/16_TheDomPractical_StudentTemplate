const animalRadios = document.getElementsByName('animalType');
const images = document.getElementsByClassName('imageFilter');
const search = document.getElementById('search');

for (const animalRadio of animalRadios) {
    animalRadio.addEventListener('change', filterAnimals)
};




function filterAnimals(e) {
    const selectedAnimal = e.target.value;
    for (const image of images) {
        if (selectedAnimal === 'all' || selectedAnimal === image.getAttribute('animal')) {
            image.classList.remove('hidden');
        } else {
            image.classList.add('hidden');
        }
    }
};

search.addEventListener('keyup', function () {
    const searchValue = search.value.toLowerCase();
    for (const image of images) {
        const altText = image.getAttribute('alt').toLowerCase();
        if(altText.includes(searchValue)){
            image.classList.remove('hidden');
        } else {
            image.classList.add('hidden')
        }
    }
})

search.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        e.preventDefault();
    }
})

