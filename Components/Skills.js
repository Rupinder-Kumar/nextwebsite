import styles from "../styles/Skills.module.css"
const Skills = () => {
    return (
        <section>
            <div className={styles.skills}>
                <div className={styles.skillText}>
                    <h2>My skills:</h2>
                    <ul>
                        <li>HTML5. I try to write valid and semantic mark-up.</li>
                        <li>
                            CSS3. I really enjoy creating layouts and components. I also use SCSS,
                            Sass, Less and animate.css.
                        </li>
                        <li>JavaScript, ES6, TypeScript, Next JS and React.js. Currently i am working in React js Ecosystem.</li>
                        <li>Redux, Redux Thunk, Redux Saga, Styled Components and other popular packages.</li>
                        <li>Webpack, NPM</li>
                        <li>Git - for the version control.</li>
                        <li>English, Hindi and Punjabi - for the communication.</li>
                    </ul>
                    <p></p>
                </div>
                <div className={styles.skillImg}>
                    <img alt="sreenshot of the site" src="images/book.jpg" />
                </div>
            </div>
        </section>
    )
}

export default Skills;