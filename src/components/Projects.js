import React,{useState} from 'react'
import data from '../data'

const Projects = () => {
    // eslint-disable-next-line
    const [items, setItems] = useState(data)

    return (
        <section className="showcase">
            <div className="overlay flex flex-col items-center justify-center text-white px-10">
                <div className="min-h-screen flex flex-col items-center">
                    <h1 className="text-4xl font-bold py-10">Stacks I use</h1>

                    <div className="py-1 px-1 grid grid-cols-3 gap-10 sm:grid-cols-3 lg:grid-cols-6 items-center justify-center lg:bg-cover">
                        {items.map((item) => {
                            const { id, path, desc } = item
                            return (
                                <div key={id}>
                                    <img src={path} alt={desc} className="p-5 rounded"/>
                                    <small className="block text-center font-semibold text-lg">{desc}</small>
                                </div>
                            )
                        })}
                    </div>
                    <h1 className="text-3xl font-bold py-20 lg:py-44 items-center">
                        To view all my projects, check out my <a className="text-green-500 no-underline hover:text-green-800" href="https://www.github.com/NaaLaryea">github</a>
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Projects
