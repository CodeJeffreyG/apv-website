import Dozer from "../media/carousel-images/staffDogs/dozer-belles.jpg"

const staffAnimals = () => {
  const staffAndAnimalPhotos = {
    dogs: [Dozer],
    cats: [],
    exotic: [],
    employee: [],
  };

  return staffAndAnimalPhotos;
};

const allNotStaffAnimals = () => {
    const allNotStaffAnimals = {
      dogs: [],
      cats: [],
      exotic: [],
      employee: [],
    };
  
    return allNotStaffAnimals;
  };

export { staffAnimals, allNotStaffAnimals };
