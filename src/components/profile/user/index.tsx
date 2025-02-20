import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";

const UserForm=()=>{
    return(
        <>
        <Form className={styles.form}>
            <div className={styles.formName}>
                <p className={styles.nameAbrev}>NT</p>
                <p className={styles.userName}>NAME TEST</p>

            </div>
            <div className={styles.memberTime}>
                <img className={styles.memberTimeImg} src="/profile/iconUserAccount.svg" alt="iconProfile" />
                <p className={styles.memberTimeText}>Membro desde <br /> 20 de Abril de 2020</p>
            </div>
            <hr />
            <div className={styles.inputFlexDiv}>
            <FormGroup>
                <Label for='firstName' className={styles.label}>
                    NOME
                </Label>
                <Input name="firstName" type="text" id="firstName" placeholder="Qual o sue nome?" required maxLength={20} className={styles.inputFlex} value={"Name"}/>
            </FormGroup>
            <FormGroup>
                <Label for='lastName' className={styles.label}>
                    SOBRENOME
                </Label>
                <Input name="lasstName" type="text" id="lastName" placeholder="Qual o sue sobrenome?" required maxLength={20} className={styles.inputFlex} value={"lastName"}/>
            </FormGroup>
            </div>
            <div className={styles.inputNormalDiv}>

            <FormGroup>
                <Label for="phone" className={styles.label}>
                    WHATSAPP/TELEGRAM
                </Label>
                <Input name="phone" type="tel" id="phone" placeholder="(11) 9xxxx-xxxx?" required className={styles.input} value={"(11) 94321-4321"}/>
            </FormGroup>
            <FormGroup>
                <Label for="phone" className={styles.label} > 
                  Email
                </Label>
                <Input name="email" type="email" id="email" placeholder="Coloque o seu email" required className={styles.input} value={"(test@email.com"}/>
            </FormGroup>
            <Button className={styles.formBtn} outline type="submit">
                Salvar alterações
            </Button>
            </div>
        </Form>
        </>
    )
}
export default UserForm