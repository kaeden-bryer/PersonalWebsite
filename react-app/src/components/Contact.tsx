import '../index.css'

function Contact() {
    return (
        <>
            <section
                id="contact"
                className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 via-blue-300 to-blue-200"
            >
                <img src="pink-cube.png" alt="pink cube" className="absolute right-[10px]"></img>

                <div className="glass-container w-[80%] h-full flex flex-col justify-center items-center">
                    <h1 className="flex justify-center text-[4em]">Contact Me</h1>
                    <div className="flex flex-col justify-center text-[1.25em]">
                        <p>Thanks for being here :) </p>
                        <br></br>
                        <div>
                            Here are my links if you’d like to remain in contact with me. If you have any thoughts, questions or suggestions, I’m always open to hearing from you. Just send me an email at kaedenbryer@gmail.com
                        </div>
                        <br></br>
                        <p>Have a wonderful life♥️</p>
                    </div>
                </div>
            </section>
        </>
    )
} export default Contact