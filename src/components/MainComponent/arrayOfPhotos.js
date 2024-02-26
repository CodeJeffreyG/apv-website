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
    dogs: [randomDog1, randomDog2],
    cats: [],
    exotic: [],
  };

  return allNotStaffAnimals;
};

const allValidCarouselPhotos = [];

export { staffAnimals, allNotStaffAnimals };
