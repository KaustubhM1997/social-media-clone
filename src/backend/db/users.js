import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

//PUT ALL THE IMAGES HERE AS CONST == AND THEN JUST USE THE NAME BELOW IN AVATARS

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "say my name!",
    website: "https://kaustubh-m.netlify.app/",
    avatar: "",
  },
  {
    _id: uuid(),
    firstName: "Lewis",
    lastName: "Hamilton",
    username: "lewishamilton",
    password: "lewisHamiltion",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "8 time world champion",
    website: "https://www.linkedin.com/in/kaustubh-manglurkar-871ba0167/",
    avatar: "",
  },
  {
    _id: uuid(),
    firstName: "Cristiano",
    lastName: "Ronaldo",
    username: "cristiano7",
    password: "cristianoRonaldo",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "The best football player",
    website: "https://dev.to/kaustubhmanglu1",
    avatar: "",
  },
  {
    _id: uuid(),
    firstName: "Virat",
    lastName: "Kohli",
    username: "virat18",
    password: "ViratKohli",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "The most popular crickter",
    website: "https://twitter.com/KaustubhManglu1",
    avatar: "",
  },
  {
    _id: uuid(),
    firstName: "Noval",
    lastName: "Djokovic",
    username: "Djoker",
    password: "NovakDjoko23",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "The best every tennis player",
    website: "https://github.com/KaustubhM1997",
    avatar: "",
  },
];
