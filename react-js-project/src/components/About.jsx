import React from 'react'
import { FaAddressCard } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { GiClick } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";

const About = () => {
    return (
        <div>
            {/* about text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src="/src/assets/1989-en.png" alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>the unseen of spending three years at pixelgrade</h2>
                        <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ea illum cumque quas id veritatis aliquid necessitatibus! Itaque, est, expedita quam accusamus ea dolores laudantium quia magnam aliquid cumque corrupti? Architecto consectetur facilis atque possimus dolorem ab sit quae, fugit beatae fugiat est deserunt provident, qui quod optio! Cum, accusamus!</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
            {/* company stats */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping a local <br /> <span className='text-brandPrimary'>business reinvent itself</span></h2>
                        <p>we reached here with our hard work and dedication</p>
                    </div>
                    {/* stats */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row sm:items-center justify-around gap-12'>
                        <div className='space-y-8 '>
                            <div className='flex items-center gap-4'>
                                <FaAddressCard className='text-brandPrimary' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FaHandshake className='text-brandPrimary' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>46,328</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8 '>
                            <div className='flex items-center gap-4'>
                                <GiClick className='text-brandPrimary' />

                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>828,867</h4>
                                    <p>Event Bookings</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <MdOutlinePayment className='text-brandPrimary' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>1,926,436</h4>
                                    <p>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About