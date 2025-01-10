import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
import { Button } from './ui/button'

const Contact = () => {
    return (
        <div>
            <Card data-aos="zoom-in" className='h-[85vh] overflow-y-scroll'>
                <CardHeader>
                    <CardTitle className='font-bold text-3xl uppercase mt-3'>Contact:</CardTitle>
                </CardHeader>

                <CardContent className="space-y-2">
                    <div className="container px-5 py-4 mx-auto">
                        <div className="flex flex-col text-center w-full mb-4">
                            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
                                Contact Us
                            </h1>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label
                                            htmlFor="message"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <Button className="flex w-full mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none rounded text-lg">
                                        Send
                                    </Button>
                                </div>
                                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                    <a className="text-blue-500">muhammadowais3782@gmail.com</a>

                                </div>
                            </div>
                        </div>
                    </div>


                </CardContent>
            </Card>
        </div>
    )
}

export default Contact
