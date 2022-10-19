import { atom } from "recoil";
import { DocumentData } from "firebase/firestore";

export const movieModalState = atom({
  key: "movieModalState",
  default: false,
});

export const movieState = atom({
  key: "movieState",
  default: null,
});

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const postIdState = atom({
  key: "postIdState",
  default: "",
});
