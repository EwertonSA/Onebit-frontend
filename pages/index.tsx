import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss" 
import { HeaderNoAuth } from "@/src/components/homeNoAuth/headerNoAuth";
import { PresentationSection } from "@/src/components/homeNoAuth/presentationSection";
import { CardSection } from "@/src/components/homeNoAuth/presentationSection/cardSection";

const HomeNoAuth = function () {
  return (
		<>
			<Head>
        <title>Onebitflix</title>
        <link rel="shotcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title"/>
        <meta name="description" content="Tenha acesso aos melhores conteúdos de programação de uma forma rápida e prática"/>
      </Head>
			<main>
        <div className={styles.sectionBackground}>
        <HeaderNoAuth/>
        <PresentationSection/>
        </div>
        <CardSection/>
      </main>
		</>)
};

export default HomeNoAuth;