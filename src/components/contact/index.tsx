import styles from './styles.module.scss'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


export function Contato()  {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_jo4z60p', e.target, 'gLcOo5FH3by3uKgn_')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
        }, (error) => {
            alert(error.message);
        });
        e.target.reset();
    }

    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contato}>
                    <h1>Contato</h1>
                </div>
                <form onSubmit={sendEmail} ref={form} className={styles.form}>
                    <div>
                        <div className={styles.contentForm}>
                            <label className={styles.label}>Nome :</label>
                            <input type="text"  className={styles.input} required placeholder="Nome" name="name"/>
                        </div>
                        <div className={styles.contentForm}>
                            <label className={styles.label}>Email :</label>
                            <input type="email" className={styles.input} required placeholder="Seu email" name="email"/>
                        </div>

                        <div className={styles.contentForm}>
                            <label className={styles.label}>Mensagem :</label>
                            <textarea  id="" cols={30} rows={8} required placeholder="Sua mensagem" name="message"></textarea>
                        </div>
                        <div className={styles.contentForm}>
                            <input className={styles.button} type="submit" value="Enviar mensagem"></input>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}