import wellnessImageOne from "../media/carousel-images/staffDogs/hazel-zeke-danielle.jpg";
import wellnessImageTwo from "../media/carousel-images/staff/Kim-With-Dog.jpg";
import vaccineImageOne from "../media/carousel-images/notStaffCats/cat3.jpg";
import vaccineImageTwo from "../media/carousel-images/notStaffExotic/bunny1.jpg";
import spayNeuterImageOne from "../media/carousel-images/notStaffDogs/doggie4.jpg";
import spayNeuterImageTwo from "../media/carousel-images/notStaffDogs/doggie3.jpg";

const services = {
  wellness: {
    firstSectionTitle: "Pet Exams at All Pets Vet",
    firstSectionInformation:
      "At All Pets Veterinary Hospital, we strive for customized service in all aspects of our care...",
    secondSectionTitle: "Preventing Issues with Pet Exams and Wellness Care",
    secondSectionInformationOne:
      "Sometimes a pet wellness exam may alert us to underlying medical conditions in your companion. The earlier we catch things like cancerous tumors and dental disease, the easier it is to treat your pet. You can potentially prevent larger medical issues when you bring your companion in for annual exams and we’ll run the proper diagnostics to accurately diagnose any illness.",
    secondSectionInformationTwo:
      "Pet wellness care is also the time to address preventative care for things like fleas, ticks and heartworms. Spaying and neutering may also prevent medical and behavioral conditions. During a wellness exam, we’ll advise you on the best time to have this surgery for your breed and type of pet. We’ll discuss a vaccination schedule for new puppies and kittens to protect them from dangerous diseases and update boosters for adult pets. If your pet has entered into their senior years, we recommend semi-annual wellness exams to give your companion the best care possible.",

    images: [wellnessImageOne, wellnessImageTwo],
  },

  vaccines: {
    firstSectionTitle: "Vaccination Services at All Pets Vet",
    firstSectionInformation:
      "Our comprehensive vaccination services at All Pets Veterinary Hospital are designed to protect your pets from common and serious infectious diseases. We understand the importance of personalized vaccine protocols that cater to your pet's lifestyle, age, and health status.",

    secondSectionTitle: "Customized Vaccination Plans for Optimal Health",
    secondSectionInformationOne:
      "We believe in a tailored approach to vaccination, recognizing that each pet has unique needs. During your visit, we'll evaluate your pet's specific risk factors such as their environment, travel habits, and exposure to other animals. This enables us to recommend a customized vaccination schedule that provides the best protection for your pet.",

    secondSectionInformationTwo:
      "Our vaccination services include essential vaccines for puppies and kittens, as well as ongoing booster shots for adult pets to maintain immunity. We also offer advice on non-core vaccines, which are given based on your pet's lifestyle and risk factors. In addition to vaccinations, we'll discuss other preventive measures to ensure your pet's overall well-being, including parasite prevention and nutrition.",

    images: [vaccineImageOne, vaccineImageTwo],
  },

  spayNeuter: {
    firstSectionTitle: "Spay and Neuter Services at All Pets Vet",
    firstSectionInformation:
      "At All Pets Veterinary Hospital, our spay and neuter services are designed to provide safe and compassionate care for your pets. These procedures are crucial not only for controlling the pet population but also for preventing various health issues and behavioral problems in pets.",

    secondSectionTitle: "The Benefits of Spaying and Neutering Your Pet",
    secondSectionInformationOne:
      "Spaying or neutering your pet can lead to a healthier, longer life by preventing serious health issues such as uterine infections, breast tumors, testicular cancer, and prostate problems. These procedures can also help reduce behaviors such as roaming, aggression, and marking territory.",

    secondSectionInformationTwo:
      "Our experienced veterinary team will guide you through the process, providing pre-surgical advice and post-operative care to ensure your pet recovers quickly and comfortably. We use the latest surgical techniques and pain management protocols to minimize discomfort and promote a swift recovery.",

    images: [spayNeuterImageOne, spayNeuterImageTwo],
  },
};

export { services };
