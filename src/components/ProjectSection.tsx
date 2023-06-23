import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import ClientSideRoute from "./ClientSideRoute";
import urlFor from "../../lib/urlFor";
import Image from "next/image";
import { useProject } from "./useProjects";
import Link from "next/link";

type Props = {
  projects: Project[];
};

export default function ProjectSection({ projects }: Props) {
  return (
    <div className="py-4 pb-6 md:px-16 md:py-14">
      <div className="flex py-2">
        <h1 className="mb-4 text-3xl font-medium">Projekte</h1>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-y-16">
        {/* Posts */}
        {projects.map((project: any) => (
          <ClientSideRoute key={project._id} route={project.link}>
            <div className="flex flex-col p-3 transition-all duration-150 bg-white border border-gray-300 cursor-pointer md:p-4 rounded-xl group ">
              <div className="relative w-full h-56 border border-gray-800 rounded-lg md:h-80">
                <Image
                  className="object-cover object-left rounded-lg"
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  fill
                />
                <div className="absolute bottom-0 flex justify-between invisible w-full p-5 bg-opacity-20 rounded-b-2xl">
                  <div>
                    <p className="font-medium md:text-lg text-md">
                      {project.title}
                    </p>
                    <p>
                      {new Date(project._createdAt).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 mt-4 ">
                <h1 className="mb-1 font-medium leading-5 md:text-xl text-md">
                  {project.title}
                </h1>
                <p className="text-sm line-clamp-3 md:text-md">
                  {project.description}
                </p>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
