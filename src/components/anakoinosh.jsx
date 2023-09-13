import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import PDF from "../images/icon.png";

const Anakoinosh = () => {
    const { state } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    // Check if state is not null and if state.announcementData is defined
    if (state && state.announcementData) {
        const { title, announcement } = state.announcementData;

        return (
          <div className="bg-gray-100 min-h-screen">
            <h1 style={{ color: '#0582ca' }} className="text-3xl font-bold pt-24 text-center">ΑΝΑΚΟΙΝΩΣΗ</h1>
            <div className="  text-blue-400 container max-w-3xl mx-auto pt-10 block rounded-lg pb-4">
                <div class="block rounded-lg bg-white p-6 pt-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <h5 className="text-center mb-2 lg:text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                        {title}
                    </h5>
                    <p className="pt-5 mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        <ReactMarkdown components={{
                            a: ({ node, children, ...props }) => (
                              <div className='flex justify-center'>
                                <a className="no-underline  text-blue-600 hover:text-blue-700 underline mt-5 " href={props.href} target="_blank">
                                  <span>
                                    {children}
                                    <img className='inline' width={25} src={PDF} alt="" />
                                  </span>
                              </a>
                              </div>                      
                            ),
                          }}>{announcement}</ReactMarkdown>
                    </p>
                </div>
            </div>
          </div>
            
        );
    }

    // Handle the case when state.announcementData is not available
    return <div className="mt-20">Announcement data not found.</div>;
};

export default Anakoinosh;

/* <div className="min-h-max text-blue-400 container max-w-3xl mx-auto pt-20 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="text-3xl border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
          ΑΝΑΚΟΙΝΩΣΗ
        </div>
        <div className="p-6 pt-20">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <p className="pt-20 mb-4 text-base text-neutral-600 dark:text-neutral-200">
            <ReactMarkdown>{announcement}</ReactMarkdown>
          </p>
        </div>
      </div> */
