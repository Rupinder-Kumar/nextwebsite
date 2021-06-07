import styles from "../styles/Story.module.css"
const Story = () => {
    return (
        <section>
            <div className={styles.story}>
                <div className={styles.storyText}>
                    <h2>My story:</h2>
                    <p>
                        My developer story began in 2017, the moment I opened the code editor
                        for the first time. This journey has been one of the hardest in my life
                        so far, but also one of the most exciting. Studying was difficult for me
                        at the beginning. But now I know that is totally normal…everyone goes
                        through that when they start something new. The main thing is to be
                        persistent and never give up.
      </p>
                    <p>
                        Some people think programming is boring. But I disagree. I see a lot of
                        creativity in frontend. I really love it because, after writing a line
                        of code, you immediately see the result of your work on the screen. I
                        think It's really interesting and fun!
      </p>
                </div>
                <div className={styles.storyImg}>
                    <img alt="Laptop with code editor open" src="images/laptop.jpeg" />
                </div>
            </div>
        </section>
    )
}

export default Story