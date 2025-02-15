import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss" 
import { HeaderNoAuth } from "@/src/components/homeNoAuth/headerNoAuth";
import { PresentationSection } from "@/src/components/homeNoAuth/presentationSection";
import { CardSection } from "@/src/components/homeNoAuth/presentationSection/cardSection";
import { SlideSection } from "@/src/components/homeNoAuth/slideSection";
import { GetStaticProps } from "next";
import { courseService, CourseType } from "@/src/services/courseService";
import { ReactNode, useEffect } from "react";
import { Footer } from "@/src/components/common/footer";
import AOS from "aos";
import "aos/dist/aos.css";

interface IndexPagePros{
  children?:ReactNode;
  course:CourseType[];
}


const HomeNoAuth = function ({course}:IndexPagePros) {
  useEffect(()=>{
AOS.init()
  },[])
  return (
		<>
			<Head>
        <title>Onebitflix</title>
        <link rel="shotcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title"/>
        <meta name="description" content="Tenha acesso aos melhores conteúdos de programação de uma forma rápida e prática"/>
      </Head>
			<main>
        <div className={styles.sectionBackground} data-aos="fade-zoom-in" data-aos-duration="1600">
        <HeaderNoAuth/>
        <PresentationSection/>
        </div>
        <div  data-aos="fade-reight" data-aos-durattion="1200">
        <CardSection/>
        </div>
        <div data-aos="fade up" data-aos-duration="1300">
        <SlideSection newestCourses={course} />
        </div>
        <Footer/>
      </main>
		</>)
};
export const getStaticProps: GetStaticProps=async()=>{
  const res=await courseService.getNewestCourse()
  return{
    props:{
    course: res??null
  },
  revalidate: 3600*24,
}}

export default HomeNoAuth;