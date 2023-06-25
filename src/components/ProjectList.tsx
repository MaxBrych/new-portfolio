import post from "../../schemas/post";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import category from "../../schemas/category";
import ClientSideRoute from "./ClientSideRoute";
import { Heading, useColorModeValue, Text, Box } from "@chakra-ui/react";

type Props = {
  projects: Project[];
};

function ProjectList({ projects }: Props) {
  {
    /*console.log(posts.length);*/
  }
  const bg = useColorModeValue("gray.100", "#0a0b0d");
  const color = useColorModeValue("gray.500", "gray.500");
  const border = useColorModeValue("gray.200", "gray.700");
  const text = useColorModeValue("blackAlpha.900", "white");

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:px-16 gap-y-16">
        {/* Posts */}
        {projects.map((project) => (
          <ClientSideRoute key={project._id} route={project.link}>
            <Box
              border="1px solid"
              borderColor={border}
              className="flex flex-col cursor-pointer group"
            >
              <div className="relative w-full h-56">
                <Image
                  className="object-cover object-left rounded-2xl"
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  fill
                />
                <div className="absolute bottom-0 flex justify-between invisible w-full p-5 bg-opacity-20 rounded-b-2xl">
                  <div>
                    <Heading color={text} className="text-lg font-bold">
                      {project.title}
                    </Heading>
                    <Text color={color}>
                      {new Date(project._createdAt).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex-1 mt-4 ">
                <Heading
                  color={text}
                  className="mb-1 text-xl font-semibold leading-5"
                >
                  {project.title}
                </Heading>
                <Text color={color} className="line-clamp-3">
                  {project.description}
                </Text>
              </div>
            </Box>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
