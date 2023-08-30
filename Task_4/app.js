const animalRadios = document.getElementsByName('animalType');
const images = document.getElementsByClassName('imageFilter');

for (const animalRadio of animalRadios) {
    addEventListener('change', filterAnimals)
};




function filterAnimals(e) {
    const selectedAnimal = e.value;
    for (const image of images) {
        if (selectedAnimal === 'all' || selectedAnimal === image.getAttribute('animal')) {
            image.classList.remove('hidden');
        } else {
            image.classList.add('hidden');
        }
    }
};
