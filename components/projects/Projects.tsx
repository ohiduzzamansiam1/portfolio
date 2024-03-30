import { graphqlClient } from "@/lib/graphql/client";
import { gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import TitleText from "../reuseables/TitleText";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

type Project = {
  id: string;
  title: string;
  link: string;
  githubLink: string;
  description: string;
  image: {
    url: string;
  };
  outlineColor: string;
};

const getProjects = async () => {
  const query = gql`
    query Projects {
      projects {
        id
        title
        link
        githubLink
        description
        image {
          url
        }
        outlineColor
      }
    }
  `;
  let { projects } = await graphqlClient.request<{ projects: Project[] }>(
    query
  );
  return projects;
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <div className="max-w-5xl mx-auto sm:px-8">
        <TitleText
          text="Projects 🎨"
          className="flex flex-col items-center justify-center mb-5"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 pt-20">
          {projects.map((project, idx) => (
            <Link key={idx} href={project.link} target="_blank">
              <div>
                <CardContainer
                  className={`inter-var border-[7px] rounded-2xl ${project.outlineColor}`}
                >
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-lg p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-1"
                    >
                      {project.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={project.image.url}
                        height="1000"
                        width="1000"
                        className="max-h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="cover_image"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-12">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.link}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        Try now →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.githubLink}
                        target="__blank"
                        className="px-4 flex items-center gap-x-1.5 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        <SiGithub />
                        <p>Github</p>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
