import styles from "../styles/Contact.module.css";

const Contact = () => {
    return (
        <section>
            <div className={styles.contact}>
                <h2>Let's Chat</h2>
                <div className={styles.contactBlock}>
                    <div className={styles.contactText}>
                        <p>You can reach me here.</p>
                    </div>
                    <ul className={styles.contactList}>
                        <li className={styles.contactItem}>
                            <a href="https://github.com/Rupinder-Kumar">Github</a>
                        </li>
                        <li className={styles.contactItem}>
                            <a href="https://www.linkedin.com/in/rupinder-kumar-15aba176/"
                            >LinkedIn</a
                            >
                        </li>
                        <li className={styles.contactItem}>
                            <a href="https://www.instagram.com/ruthless_rupinder/">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact