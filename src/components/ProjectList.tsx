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
  const bg = useColorModeValue("white", "whiteAlpha.200");
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const heading = useColorModeValue("blackAlpha.700", "whiteAlpha.700");
  const text = useColorModeValue("blackAplha.500", "whiteAlpha.500");

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:px-16 gap-y-16">
        {/* Posts */}
        {projects.map((project) => (
          <ClientSideRoute key={project._id} route={project.link}>
            <Box
              bg={bg}
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
                    <Heading color={heading} className="text-lg font-semibold">
                      {project.title}
                    </Heading>
                    <Text color={text}>
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
                  color={heading}
                  className="mb-1 text-xl font-semibold leading-5"
                >
                  {project.title}
                </Heading>
                <Text color={text} className="line-clamp-3">
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
