import { useContext, createContext, useEffect, useState, ReactNode } from "react";
import Post from "~/types/post";

/**
 * context type
 */
type typePostContext = {
  currentPosts: Post[] | null | undefined;
  setCurrentPosts: (posts: Post[]) => void;
};
const PostContext = createContext<typePostContext | undefined>(undefined);

/**
 * props type
 */
type Props = {
  children: ReactNode;
};

export const PostProvider = ({ children }: Props) => {
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
        PostContext;
        setCurrentPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PostContext.Provider value={{ currentPosts, setCurrentPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
