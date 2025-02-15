import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import  HeaderGeneric  from "@/src/components/common/headerGeneric";
 "@/src/components/common/headerGeneric";

 const Register=()=>{
    return(
        <>
        <Head>
<title>Onebitflix - Registro</title>
<link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
<HeaderGeneric logoUrl="/" btnContent="Quero fazer login" btnUrl="/login"/>
        </main>
        </>
    )
}
export default Register