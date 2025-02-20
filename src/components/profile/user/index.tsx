import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";
import { FormEvent, useEffect, useState } from "react";
import profileService from "@/src/services/profileService";
import ToastComponent from "../../common/toast";
import { useRouter } from "next/router";

const UserForm=()=>{
    const router=useRouter()
const [color,setColor]=useState('')
const[toastIsOpen,setToastIsOpen]=useState(false)
const[errorMessage,setErrorMesasage]=useState("")

const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState('')
const [phone,setPhone]=useState('')
const [email,setEmail]=useState('')
const [initialEmail, setInitialEmail] = useState(email);
const [created_at,setCreated_at]=useState('')
const date= new Date(created_at)
const month= date.toLocaleDateString("pt-BR", {month:"long"})

useEffect(()=>{
profileService.fetchCurrent().then((user)=>{
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setPhone(user.phone)
    setEmail(user.email)
    setInitialEmail(user.email)
    setCreated_at(user.createdAt)
})
},[])
const handleUserUpdate=async(event:FormEvent<HTMLFormElement>)=>{
event.preventDefault() 
const res=await profileService.userUpdate({
    firstName,lastName,phone,email,created_at
})
if(res===200){
    setToastIsOpen(true)
    setErrorMesasage("Informações alteradas com sucesso")
    setColor("bg-success")
    setTimeout(()=>setToastIsOpen(false),1000*3);
    if(email != initialEmail){
        sessionStorage.clear
router.push("/")
    }
}else{
    setToastIsOpen(true)
    setErrorMesasage("Você não pode mudar para esse email")
    setColor("bg-success")
    setTimeout(()=>setToastIsOpen(false),1000*3);

}
}

    return(
        <>
        <Form className={styles.form} onSubmit={handleUserUpdate}>
            <div className={styles.formName}>
                <p className={styles.nameAbrev}>
                    {firstName.slice(0,1)} {lastName.slice(0,1)}
                </p>
                <p className={styles.userName}>{`${firstName} ${lastName}`}</p>

            </div>
            <div className={styles.memberTime}>
                <img className={styles.memberTimeImg} src="/profile/iconUserAccount.svg" alt="iconProfile" />
                <p className={styles.memberTimeText}>Membro desde <br />  {`${date.getDate()} de ${month} de ${date.getFullYear()}`}</p>
            </div>
            <hr />
            <div className={styles.inputFlexDiv}>
            <FormGroup>
                <Label for='firstName' className={styles.label}>
                    NOME
                </Label>
                <Input name="firstName" type="text" id="firstName" placeholder="Qual o sue nome?"
                 required maxLength={20} className={styles.inputFlex} value={firstName}  onChange={(ev)=>setFirstName(ev.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label for='lastName' className={styles.label}>
                    SOBRENOME
                </Label>
                <Input name="lasstName" type="text" id="lastName" placeholder="Qual o sue sobrenome?"
                 required maxLength={20} className={styles.inputFlex} value={lastName} onChange={(ev)=>setLastName(ev.target.value)}/>
            </FormGroup>
            </div>
            <div className={styles.inputNormalDiv}>

            <FormGroup>
                <Label for="phone" className={styles.label}>
                    WHATSAPP/TELEGRAM
                </Label>
                <Input name="phone" type="tel" id="phone" placeholder="(11) 9xxxx-xxxx?" 
                required className={styles.input} value={phone}  onChange={(ev)=>setPhone(ev.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label for="phone" className={styles.label} > 
                  Email
                </Label>
                <Input name="email" type="email" id="email" placeholder="Coloque o seu email" 
                required className={styles.input} value={email}  onChange={(ev)=>setEmail(ev.target.value)}/>
            </FormGroup>
            <Button className={styles.formBtn} outline type="submit">
                Salvar alterações
            </Button>
            </div>
        </Form>
        <ToastComponent color={color} isOpen={toastIsOpen} message={errorMessage} />
        </>
    )
}
export default UserForm