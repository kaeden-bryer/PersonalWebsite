import React from 'react'
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
                    <p className="flex justify-center text-[2em]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime minus provident totam unde, quis iure incidunt et praesentium illum optio omnis ipsa soluta repellat voluptas debitis dignissimos. Nulla, aperiam quaerat.
                    </p>
                </div>
            </section>
        </>
    )
} export default Contact