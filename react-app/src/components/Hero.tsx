import * as motion from "motion/react-client"

function Hero() {
    return (
        <> 
            <section
                id="hero"
                className="min-h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-100 via-green-300 to-green-200"
            >
                <motion.div
                    initial={{opacity: 0, x:-100}}
                    animate={{opacity: 1, x:0}}
                    transition={{ duration: 1.5 }}
                    className="absolute left-[1.5em] bottom-[20px] w-[27%]"
                >
                    <img src="green-cube.png" alt="pink cube" className="absolute bottom-[0px] w-full"></img>
                </motion.div>

                <motion.div
                    initial={{opacity:0, x:100}}
                    animate={{opacity: 1, x:0}}
                    transition={{duration: 1.5}}
                    className="absolute right-[1.5em] top-[50px] w-[27%]"
                >
                    <img src="pink-cube.png" alt="pink cube" className="absolute top-[50px] w-full"></img>
                </motion.div>
                
                <div className="glass-container w-[80%] h-full flex flex-col justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ duration: 1.5 }}
                    className="w-screen h-[500px] flex flex-col justify-center items-center"
                >
                        <div className="mb-[100px]">
                            <h1 className="flex justify-center text-[4em]">ALOE.NOTES()</h1>
                            <h3 className="flex justify-center text-[2em]">JOURNALS :: CODE</h3>
                        </div>
                        <h3 className="flex justify-center text-[2em] text-gray-500">KAEDEN BRYER</h3>
                </motion.div>
                </div>

                
            </section>
        </>
    )
} export default Hero