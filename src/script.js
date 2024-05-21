export const bgHomeImages = [
  {
    title: "Let us transform your lawn while you sit back and relax.",
    button: "Find Out More",
    image: require("./assets/img/image2.jpg"),
  },
  {
    title: "Join Our Team and embark on a journey of growth and success.",
    button: "Apply Now",
    image: require("./assets/img/image3.jpg"),
  },
  {
    title:
      "The European Chafer Beetle is in your area. Contact us today for advice on avoiding damage to your lawn.",
    button: "Get a quote",
    image: require("./assets/img/image6.jpg"),
  },
];

export const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, description } = testiMonialDetail;
  return (
    <div className="item">
      <div className="shadow-effect">
        <div className="stars">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </div>
        <q className="testimonial-description">{description}</q>
      </div>
      <div className="testimonial-name-tag">
        <h5 className="testimonial-name"> {name}</h5>
      </div>
    </div>
  );
};

export const testiMonials = [
  {
    description:
      "BUR-HAN Garden and Lawn Care was recommended to me and I always recommend them to my friends.",
    name: "Marlene C, North Vancouver",
  },
  {
    description:
      "I started using BUR-HAN Garden and Lawn Care on a friend's referral and have not looked back since. Great service and great delivery!",
    name: "Gordon, North Vancouver",
  },
  {
    description:
      "I used another service for my lawn but I couldn't be more happy for switching to BUR-HAN! Highly recommended.",
    name: "D. Wong, Burnaby",
  },
  {
    description:
      "I was recommended by a friend to use BUR-HAN Garden and Lawn Care for my lawn services; and was pleasantly surprised by their professionalism and excellent rates. Would highly recommend to other friends.",
    name: "Kelly M, North Vancouver",
  },
];

export const options = {
  loop: true,
  center: true,
  items: 3,
  margin: 0,
  autoplay: true,
  dots: true,
  autoplayTimeout: 8500,
  smartSpeed: 450,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};

export const selectCity = [
  { value: "Vancouver", label: "Vancouver" },
  { value: "North Vancouver", label: "North Vancouver" },
  { value: "West Vancouver", label: "West Vancouver" },
  { value: "Burnaby", label: "Burnaby" },
  { value: "Richmond", label: "Richmond" },
  { value: "New Westminister", label: "New Westminister" },
  { value: "Coquitlam", label: "Coquitlam" },
  { value: "Port Coquitlam", label: "Port Coquitlam" },
  { value: "Port Moody", label: "Port Moody" },
  { value: "Maple Ridge", label: "Maple Ridge" },
  { value: "Delta", label: "Delta" },
  { value: "Surrey", label: "Surrey" },
  { value: "White Rock", label: "White Rock" },
];

export const servicesOption = [
  {
    value: "Landscape Maintenance",
    label: "Landscape Maintenance",
  },
  {
    value: "Residential Lawn Care",
    label: "Residential Lawn Care",
  },
  {
    value: "Hardscape Installs/Maintenance",
    label: "Hardscape Installs/Maintenance",
  },
  {
    value: " Softscape Installs/Maintenance",
    label: " Softscape Installs/Maintenance",
  },
  {
    value: "Designs and Modelling",
    label: "Designs and Modelling",
  },
  {
    value: "Snow Management",
    label: "Snow Management",
  },
];

export const hearaboutusOption = [
  { value: "Internet Search", label: "Internet Search" },
  { value: "Google", label: "Google" },
  { value: "Homestars", label: "Homestars" },
  { value: "Yelp", label: "Yelp" },
  { value: "Linkedin", label: "Linkedin" },
  { value: "Instagram", label: "Instagram" },
  { value: "Facebook", label: "Facebook" },
  { value: "Facebook Promo", label: "Facebook Promo" },
  { value: "Website", label: "Website" },
  { value: "Neighbour", label: "Neighbour" },
  { value: "Referral", label: "Referral" },
  { value: "Business Card", label: "Business Card" },
  { value: "Truck Sign", label: "Truck Sign" },
  { value: "Other", label: "Other" },
];

export const styles = {
  menuList: (base) => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "5px",
    },
    "::-webkit-scrollbar-track": {
      background: "yellow",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
};

export const photosDesign = [
  {
    src: require("./assets/img/projects/design/design1.jpeg"),
    width: 4,
    height: 3,  
    title: "Project 1",
    alt: "project 1 image",
  },
  {
    src: require("./assets/img/projects/design/design3.jpg"),
    width: 4,
    height: 3,
    title: "Project 2",
    alt: "project 2 image",

  },
  {
    src: require("./assets/img/projects/design/design8.jpg"),
    width: 4,
    height: 3,
    title: "Project 3",
    alt: "project 3 image"
  },
  {
    src: require("./assets/img/projects/design/design4.jpeg"),
    width: 4,
    height: 3,
    title: "Project 4",
    alt: "project 4 image",
  },
  {
    src: require("./assets/img/projects/design/design11.jpg"),
    width: 4,
    height: 3,
    title: "Project 5",
    alt: "project 5 image",
  },
  {
    src: require("./assets/img/projects/design/design5.jpeg"),
    width: 4,
    height: 3,
    title: "Project 6",
    alt: "project 6 image",

  },
  {
    src: require("./assets/img/projects/design/design7.jpg"),
    width: 4,
    height: 3,
    title: "Project 7",
    alt: "project 7 image",

  },
  {
    src: require("./assets/img/projects/design/design9.jpg"),
    width: 4,
    height: 3,
    title: "Project 8",
    alt: "project 8 image",

  },
  {
    src: require("./assets/img/projects/design/design6.jpeg"),
    width: 4,
    height: 3,
    title: "Project 9",
    alt: "project 9 image",

  },
  {
    src: require("./assets/img/projects/design/design10.jpg"),
    width: 4,
    height: 3,
    title: "Project 10",
    alt: "project 10 image",

  },
  {
    src: require("./assets/img/projects/design/design12.jpg"),
    width: 4,
    height: 3,
    title: "Project 11",
    alt: "project 11 image",

  },
  {
    src: require("./assets/img/projects/design/design2.jpeg"),
    width: 4,
    height: 3,
    title: "Project 12",
    alt: "project 12 image",

  },
];

