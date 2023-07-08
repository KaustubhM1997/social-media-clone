import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

const adarsh =
  "https://img.freepik.com/free-photo/red-haired-lady-eyeglasses-holds-books-shows-ok-sign_197531-23789.jpg?w=740&t=st=1688843699~exp=1688844299~hmac=15305f1447dfa414cd23106dcdb47ff248b1ae6502928aac1740b9e87a23bf9a";

const shubham =
  "https://www.parentmap.com/images/article/9390/Avvo-drug-test-teen-istock.jpg";

const virat =
  "https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg";

const chandler =
  "https://images.entertainment.ie/uploads/2021/05/28131615/Chandler-Bing-Friends-Matthew-Perry.jpg?w=640&h=384&q=high";

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "An ideal student possesses a remarkable combination of qualities that enable them to excel both academically and personally. They serve as a source of inspiration for their peers and are admired by teachers and parents alike.",
    website: "https://kaustubh-m.netlify.app/",
    avatar: adarsh,
    isFollowing: false,
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Nestled in a picturesque valley, a verdant landscape stretches as far as the eye can see. Rolling hills, adorned with a patchwork quilt of emerald-green fields, gently sway in the soft breeze.",
    website: "https://www.linkedin.com/in/kaustubh-manglurkar-871ba0167/",
    avatar: shubham,
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
    bio: "An ideal student possesses a remarkable combination of qualities that enable them to excel both academically and personally. They serve as a source of inspiration for their peers and are admired by teachers and parents alike.",
    website: "https://twitter.com/KaustubhManglu1",
    avatar: virat,
    isFollowing: false,
  },
  {
    _id: uuid(),
    firstName: "Chandler",
    lastName: "Bing",
    username: "chandlerbing",
    password: "bingc",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "An ideal student possesses a remarkable combination of qualities that enable them to excel both academically and personally. They serve as a source of inspiration for their peers and are admired by teachers and parents alike.",
    website: "https://github.com/KaustubhM1997",
    avatar: chandler,
    isFollowing: true,
  },
];
