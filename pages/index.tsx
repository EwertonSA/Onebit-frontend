import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss" 
import { HeaderNoAuth } from "@/src/components/homeNoAuth/headerNoAuth";

const HomeNoAuth = function () {
  return (
		<>
			<Head>
        <title>Onebitflix</title>
      </Head>
			<main>
        <HeaderNoAuth/>
      </main>
		</>)
};

export default HomeNoAuth;