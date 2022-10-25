import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function useRecommendedList(uid) {
  const [recommendedList, setRecommendedList] = useState([]);
  useEffect(() => {
    if (!uid) return;
    return onSnapshot(
      collection(db, "customers", uid, "recommended"),
      (snapshot) => {
        setRecommendedList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );
  }, [db, uid]);
  return recommendedList;
}
