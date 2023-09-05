import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Paroxes = () => {
    const [data, setData] = useState({});

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:1337/api/parochis"
            );
            setData(response.data.data[0]);
            console.log(response.data.data[0]);
        } catch (err) {
            console.log("Error", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <section>
                <h1 className="text-center text-2xl underline font-bold text-custom-new-blue mt-24 mb-10">
                    ΠΑΡΟΧΕΣ
                </h1>
                <h3 className="text-left text-2xl underline font-bold text-custom-new-blue ml-2 mb-5">
                    Κλάδος ΕΦΑΠΑΞ
                </h3>
                <div className="text-lg ml-4 mr-2 mr-2 bg-blue-100 px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500">
                    <p className="text-gray-700 text-left text-1xl font-semibold">
                        {data &&
                            data.attributes &&
                            data.attributes.klados_efapax}
                    </p>
                </div>
                <div>
                    <div className="text-left mt-8">
                        <h2 className="text-xl underline font-bold text-custom-new-blue ml-2  mb-5">
                            Ποσό εφάπαξ παροχής
                        </h2>

                        <div className="text-left text-lg ml-4 mr-2 bg-blue-100 px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500 mb-5">
                            <p className="text-gray-700 text-1xl font-semibold ">
                                {data && data.attributes && (
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            a: ({
                                                node,
                                                children,
                                                ...props
                                            }) => {
                                                return (
                                                    <span className="text-blue-600 font-bold underline hover:text-blue-700">
                                                        <a
                                                            href={props.href}
                                                            target="_blank">
                                                            <i class="fa-solid fa-user-xmark"></i>
                                                            {children}
                                                        </a>
                                                    </span>
                                                );
                                            },
                                        }}>
                                        {data.attributes.poso_efapax_paroxis1}
                                    </ReactMarkdown>
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="text-lg text-left ml-4 mr-2 bg-blue-100 px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500 ">
                        <p className="text-gray-700 text-1xl font-semibold  ">
                            {data &&
                                data.attributes &&
                                data.attributes.poso_efapax_paroxis2}
                        </p>
                    </div>
                </div>
                <div className="text-left mb-10">
                    <h1 className="text-left text-xl underline font-bold text-custom-new-blue ml-2 mt-10 mb-5">
                        Προϋποθέσεις θεμελίωσης δικαιώματος σε παροχή
                    </h1>
                    <p className="text-xl underline ml-2 ">
                        Ο ασφαλισμένος δικαιούται εφάπαξ παροχή από το Ταμείο
                        εφόσον συντρέχουν στο πρόσωπό του οι ακόλουθες
                        προϋποθέσεις:
                    </p>
                    {data && data.attributes && (
                        <ReactMarkdown
                            components={{
                                li: ({ node, children, ...props }) => {
                                    return (
                                        <li className="text-gray-700 text-left text-1xl font-semibold p-2">
                                            <span class="material-icons text-blue-400">
                                                check_circle
                                            </span>
                                            {children}
                                        </li>
                                    );
                                },
                                ul: ({ children }) => {
                                    return (
                                        <ul className="text-1xl  pl-6 mt-3 space-y-2 mb-10 ml-4 mr-2 bg-blue-100 px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500">
                                            {children}
                                        </ul>
                                    );
                                },
                            }}>
                            {data.attributes.kritiria_efapax}
                        </ReactMarkdown>
                    )}
                </div>
                <div className="text-left  mt-10">
                    <div className="mb-5">
                        <h1 className="text-xl underline font-bold text-custom-new-blue ml-2  mb-5">
                            Κλάδος ΑΛΛΗΛΕΓΓΥΗΣ
                        </h1>
                        <p className="text-lg ml-4 mr-2 bg-blue-100 px-6 py-4 rounded-lg shadow-md border-l-4 border-blue-500">
                            {data &&
                                data.attributes &&
                                data.attributes.klados_alilegiis}
                        </p>
                    </div>
                    <div className="mx-auto bg-white shadow-md rounded-lg  p-4 grid lg:grid-cols-3 lg:gap-8">
                        <div className="mb-10 bg-white rounded-lg  p-8 max-w-2xl">
                            <h2 className="text-xl underline font-bold text-custom-new-blue mb-5">
                                Σε περίπτωση θανάτου
                            </h2>
                            <p className="text-1xl ">
                                {data &&
                                    data.attributes &&
                                    data.attributes.periptosi_thanatou}
                                <ul className="list-disc pl-6 mt-3 space-y-2 mb-10">
                                    {data &&
                                        data.attributes &&
                                        data.attributes.kritiria_thanatou
                                            .split("#")
                                            .map((elem) => {
                                                return (
                                                    <li className="bg-white p-4 rounded-lg shadow-md mt-10 hover:text-white hover:bg-custom-new-blue shadow-lg transition delay-50 duration-300 ease-in-out ">
                                                        {elem}
                                                    </li>
                                                );
                                            })}
                                </ul>
                                {data && data.attributes && (
                                    <ReactMarkdown
                                        components={{
                                            a: ({
                                                node,
                                                children,
                                                ...props
                                            }) => {
                                                return (
                                                    <span className="text-blue-600 hover:text-blue-700 underline">
                                                        <a
                                                            href={props.href}
                                                            target="_blank">
                                                            <i class="fa-solid fa-circle-down"></i>
                                                            {children}
                                                        </a>
                                                    </span>
                                                );
                                            },
                                        }}>
                                        {data.attributes.paroxi_thanatou}
                                    </ReactMarkdown>
                                )}
                            </p>
                        </div>
                        <div className="mb-10 bg-white rounded-lg  p-8 max-w-2xl">
                            <h2 className="text-xl underline font-bold text-custom-new-blue  mb-5">
                                Μακροχρόνια νοσοκομειακή Περίθαλψη
                            </h2>
                            <p className="text-1xl ">
                                {data &&
                                    data.attributes &&
                                    data.attributes.makroxronia_perithalpsi}
                                <ul className="list-disc pl-6 mt-3 space-y-2 mb-10">
                                    {data &&
                                        data.attributes &&
                                        data.attributes.kritiria_perithalpsis
                                            .split("#")
                                            .map((elem) => {
                                                return (
                                                    <li className="bg-white p-4 rounded-lg shadow-md mt-10 hover:text-white hover:bg-custom-new-blue shadow-lg transition delay-50 duration-300 ease-in-out ">
                                                        {elem}
                                                    </li>
                                                );
                                            })}
                                </ul>
                                {data && data.attributes && (
                                    <ReactMarkdown
                                        components={{
                                            a: ({
                                                node,
                                                children,
                                                ...props
                                            }) => {
                                                return (
                                                    <span className="text-blue-600 hover:text-blue-700 underline">
                                                        <a
                                                            href={props.href}
                                                            target="_blank">
                                                            <i class="fa-solid fa-circle-down"></i>
                                                            {children}
                                                        </a>
                                                    </span>
                                                );
                                            },
                                        }}>
                                        {data.attributes.paroxi_perithalpsis}
                                    </ReactMarkdown>
                                )}
                            </p>
                        </div>
                        <div className="mb-10 bg-white rounded-lg  p-8 max-w-2xl">
                            <h2 className="text-xl underline font-bold text-custom-new-blue  mb-5">
                                Σε περίπτωση αναπηρίας
                            </h2>
                            <p className="text-1xl ">
                                {data &&
                                    data.attributes &&
                                    data.attributes.periptosi_anapirias}
                                <ul className="list-disc pl-6 mt-3 space-y-2 mb-10">
                                    {data &&
                                        data.attributes &&
                                        data.attributes.kritiria_anapirias
                                            .split("#")
                                            .map((elem) => {
                                                return (
                                                    <li className="bg-white p-4 rounded-lg shadow-md mt-10 hover:text-white hover:bg-custom-new-blue shadow-lg transition delay-50 duration-300 ease-in-out ">
                                                        {elem}
                                                    </li>
                                                );
                                            })}
                                </ul>
                                {data && data.attributes && (
                                    <ReactMarkdown
                                        components={{
                                            a: ({
                                                node,
                                                children,
                                                ...props
                                            }) => {
                                                return (
                                                    <span className="text-blue-600 hover:text-blue-700 underline">
                                                        <a
                                                            href={props.href}
                                                            target="_blank">
                                                            <i class="fa-solid fa-circle-down"></i>
                                                            {children}
                                                        </a>
                                                    </span>
                                                );
                                            },
                                        }}>
                                        {data.attributes.paroxi_anapirias}
                                    </ReactMarkdown>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Paroxes;
