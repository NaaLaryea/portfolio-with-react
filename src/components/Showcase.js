import React from 'react'
import { Link } from 'react-router-dom'
import Typical from 'react-typical'

const Showcase = () => {
    return (
        <>
            <section className="showcase">
                <div className="overlay flex flex-col items-center justify-center text-white px-10">
                    <h1 className="text-5xl font-semibold text-right mb-10 lg:text-center lg:px-50">
                        Hi! Naa here. <br></br>I am a <span className="text-green-700"><Typical
                            steps={['fullstack developer', 500]}
                            loop={Infinity}
                            className="inline-block"/></span> open to opportunities in web development
                    </h1>

                    <div className="ml-auto lg:ml-0">
                        <Link to="/about" className="mr-5 bg-green-600 py-2 px-4 rounded-full font-semibold transition-all hover:bg-green-900">About</Link>
                        <Link to="/projects" className="mr-5 bg-green-600 py-2 px-4 rounded-full font-semibold transition-all hover:bg-green-900">Projects</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Showcase
