import * as motion from "motion/react-client"

function Hero() {
    return (
        <> 
            <section
                id="hero"
                className="min-h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-b from-pink-100 via-pink-300 to-pink-200"
            >
                <motion.div
                    initial={{ opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ duration: 1.5 }}
                >
                    <h1 className="flex justify-center text-[4em]">Kaeden's Website</h1>
                    <h3 className="flex justify-center text-[2em] text-gray-500">Grow with me</h3>
                </motion.div>
                
            </section>
        </>
    )
} export default Hero