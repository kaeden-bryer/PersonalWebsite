import * as motion from "motion/react-client"

function Hero() {
    return (
        <> 
            <section
                id="hero"
                className="min-h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-100 via-green-300 to-green-200"
            >
                <img src="green-cube.png" alt="pink cube" className="absolute left-[5em] bottom-[0px] w-[27%]"></img>
                <img src="pink-cube.png" alt="pink cube" className="absolute right-[10px] top-[50px]"></img>
                
                <motion.div
                    initial={{ opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ duration: 1.5 }}
                    className="w-screen h-[500px] flex flex-col justify-center items-center"
                >
                    <div className="glass-container w-[80%] h-full flex flex-col justify-center items-center">
                        <div className="mb-[100px]">
                            <h1 className="flex justify-center text-[4em]">ALOE.NOTES()</h1>
                            <h3 className="flex justify-center text-[2em]">JOURNALS :: CODE</h3>
                        </div>
                        <h3 className="flex justify-center text-[2em] text-gray-500">KAEDEN BRYER</h3>
                    </div>
                </motion.div>

                
            </section>
        </>
    )
} export default Hero