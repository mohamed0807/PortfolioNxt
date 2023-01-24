import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import styles from "../styles/Home.module.css";
import { GetStaticProps } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import WorkExperience from "../components/Experience";
import { Experience, PageInfo, Project, Skill, Social } from "../typing";
import { fetchPageInfo } from "./utils/fetchPageInfo";
import { fetchExperience } from "./utils/fetchExperiences";
import { fetchSkill } from "./utils/fetchSkills";
import { fetchProject } from "./utils/fetchProjects";
import { fetchSocial } from "./utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  // experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  // experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] z-0 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <Head>
          <title>Portfolio - MOHAMED IBRAHIM </title>
        </Head>
        <Header socials={socials} />
        <section className="snap-start" id="hero">
          <Hero pageInfo={pageInfo} />
        </section>
        <section className="snap-center" id="about">
          <About pageInfo={pageInfo} />
        </section>
        {/* <section className="snap-center" id="experience">
          <WorkExperience />
        </section> */}
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>
        <section id="contact" className="snap-start">
          <Contact />
        </section>
        <Link href="#hero" passHref>
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <Image
                width={100}
                height={100}
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-cover animate-bounce"
                src="https://i.pinimg.com/236x/0f/8a/08/0f8a080f392832f3e3a89466703027fc.jpg"
                alt=""
              />
            </div>
          </footer>
        </Link>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // console.log("Context", context);
  const pageInfo: PageInfo = await fetchPageInfo();
  // const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkill();
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchSocial();
  // console.log("PageInfo:", pageInfo);
  return {
    props: {
      pageInfo,
      // experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 100,
  };
};
