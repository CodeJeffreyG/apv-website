//staff animals
import BellesDozer from "../media/carousel-images/staffDogs/dozer-belles.jpg";
import LoutWithCat from "../media/carousel-images/staff/LouWCat.jpg";
import EmilysHamsterPhillip from "../media/carousel-images/staffExotic/phillipEmilysHamster.jpg";
import EmilysBunny from "../media/carousel-images/staffExotic/bunny-emily.jpg";
import TreenasRadnor from "../media/carousel-images/staffExotic/radnor-treenas-bd.jpg";
//not staff animals
import randomDog1 from "../media/carousel-images/notStaffDogs/doggie.jpg";
import randomDog2 from "../media/carousel-images/notStaffDogs/doggie2.jpg";
import randomDog4 from "../media/carousel-images/notStaffDogs/doggie4.jpg";
import randomDog5 from "../media/carousel-images/notStaffDogs/doggie5.jpg";
import randomDog8 from "../media/carousel-images/notStaffDogs/doggie8.jpg";
//not staff Cats
import randomCat1 from "../media/carousel-images/notStaffCats/cats1.jpg";
import randomCat2 from "../media/carousel-images/notStaffCats/cat4.jpg";
//not staff exotic
//not staff birds
import randomBird1 from "../media/carousel-images/notStaffExotic/bird1.jpg";
import randomReptile1 from "../media/carousel-images/notStaffExotic/reptile1.jpg";
import randomReptile2 from "../media/carousel-images/notStaffExotic/reptile2.jpg";
import randomReptile3 from "../media/carousel-images/notStaffExotic/reptile3.jpg";

const staffAnimals = () => {
  const staffAndAnimalPhotos = {
    dogs: [BellesDozer],
    cats: [],
    exotic: [EmilysBunny, EmilysHamsterPhillip, TreenasRadnor],
    employee: [LoutWithCat],
  };

  return staffAndAnimalPhotos;
};

const allNotStaffAnimals = () => {
  const allNotStaffAnimals = {
    dogs: [randomDog1, randomDog2, randomDog4, randomDog5, randomDog8],
    cats: [randomCat1, randomCat2],
    exotic: [randomBird1, randomReptile1, randomReptile2, randomReptile3],
  };

  return allNotStaffAnimals;
};

//flattens all arrays in object to single array
function flattenPhotos(photosByCategory) {
  return Object.values(photosByCategory).reduce(
    (acc, categoryPhotos) => [...acc, ...categoryPhotos],
    []
  );
}

function getRandomPhotos(photos, count = 3) {
  let selectedPhotos = [];
  let usedIndices = new Set();

  while (
    selectedPhotos.length < count &&
    selectedPhotos.length < photos.length
  ) {
    let randomIndex = Math.floor(Math.random() * photos.length);
    if (!usedIndices.has(randomIndex)) {
      selectedPhotos.push(photos[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  return selectedPhotos;
}

function getRandomStaffPhotos() {
  const staffPhotos = flattenPhotos(staffAnimals());
  return getRandomPhotos(staffPhotos);
}

function getRandomNonStaffPhotos() {
  const nonStaffPhotos = flattenPhotos(allNotStaffAnimals());
  return getRandomPhotos(nonStaffPhotos);
}

function combinePhotos(staffPhotos, nonStaffPhotos) {
  const combinedPhotos = [...staffPhotos, ...nonStaffPhotos];

  // Shuffle the combined array to mix staff and non-staff photos randomly
  for (let i = combinedPhotos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combinedPhotos[i], combinedPhotos[j]] = [
      combinedPhotos[j],
      combinedPhotos[i],
    ]; // Swap elements
  }

  return combinedPhotos;
}

const staffPhotos = getRandomStaffPhotos();
const nonStaffPhotos = getRandomNonStaffPhotos();
const combinedPhotos = combinePhotos(staffPhotos, nonStaffPhotos);

export { combinedPhotos };
