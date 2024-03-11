import React from 'react'
import { FaAddressCard } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { GiClick } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";

const Products = () => {
    return (
        <div>
            {/* about text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src="/src/assets/1989-en.png" alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                        <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ea illum cumque quas id veritatis aliquid necessitatibus! Itaque, est, expedita quam accusamus ea dolores laudantium quia magnam aliquid cumque corrupti? Architecto consectetur facilis atque possimus dolorem ab sit quae, fugit beatae fugiat est deserunt provident, qui quod optio! Cum, accusamus!</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
            {/* company stats */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='testimonial'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'>
                        <img src="/src/assets/image9.png " alt="" className='bg-black w-96 -my-52' />
                    </div>
                    {/* stats */}
                    <div className='md:w-2/3 mx-auto'>
                        <div>
                            <p className='md:w-4/5 text-sm text-neutralDGrey mb-8 leading-7'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid excepturi expedita exercitationem tenetur inventore autem in earum? Labore cumque dolor at temporibus obcaecati reiciendis, quod itaque. Pariatur corporis at ad sint blanditiis, autem ex, aliquid nesciunt inventore vitae nobis, quaerat commodi soluta quae labore provident quam placeat rem voluptates suscipit. Aspernatur mollitia fugit, voluptates sed atque odio velit saepe a deleniti ipsa veniam, quia adipisci itaque, ullam suscipit obcaecati nostrum? Distinctio officiis impedit expedita dolorem neque voluptatem similique dolores, atque nemo quam facilis. Tenetur nulla blanditiis adipisci, sequi autem, ad quibusdam excepturi vel perspiciatis nemo doloremque numquam. Mollitia, ipsa iusto?
                            </p>
                            <h5 className='text-brandPrimary text-xl font-semibold mb-2'> Tim Smith</h5>
                            <p className='text-base text-neutralDGrey mb-8'>British Dragon Boat Racing Association</p>
                            <div>
                                <div className='flex items-center gap-8 flex-wrap'>
                                    <img src="src/assets/logo-hasc.png" alt="" className=' cursor-pointer' />
                                    <img src="src/assets/halat-logo.png" alt="" className=' cursor-pointer' />
                                    <div>
                                        <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products