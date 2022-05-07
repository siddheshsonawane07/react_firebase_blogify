import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [deletePost]);

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <><div className="container">
            <div className="card">
              <div className="card_header">
                <img src={"https://source.unsplash.com/600x400/?computer"} alt="card__image" class="card__image" width="600" />
                <h1> {post.title}</h1>
              </div>
              <div class="card__body">
                <p>{post.postText}</p>
              </div>
            </div>
          </div><div className="card__footer">
              <div className="user">
                <img src={"https://i.pravatar.cc/40?img=1"} alt="user__image" class="user__image" />
                <div className="user__info">
                  <h5>{post.author.name}</h5>
                </div>
              </div>
            </div></>
        );
      })} 
    </div>
  );
}

export default Home;
