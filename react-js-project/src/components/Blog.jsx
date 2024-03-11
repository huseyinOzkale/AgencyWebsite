import React from 'react'

const Blog = () => {
    const blogs = [
        { id: 1, title: "Creating streamlined safeguarding processes with oneren", image: "/src/assets/image18.png" },
        { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: "/src/assets/image19.png" },
        { id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: "/src/assets/image20.png" },

    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
            <div className=' text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing</h2>
                <p className='text-sm text-neutralDGrey mb-8 md:w-3/4 mx-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit voluptatibus aperiam in consequuntur atque, voluptatem fuga, dolorum enim a officia, alias adipisci quam architecto deleniti totam similique odio ab!
                </p>
            </div>
            {/* all blogs */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer '>
                        <img src={blog.image} alt="" className='w-96 hover:scale-95 transition-all duration-300' />
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                            <h3 className='mb-3 text-neutralDGrey font-semibold'>{blog.title}</h3>
                            <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Readmore</a>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Blog