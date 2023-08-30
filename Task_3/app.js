const animalRadios = document.getElementsByName('animalType');
const images = document.getElementsByClassName('imageFilter');


for(const animalRadio of animalRadios) {
    addEventListener('change', filterAnimals)
};



function filterAnimals(e) {
    console.log(e.target.value);
}

