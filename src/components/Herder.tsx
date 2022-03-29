import React from 'react'
import Nav from './Nav'
import Search from './Search'

type Props = {}

const Herder = (props: Props) => {
  return (
    <div>
        <div id="main_header">
            <div className="bg-neutral-100">
                <div className="h-10 flex justify-between items-center w-11/12 m-auto">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap='round' strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>0962597441</span>
                    </div>
                    <div>
                        <a href="${linkUser}" className="mr-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap='round' strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span></span>
                        </a>
                        
                        <a href="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap='round' strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center w-11/12 m-auto">
                    <div className="py-3 w-1/6">
                        <img src="https://res.cloudinary.com/dcalzi23m/image/upload/v1644595451/js_advanced/logo_anjssy.png" className="w-full" />
                    </div>
                    <div className="py-3">
                    <Nav/>
                    </div>
                    <div className="py-3 relative flex items-center">
                        <input type="text" id="search_content" className="border border-slate-500 rounded-3xl outline-none py-2 px-10 indent-1" placeholder="Tìm kiếm tại đây..." />
                        <svg xmlns="http://www.w3.org/2000/svg" id="btn_search" className="h-8 w-8 inline text-slate-500 cursor-pointer absolute right-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap='round' strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herder