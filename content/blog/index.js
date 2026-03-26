import post1 from "./bhakti-start-here";
import post2 from "./hanuman-chalisa-path-tips";
import post3 from "./hanuman-ashtak";

export const allPosts = [post1, post2, post3];

export const getPostBySlug = (slug) => {
  return allPosts.find((post) => post.slug === slug);
};

