import React from 'react'
import diet from '../assets/diet.svg';
import hiit from "../assets/hiit.svg"
import jars from "../assets/jars.svg"
import vouchers from "../assets/vouchers.svg"


function Features() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id='features'>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight border-b-2 border-[#003049] pb-2 text-gray-900 sm:text-4xl md:mx-auto">
                    Our Features
                </h2>
            </div>
            <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
                <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#fdf0d5]">
                            <img src={diet} className='w-9 h-12 text-deep-purple-accent-400' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Proffesional Diet Plans</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Specialized diet plans for every human being made from our professional dietian and no cheat meals.
                        </p>
                    </div>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                </div>
                <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#fdf0d5]">
                            <img src={vouchers} className='w-9 h-12 text-deep-purple-accent-400' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Discount Vouchers</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Achive your goal to earn discount vouchers for your next step.
                        </p>
                    </div>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                </div>
                <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#fdf0d5]">
                            <img src={hiit} className='w-9 h-12 text-deep-purple-accent-400' />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">HIIT Trainings</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Be more active and burn more calories with our hiit trainings.
                        </p>
                    </div>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                </div>
                <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#fdf0d5]">
                            <img src={jars} className='w-9 h-12 text-deep-purple-accent-400' />

                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Healthy Supplements</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Enhance your metabolism with our vitman rich supplements.
                        </p>
                    </div>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Features