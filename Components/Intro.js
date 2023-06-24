import sytles from "../styles/Intro.module.css";
const Intro = () => {
    return (
        <section>
            <div className={sytles.intro}>
                <div>
                    <h2>Hello!</h2>
                    <p>
                        My name is Rupinder. I am a self-taught front-end developer. Welcome to
                        my portfolio site! Here I would like to tell a little about myself, and
                        showcase my projects.
                    </p>
                </div>
                <img alt="portrait" src="images/profile-min.jpg" />
            </div>
        </section>
    )
}

export default Intro;