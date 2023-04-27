import React from "react";
import Image from "next/image";

interface ProjectComponentProps {
  title: string;
  image: string;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({
  title,
  image,
}) => {
  return (
    <>
      <div className="flex col-span-3 bg-white rounded-xl md:flex-col">
        <div className="mt-4 ml-4 text-base font-medium tracking-tight md:text-4xl ">
          {title}
        </div>
        <div>
          <Image
            className="object-contain w-full"
            src={image}
            width={240}
            height={240}
            alt={title}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectComponent;
