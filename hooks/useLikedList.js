import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function useLikedList(uid) {
  const [likedList, setLikedList] = useState([]);
  useEffect(() => {
    if (!uid) return;
    return onSnapshot(collection(db, "customers", uid, "liked"), (snapshot) => {
      setLikedList(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, [db, uid]);
  return likedList;
}
