import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";

const PasswordForm=()=>{
    return(
        <>
        <Form className={styles.form}>
            <div className={styles.inputNormalDiv}>
                <FormGroup>
                    <Label className={styles.label} for="newPassword">SENHA ATUAL</Label>
                    <Input 
                    name="currentPassword"
                    type="password"
                    id="curruntPassword"
                    placeholder="*********"
                    required 
                    minLength={6}
                    maxLength={12}
                    className={styles.input}/>
                </FormGroup>
            </div>
            <div className={styles.inputFlexDiv}>
                <FormGroup>
                    <Label  className={styles.label} for="newPassword">NOVA SENHA</Label>
                    <Input 
                    name="newPassword"
                    type="password"
                    id="newPassword"
                    placeholder="*********"
                    required
                    minLength={6}
                    maxLength={12}
                    className={styles.inputFlex}
                    />
                </FormGroup>
                <FormGroup>
                    <Label  className={styles.label} for="confirmPassword">CONFIRMAR SENHA</Label>
                    <Input 
                    name="confirmPassword"
                    type="password"
                    id="confirmPassword"
                    placeholder="*********"
                    required
                    minLength={6}
                    maxLength={12}
                    className={styles.inputFlex}
                    />
                </FormGroup>
              
            </div>
            <Button className={styles.fomrBtn}>
                    SALVAR ALTERAÇÕES
                </Button>
        </Form>
        </>
    )
}
export default PasswordForm