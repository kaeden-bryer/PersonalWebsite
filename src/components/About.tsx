import * as motion from "motion/react-client"

function About() {
    const ball = {
        width: 300,
        height: 300,
        backgroundColor: 'coral',
        borderRadius: "25%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5em",
        color: "white",
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    }   

    return (
        <>
            <section
                id="about"
                className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-pink-100 via-pink-300 to-pink-200"
            >
                <h1 className="flex justify-center text-[4em]">ALOE.ToString()</h1>
                <motion.div
                    initial={{ opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    whileHover={{ scale: 1.2, rotate:360 }}
                    transition={{
                        duration: 0.4,
                        scale: {type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    style={ball}
                >
                    About Me
                </motion.div>
            </section>
        </>
    )
} export default About