import { db } from "../config/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StoreContext from "../store/store-context";

export function usePost() {
  const { updateAllPost } = useContext(StoreContext);
  const navigate = useNavigate();
  const postCollection = collection(db, "post");

  const getPost = async () => {
    try {
      const querySnapshot = await getDocs(postCollection);
      const postResult = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      updateAllPost(postResult);
    } catch (e) {
      console.log(e);
    }
  };

  const addPost = async (dataObj) => {
    try {
      const docRef = await addDoc(postCollection, dataObj);
      console.log(docRef);
      navigate("/");
    } catch (e) {
      console.log(e.messgae);
    }
  };

  const deletePost = async (post_id) => {
    try {
      await deleteDoc(doc(db, "post", post_id));
    } catch (e) {
      console.log(e);
    }
  };

  return { getPost, addPost, deletePost };
}
