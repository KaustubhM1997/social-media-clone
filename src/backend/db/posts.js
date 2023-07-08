import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
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

const shubham =
  "https://www.parentmap.com/images/article/9390/Avvo-drug-test-teen-istock.jpg";

export const posts = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    avatar: adarsh,
    isFollowing: true,
    username: "adarshbalika",
    content:
      "An ideal student possesses a remarkable combination of qualities that enable them to excel both academically and personally. They serve as a source of inspiration for their peers and are admired by teachers and parents alike.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    avatar: shubham,
    isFollowing: false,
    username: "shubhamsoni",
    content:
      "Nestled in a picturesque valley, a verdant landscape stretches as far as the eye can see. Rolling hills, adorned with a patchwork quilt of emerald-green fields, gently sway in the soft breeze. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Lewis",
    lastName: "Hamilton",
    username: "lewishamilton",
    avatar: lewis,
    isFollowing: true,
    content:
      "An ideal student possesses a remarkable combination of qualities that enable them to excel both academically and personally. They serve as a source of inspiration for their peers and are admired by teachers and parents alike.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "Cristiano",
    lastName: "Ronaldo",
    username: "cristiano7",
    avatar: cristiano,
    isFollowing: true,
    content:
      "An ideal student possesses a remarkable combination of qualities that enable them to excel both academically and personally. They serve as a source of inspiration for their peers and are admired by teachers and parents alike.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "Virat",
    lastName: "Kohli",
    username: "virat18",
    avatar: virat,
    isFollowing: false,
    content:
      "An ideal student possesses a remarkable combination of qualities that enable them to excel both academically and personally. They serve as a source of inspiration for their peers and are admired by teachers and parents alike.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "Novak",
    lastName: "Djokovic",
    username: "Djoker",
    avatar: djoko,
    isFollowing: true,
    content:
      "An ideal student possesses a remarkable combination of qualities that enable them to excel both academically and personally. They serve as a source of inspiration for their peers and are admired by teachers and parents alike.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
