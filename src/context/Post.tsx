import React, { createContext, useEffect, useState, ReactNode } from "react";
import Post from "~/types/post";

/**
 * context type
 */
type typePostContext = {
  currentPosts: Post[] | null | undefined;
};
const PostContext = createContext<typePostContext>({ currentPosts: null });

/**
 * props type
 */
type Props = {
  children?: ReactNode;
};

const PostProvider: React.FC = (props: Props) => {
  const [currentPosts, setCurrentPosts] = useState<Post[] | null | undefined>(
    undefined
  );

  const fetchRepositories = async () => {
    const url = `https://api.github.com/users/yujiokayama/repos`;
    const response = await fetch(url);
    return await response.json().catch((err) => err);
  };

  useEffect(() => {
    fetchRepositories()
      .then((data) => {
        setCurrentPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PostContext.Provider value={{ currentPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
