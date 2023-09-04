import React from 'react'
import Card from '../components/Card'

export default function Home() {
    const blogs = [
        {
            url: "https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg",
            title: "Way to lahore",
            desc: "tore delectus! Illo quidem doloribus reprehenderit libero",

        },
        {
            url: "https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg",
            title: "Way to Karachi",
            desc: "tore delectus! Illo quidem doloribus reprehenderit libero",

        },
        {
            url: "https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg",
            title: "Way to Islamabad",
            desc: "tore delectus! Illo quidem doloribus reprehenderit libero",

        },
        {
            url: "https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg",
            title: "Way to Quetta",
            desc: "tore delectus! Illo quidem doloribus reprehenderit libero",

        },
        {
            url: "https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg",
            title: "Way to Peshawar",
            desc: "tore delectus! Illo quidem doloribus reprehenderit libero",

        },
    ]
    return (
        <div className="container py-4">
            <div className="row py-3">
                <div className="col-12 text-center">
                    <h5>Main Intro</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae quas recusandae veniam vel eveniet provident officia, eligendi officiis modi, expedita, nulla inventore delectus! Illo quidem doloribus reprehenderit libero.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Blogs</h1>
                </div>
                {
                    blogs.map((blog, index) => 
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2" key={index}>
                        <Card url={blog.url} desc={blog.desc} title={blog.title} />
                    </div>)
                }

            </div>
        </div>
    )
}
