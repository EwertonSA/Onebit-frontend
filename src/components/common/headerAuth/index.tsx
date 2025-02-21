import Link from "next/link";
import { Container, Form, Input} from "reactstrap";
import styles from "./styles.module.scss";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from 'react-modal'
import profileService from "@/src/services/profileService";

const HeaderAuth=()=>{
    const router = useRouter();
    const [modalOpen, setModalOpen]=useState(false)
    const [initials, setInitials] = useState("");
    const [searchName,setSearchName]=useState('')
    
    const handleSearch=async(ev:FormEvent<HTMLFormElement>)=>{
  ev.preventDefault()
  router.push(`search?name=${searchName}`);
  setSearchName('')
    }
    const handleSearchClick=()=>{
        router.push(`search?name=${searchName}`)
    }
    useEffect(() => {
        profileService.fetchCurrent().then((user) => {
          const firstNameInitial = user.firstName.slice(0, 1);
        const lastNameInitial = user.lastName.slice(0, 1);
        setInitials(firstNameInitial + lastNameInitial);
      });
    }, []);
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
                <Form onSubmit={handleSearch}>
                    <Input name="search" type="search" placeholder="pesquisar" 
                    className={styles.input} value={searchName}
                     onChange={(ev)=>setSearchName(ev.target.value.toLocaleLowerCase())}/>
                </Form>
                <img src="homeauth/iconSearch.svg" alt="lupaHeader"
                  className={styles.searchImg}
                  onClick={handleSearchClick}/>
                <p className={styles.userProfile} onClick={handleOpenModal}>{initials}</p>
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