export const photosPavingStone = [
  {
    src: require("./assets/img/projects/pavingStone/pavingStone1.jpg"),
    width: 4,
    height: 3,
    title: "Project 1",
    alt: "project 1 image"
  },
  {
    src: require("./assets/img/projects/pavingStone/pavingStone2.jpg"),
    width: 4,
    height: 3,
    title: "Project 2",
    alt: "project 2 image",

  },
  {
    src: require("./assets/img/projects/pavingStone/pavingStone3.jpg"),
    width: 4,
    height: 3,
    title: "Project 3",
    alt: "project 3 image",

  },
  {
    src: require("./assets/img/projects/pavingStone/pavingStone4.jpg"),
    width: 4,
    height: 3,
    title: "Project 4",
    alt: "project 4 image",

  },
  {
    src: require("./assets/img/projects/pavingStone/pavingStone5.jpg"),
    width: 4,
    height: 3,
    title: "Project 5",
    alt: "project 5 image",

  },
  {
    src: require("./assets/img/projects/pavingStone/pavingStone6.jpg"),
    width: 4,
    height: 3,
    title: "Project 6",
    alt: "project 6 image",

  },
  {
    src: require("./assets/img/projects/pavingStone/pavingStone7.jpeg"),
    width: 4,
    height: 3,
    title: "Project 7",
    alt: "project 7 image",

  },
  {
    src: require("./assets/img/projects/pavingStone/pavingStone8.jpeg"),
    width: 4,
    height: 3,
    title: "Project 8",
    alt: "project 8 image",

  },
  {
    src: require("./assets/img/projects/pavingStone/pavingStone9.jpeg"),
    width: 4,
    height: 3,
    title: "Project 9",
    alt: "project 9 image",

  },
  {
    src: require("./assets/img/projects/pavingStone/pavingStone10.jpeg"),
    width: 4,
    height: 3,
    title: "Project 10",
    alt: "project 10 image",

  },
  {
    src: require("./assets/img/projects/pavingStone/pavingStone11.jpg"),
    width: 4,
    height: 3,
    title: "Project 11",
    alt: "project 11 image",

  },
  {
    src: require("./assets/img/projects/pavingStone/pavingStone12.jpg"),
    width: 4,
    height: 3,
    title: "Project 12",
    alt: "project 12 image",

  },
];

export const photosRetainingWall = [
  {
    src: require("./assets/img/projects/retainingWall/retainingWall1.jpeg"),
    width: 4,
    height: 3,
    title: "Project 1",
    alt: "project 1 image"
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingwall11.jpg"),
    width: 4,
    height: 3,
    title: "Project 2",
    alt: "project 2 image"

  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall3.jpeg"),
    width: 4,
    height: 3,
    title: "Project 3",
    alt: "project 3 image"

  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall5.jpeg"),
    width: 4,
    height: 3,
    title: "Project 4",
    alt: "project 4 image"

  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall2.jpeg"),
    width: 4,
    height: 3,
    title: "Project 5",
    alt: "project 5 image"

  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall6.jpg"),
    width: 4,
    height: 3,
    title: "Project 6",
    alt: "project 6 image"

  },
  {
    src: require("./assets/img/projects/retainingWall/retainingwall7.jpeg"),
    width: 4,
    height: 3,
    title: "Project 7",
    alt: "project 7 image"

  },
  {
    src: require("./assets/img/projects/retainingWall/retainingwall8.jpg"),
    width: 4,
    height: 3,
    title: "Project 8",
    alt: "project 8 image"

  },
  {
    src: require("./assets/img/projects/retainingWall/retainingwall9.jpeg"),
    width: 4,
    height: 3,
    title: "Project 9",
    alt: "project 9 image"

  },
  {
    src: require("./assets/img/projects/retainingWall/retainingwall10.jpeg"),
    width: 4,
    height: 3,
    title: "Project 10",
    alt: "project 10 image"

  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall4.jpeg"),
    width: 4,
    height: 3,
    title: "Project 11",
    alt: "project 11 image"

  },
  {
    src: require("./assets/img/projects/retainingWall/retainingwall12.jpg"),
    width: 4,
    height: 3,
    title: "Project 12",
    alt: "project 12 image"

  },
];

export const photosLawnCare = [
  {
    src: require("./assets/img/projects/retainingWall/retainingWall1.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall5.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall3.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall4.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall2.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall6.jpg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
];
export const photosPlantings = [
  {
    src: require("./assets/img/projects/retainingWall/retainingWall1.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall5.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall3.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall4.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall2.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall6.jpg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
];

export const photosOnetimeCleanups = [
  {
    src: require("./assets/img/projects/retainingWall/retainingWall1.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall5.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall3.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall4.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall2.jpeg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
  {
    src: require("./assets/img/projects/retainingWall/retainingWall6.jpg"),
    width: 3,
    height: 4,
    title: "Project 12",
  },
];
