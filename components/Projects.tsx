"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";
import Link from "next/link";
import Image from "next/image";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 md:top-8 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="mt-20 lg:mt-0 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 ">
        {projects?.map((project, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            {/* <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
              className="object-cover md:h-32 md:w-fit h-28 w-fit  -mt-56"
            /> */}
            <Image
              src={urlFor(project?.image).url()}
              alt=""
              width={500}
              height={500}
              className="object-cover md:h-60 md:w-fit h-48 w-fit -mt-36 md:mt-0"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-slate-400 ">
                  Case Study {i + 1} of {projects?.length}: {project?.title}
                </span>
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies?.map((tech) => (
                  <Image
                    width={30}
                    height={30}
                    className="h-6 -mt-4 -mb-4 object-contain"
                    key={tech?._id}
                    src={urlFor(tech?.image).url()!}
                    alt=""
                  />
                ))}
              </div>

              <div className="flex flex-col gap-10 items-center">
                <p className="text-lg text-center md:text-left">
                  {project?.summary}{" "}
                </p>

                <Link
                  className="text-xl hover:underline"
                  href={project?.linkToBuild}
                >
                  <span className="hover:no-underline">Link : </span>
                  {project?.linkToBuild}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-yellow-500 opacity-30 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
