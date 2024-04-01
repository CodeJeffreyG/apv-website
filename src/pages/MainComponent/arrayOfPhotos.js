//staff
import KimWithChicken from "../../assests/carousel-images/staff/Kim-With-Chicken.jpg";
import DanielleWithCham from "../../assests/carousel-images/staff/Danielle-With-Chameleon.jpg";
import DanielleWithSnake from "../../assests/carousel-images/staff/Danielle-With-Snake.jpg";
//staff animals
import BellesDozer from "../../assests/carousel-images/staffDogs/dozer-belles.jpg";
import LoutWithCat from "../../assests/carousel-images/staff/LouWCat.jpg";
import EmilysHamsterPhillip from "../../assests/carousel-images/staffExotic/phillipEmilysHamster.jpg";
import EmilysBunny from "../../assests/carousel-images/staffExotic/bunny-emily.jpg";
import TreenasRadnor from "../../assests/carousel-images/staffExotic/radnor-treenas-bd.jpg";
import LousParm from "../../assests/carousel-images/staffExotic/LousParm.jpg";
//not staff animals
import randomDog1 from "../../assests/carousel-images/notStaffDogs/doggie.jpg";
import randomDog2 from "../../assests/carousel-images/notStaffDogs/doggie2.jpg";
import randomDog4 from "../../assests/carousel-images/notStaffDogs/doggie4.jpg";
import randomDog5 from "../../assests/carousel-images/notStaffDogs/doggie5.jpg";
import randomDog8 from "../../assests/carousel-images/notStaffDogs/doggie8.jpg";
import randomDog9 from "../../assests/carousel-images/notStaffDogs/doggie9.jpg";
import randomDog10 from "../../assests/carousel-images/notStaffDogs/doggie10.jpg";
import randomDog11 from "../../assests/carousel-images/notStaffDogs/doggie11.jpg";
import randomDog12 from "../../assests/carousel-images/notStaffDogs/doggie12.jpg";
//not staff Cats
import randomCat1 from "../../assests/carousel-images/notStaffCats/cats1.jpg";
import randomCat2 from "../../assests/carousel-images/notStaffCats/cat4.jpg";
import randomCat5 from "../../assests/carousel-images/notStaffCats/cat5.jpg";
import randomCat6 from "../../assests/carousel-images/notStaffCats/cat6.jpg";
import randomCat7 from "../../assests/carousel-images/notStaffCats/cat7.jpg";
import randomCat8 from "../../assests/carousel-images/notStaffCats/cat8.jpg";
import randomCat9 from "../../assests/carousel-images/notStaffCats/cat9.jpg";
//not staff exotic
//not staff birds
import randomBird1 from "../../assests/carousel-images/notStaffExotic/bird1.jpg";
import randomBird3 from "../../assests/carousel-images/notStaffExotic/bird3.jpeg";
import randomBird4 from "../../assests/carousel-images/notStaffExotic/bird4.jpg";
//not staff reptiles
import randomReptile1 from "../../assests/carousel-images/notStaffExotic/reptile1.jpg";
import randomReptile2 from "../../assests/carousel-images/notStaffExotic/reptile2.jpg";
import randomReptile3 from "../../assests/carousel-images/notStaffExotic/reptile3.jpg";
import randomReptile4 from "../../assests/carousel-images/notStaffExotic/reptile4.jpg";

//not staff rabbits
import randomRabbit2 from "../../assests/carousel-images/notStaffExotic/bunny2.jpg";
import randomRabbit3 from "../../assests/carousel-images/notStaffExotic/bunny3.jpg";

const staffAnimals = () => {
  const staffAndAnimalPhotos = {
    dogs: [BellesDozer],
    cats: [],
    exotic: [EmilysBunny, EmilysHamsterPhillip, TreenasRadnor, LousParm],
    employee: [
      LoutWithCat,
      KimWithChicken,
      DanielleWithCham,
      DanielleWithSnake,
    ],
  };

  return staffAndAnimalPhotos;
};

const allNotStaffAnimals = () => {
  const allNotStaffAnimals = {
    dogs: [
      randomDog1,
      randomDog2,
      randomDog4,
      randomDog5,
      randomDog8,
      randomDog9,
      randomDog10,
      randomDog11,
      randomDog12,
    ],
    cats: [
      randomCat1,
      randomCat2,
      randomCat5,
      randomCat6,
      randomCat7,
      randomCat8,
      randomCat9,
    ],
    exotic: [
      randomBird1,
      randomBird3,
      randomBird4,
      randomReptile1,
      randomReptile2,
      randomReptile3,
      randomReptile4,
      randomRabbit2,
      randomRabbit3,
    ],
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
// chooses random photos, takes in an array of photos as argument
function getRandomPhotos(photos, count = 12) {
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
//returns array of staff photos
function getRandomStaffPhotos() {
  const staffPhotos = flattenPhotos(staffAnimals());
  return getRandomPhotos(staffPhotos);
}
//returns array of not staff photos
function getRandomNonStaffPhotos() {
  const nonStaffPhotos = flattenPhotos(allNotStaffAnimals());
  return getRandomPhotos(nonStaffPhotos);
}
//spreads staff photos and shuffles them
function combinePhotos(staffPhotos, nonStaffPhotos) {
  const combinedPhotos = [...staffPhotos, ...nonStaffPhotos];

  // Shuffle the combined array to mix staff and non-staff photos randomly
  for (let i = combinedPhotos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combinedPhotos[i], combinedPhotos[j]] = [
      combinedPhotos[j],
      combinedPhotos[i],
    ];
  }

  return combinedPhotos;
}

//instantiates arrays of random staff and non staff photos
const staffPhotos = getRandomStaffPhotos();
const nonStaffPhotos = getRandomNonStaffPhotos();
//passes them to combine photos to create array of shuffled random photos of staff and non staff
const combinedPhotos = combinePhotos(staffPhotos, nonStaffPhotos);

export { combinedPhotos };
