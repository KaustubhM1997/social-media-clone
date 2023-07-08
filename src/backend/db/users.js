import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

const adarsh =
  "https://www.pexels.com/photo/a-young-student-in-a-classroom-5211478/";
const lewis =
  "https://cdn-4.motorsport.com/images/mgl/0mb95oa2/s200/lewis-hamilton-mercedes-1.webp";

const cristiano =
  "https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png";

const virat =
  "https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg";

const djoko =
  "https://pbs.twimg.com/profile_images/1219965365226065920/EBF8Rd9v_400x400.jpg";

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
    avatar: adarsh,
    isFollowing: false,
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
    avatar: lewis,
    isFollowing: true,
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
    avatar: cristiano,
    isFollowing: true,
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
    avatar: virat,
    isFollowing: false,
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
    avatar: djoko,
    isFollowing: true,
  },
];
