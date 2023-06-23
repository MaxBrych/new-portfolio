import post from "../../schemas/post";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import category from "../../schemas/category";
import ClientSideRoute from "./ClientSideRoute";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"] });

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  {
    /*console.log(posts.length);*/
  }
  const bg = useColorModeValue("gray.100", "#0a0b0d");
  const color = useColorModeValue("gray.700", "white");

  return (
    <div className="py-4 md:px-16 md:py-14">
      <div className="flex py-2">
        <h1 className="mb-4 text-3xl font-medium">Blog</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 gap-y-8 md:gap-y-16">
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col p-3 transition-all duration-150 bg-white border border-gray-300 cursor-pointer md:p-4 rounded-xl group ">
              <div className="relative w-full h-56">
                <Image
                  className="object-cover object-left rounded-lg"
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                />
                <div className="absolute bottom-0 flex justify-between invisible w-full p-5 bg-opacity-20 rounded-b-2xl">
                  <div>
                    <p className="font-medium md:text-xl text-md">
                      {post.title}
                    </p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 mt-4 ">
                <h1 className="mb-1 text-lg font-semibold leading-5 md:text-md">
                  {post.title}
                </h1>
                <p className="text-sm line-clamp-3 md:text-md">
                  {post.description}
                </p>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
