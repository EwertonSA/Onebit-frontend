import Link from "next/link";
import { Container, Form, Input} from "reactstrap";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import Modal from 'react-modal'

const HeaderAuth=()=>{
    const router = useRouter();
    const [modalOpen, setModalOpen]=useState(false)
    const handleLogout = () => {
        sessionStorage.clear();
      router.push("/");
    };
    const handleOpenModal=()=>{

        setModalOpen(true)
    }
    const handleCloseModal=()=>{
        setModalOpen(false)
    }
  
    return(
        <>
        <Container className={styles.nav}>
            <Link href="/home">
            <img src="/logoOnebitflix.svg" alt="logo" className={styles.imgLogoNav}/>
            </Link>
            <div className="d-flex align-items-center">
                <Form >
                    <Input name="search" type="search" placeholder="pesquisar" className={styles.input}/>
                </Form>
                <img src="homeauth/iconSearch.svg" alt="lupaHeader"  className={styles.searchImg}/>
                <p className={styles.userProfile} onClick={handleOpenModal}>AB</p>
            </div>
            <Modal isOpen={modalOpen}
     onRequestClose={handleCloseModal} 
     shouldCloseOnEsc={true} 
     className={styles.modal}
    overlayClassName={styles.overlayModal}>
        <Link href='/profile'>
        <p className={styles.modalLink}>Meus dados</p>
        </Link>
        <p onClick={handleLogout} className={styles.modalLink}>Sair</p>
    </Modal>
        </Container>
        </>
    )
}
export default HeaderAuth;