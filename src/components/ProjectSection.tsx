import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import ClientSideRoute from "./ClientSideRoute";
import urlFor from "../../lib/urlFor";
import Image from "next/image";
import { useProject } from "./useProjects";
import Link from "next/link";
import { Box, useColorModeValue, Text } from "@chakra-ui/react";

type Props = {
  projects: Project[];
};

export default function ProjectSection({ projects }: Props) {
  const bg = useColorModeValue("white", "whiteAlpha.200");
  const border = useColorModeValue("gray.200", "gray.700");
  const heading = useColorModeValue("gray.700", "gray.100");
  const text = useColorModeValue("gray.500", "gray.200");

  return (
    <div className="py-4 pb-6 md:px-16 md:py-14">
      <div className="flex py-2">
        <Text color={heading} className="mb-4 text-3xl font-medium">
          Projekte
        </Text>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-y-16">
        {/* Posts */}
        {projects.map((project: any) => (
          <ClientSideRoute key={project._id} route={project.link}>
            <Box
              bg={bg}
              border="1px solid"
              borderColor={border}
              className="flex flex-col p-3 transition-all duration-150 cursor-pointer md:p-4 rounded-xl group "
            >
              <div className="relative w-full h-40 border rounded-lg md:h-56 ">
                <Image
                  className="object-cover object-center rounded-lg"
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  fill
                />
                <div className="absolute bottom-0 flex justify-between invisible w-full p-5 bg-opacity-20 rounded-b-2xl">
                  <div>
                    <Text
                      color={heading}
                      className="font-medium md:text-lg text-md"
                    >
                      {project.title}
                    </Text>
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
                <Text
                  color={heading}
                  className="mb-1 font-medium leading-5 md:text-xl text-md"
                >
                  {project.title}
                </Text>
                <Text color={text} className="text-sm line-clamp-3 md:text-md">
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
