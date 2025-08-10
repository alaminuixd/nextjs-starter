import { StaticImageData } from "next/image";
import { v4 as uuidv4 } from "uuid";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: uuidv4(),
    name: "Great Wall of China",
    src: photo1,
    photographer: "Photo by Max van den Oetelaar on Unsplash",
    location: "China",
  },
  {
    id: uuidv4(),
    name: "Petra",
    src: photo2,
    photographer: "Photo by Reiseuhu on Unsplash",
    location: "Jordan",
  },
  {
    id: uuidv4(),
    name: "Christ the Redeemer",
    src: photo3,
    photographer: "Photo by Andrea Leopardi on Unsplash",
    location: "Brazil",
  },
  {
    id: uuidv4(),
    name: "Machu Picchu",
    src: photo4,
    photographer: "Photo by Jared Schwitzke on Unsplash",
    location: "Peru",
  },
  {
    id: uuidv4(),
    name: "Chichen Itza",
    src: photo5,
    photographer: "Photo by E Mens on Unsplash",
    location: "Mexico",
  },
  {
    id: uuidv4(),
    name: "Roman Colosseum",
    src: photo6,
    photographer: "Photo by Andrea Cipriano on Unsplash",
    location: "Italy",
  },
  {
    id: uuidv4(),
    name: "Taj Mahal",
    src: photo7,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "India",
  },
];

export default wondersImages;
