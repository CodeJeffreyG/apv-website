import wellnessImageOne from "../media/carousel-images/staffDogs/hazel-zeke-danielle.jpg";
import wellnessImageTwo from "../media/carousel-images/staff/Kim-With-Dog.jpg";
import exoticImageOne from "../media/carousel-images/notStaffExotic/bird2.jpg";
import exoticImageTwo from "../media/carousel-images/notStaffExotic/snake1.jpg";
import vaccineImageOne from "../media/carousel-images/notStaffCats/cat3.jpg";
import vaccineImageTwo from "../media/carousel-images/notStaffExotic/bunny1.jpg";
import surgeryImageOne from "../media/carousel-images/notStaffDogs/doggie4.jpg";
import surgeryImageTwo from "../media/carousel-images/notStaffDogs/doggie3.jpg";
import dentalImageOne from "../media/carousel-images/notStaffDogs/doggie6.jpg";
import dentalImageTwo from "../media/carousel-images/notStaffDogs/doggie5.jpg";

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

  exotic: {
    firstSectionTitle: "Exotic Pet Care at All Pets Vet",
    firstSectionInformation:
      "At All Pets Veterinary Hospital, we extend our comprehensive care services to exotic pets. Our dedicated staff is experienced in the care and treatment of birds, reptiles, small mammals, and other exotic pets, ensuring they receive the best possible care.",
    secondSectionTitle: "Specialized Care for Unique Pets",
    secondSectionInformationOne:
      "Exotic pets have unique needs and require specialized care and attention. We provide routine wellness exams, nutritional counseling, and behavior advice tailored specifically to your exotic pet's needs.",
    secondSectionInformationTwo:
      "We are equipped to handle a variety of medical services for your exotic pets, from routine check-ups and preventive care to more complex medical and surgical procedures. Our clinic is prepared with the special equipment and facilities needed to cater to the care of your exotic pet.",
    images: [exoticImageOne, exoticImageTwo],
  },

  preventative: {
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

  surgery: {
    firstSectionTitle: "Comprehensive Surgical Services at All Pets Vet",
    firstSectionInformation:
      "At All Pets Veterinary Hospital, we offer a wide range of surgical services beyond spaying and neutering, aimed at providing your pets with the highest level of care. Our surgical procedures address a variety of health issues, ensuring your pet's well-being and longevity.",

    secondSectionTitle: "Advantages of Professional Veterinary Surgery",
    secondSectionInformationOne:
      "Undergoing surgery at our hospital can significantly improve your pet's quality of life, addressing conditions such as internal disorders, skin masses, and emergency injuries. Our surgeries are performed with the utmost care, reducing the risk of complications and enhancing recovery.",

    secondSectionInformationTwo:
      "Our skilled veterinary surgeons utilize state-of-the-art technology and techniques to ensure the safety and comfort of your pet during and after surgery. We provide comprehensive pre-surgical evaluations and tailored post-operative care, focusing on pain management and quick recovery.",

    images: [surgeryImageOne, surgeryImageTwo],
  },

  dentalCare: {
    firstSectionTitle: "Dental Care Services at All Pets Vet",
    firstSectionInformation:
      "At All Pets Veterinary Hospital, we provide comprehensive dental care services to ensure your pet's oral health is at its best. Regular dental check-ups and cleanings are essential for preventing dental diseases, which can lead to serious health issues if left untreated.",

    secondSectionTitle: "The Importance of Regular Dental Check-Ups",
    secondSectionInformationOne:
      "Regular dental check-ups are crucial for early detection and prevention of periodontal disease, which is common in pets. During a dental exam, our skilled veterinarians will thoroughly inspect your pet's mouth for signs of dental disease, such as tartar buildup, gum inflammation, and loose teeth.",

    secondSectionInformationTwo:
      "Our dental care services include professional teeth cleaning, dental X-rays, tooth extractions, and more, all performed with your pet's comfort and safety in mind. We also provide guidance on home dental care routines that can help maintain your pet's oral hygiene between visits.",

    images: [dentalImageOne, dentalImageTwo],
  },

  laserTherapy: {
    firstSectionTitle: "Laser Therapy Services at All Pets Vet",
    firstSectionInformation:
      "Laser therapy at All Pets Veterinary Hospital provides a non-invasive, pain-free, surgery-free, and drug-free treatment, which is used to treat a variety of conditions and can be performed in conjunction with existing treatment protocols. Relief and/or improvement is often noticed within hours depending on the condition and your pet’s response.",
    secondSectionTitle: "Benefits and Applications of Laser Therapy",
    secondSectionInformationOne:
      "The benefits of laser therapy are relatively immediate. Laser therapy can help with post-surgical pain and many acute conditions. Chronic conditions can also be treated with laser therapy, especially those involving inflammation.",
    secondSectionInformationTwo:
      "Applications of laser therapy include alleviating chronic pain, arthritis, inflammation, promoting wound healing, and speeding up recovery from surgery or traumatic injuries. Our team will work with you to tailor a specific laser therapy plan for your pet's health needs.",
    images: ["laserTherapyImageOne", "laserTherapyImageTwo"],
  },

  microchipping: {
    firstSectionTitle: "Microchipping Services at All Pets Vet",
    firstSectionInformation:
      "Ensure your pet's safety with our microchipping service at All Pets Veterinary Hospital. A simple, quick, and nearly painless procedure, microchipping is one of the most reliable ways to reunite with your pet should they ever get lost.",
    secondSectionTitle: "The Importance of Microchipping Your Pet",
    secondSectionInformationOne:
      "Microchipping is a permanent form of pet identification that cannot be lost, altered, or intentionally removed - a safe way to significantly increase the chance of a lost pet's return.",
    secondSectionInformationTwo:
      "Our staff will register the microchip and provide you with all the information you need to keep your pet's identification up to date. Remember, a microchip is only as good as the information linked to it, so keeping your contact details current is crucial.",
    images: ["microchipImageOne", "microchipImageTwo"],
  },

  hospice: {
    firstSectionTitle: "Compassionate Euthanasia Services at All Pets Vet",
    firstSectionInformation:
      "At All Pets Veterinary Hospital, we offer compassionate euthanasia services, understanding the difficulty of saying goodbye to a beloved pet. Our approach is gentle, respectful, and aimed at providing peace and dignity in your pet's final moments.",
    secondSectionTitle: "Supporting You Through the Process",
    secondSectionInformationOne:
      "We provide a serene, private space for you and your family to spend final moments with your pet, ensuring a peaceful and painless transition with the utmost respect and care.",
    secondSectionInformationTwo:
      "Our team is here to support you before, during, and after the procedure, offering guidance on grief support and memorial options to honor your pet's memory.",
    images: ["euthanasiaImageOne", "euthanasiaImageTwo"],
  },
};

export { services };
