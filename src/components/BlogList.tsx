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
    <Box w={"full"} bg={bg} color={color} className="">
      <div
        className={` ${manrope.className} grid grid-cols-1 gap-10 px-4 py-16 md:grid-cols-3 md:px-16 gap-y-16`}
      >
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col cursor-pointer group">
              <div className="relative w-full h-56">
                <Image
                  className="object-cover object-left rounded-2xl"
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                />
                <div className="absolute bottom-0 flex justify-between invisible w-full p-5 bg-opacity-20 rounded-b-2xl">
                  <div>
                    <p className="text-lg font-medium">{post.title}</p>
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
                <h1 className="mb-1 text-xl font-semibold leading-5">
                  {post.title}
                </h1>
                <p className="line-clamp-3">{post.description}</p>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </Box>
  );
}

export default BlogList;
