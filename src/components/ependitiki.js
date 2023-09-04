import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'

const Member = ({ id, fullName, pos }) => {
    return (
        <tr className="hover:bg-custom-new-blue hover:text-white">
            <td>{`${id}.`}</td>
            <td>{fullName}</td>
            <td>{pos}</td>
        </tr>
    );
};



const Ependytiki = () => {

    const [data, setData] = useState([])
    
    const fetchData = async () => {
      try {
        const results = await axios.get("http://localhost:1337/api/ependytiki-epitropis");
        console.log(results.data.data)
        setData(results.data.data);
      }
      catch (err) {
        console.log(err)
      } 
    } 

    useEffect(() => {
      fetchData();
    }, [])

    return (
        <div>
            <section>
                <h1 className=" text-center text-2xl underline font-bold text-custom-new-blue mt-24 ">
                    ΕΠΕΝΔΥΤΙΚΗ ΕΠΙΤΡΟΠΗ
                </h1>
                <div className="flex flex-col items-center">
                    <table className="mb-40 mt-20">
                        <thead className="bg-gray-200">
                            <th className="p-5"></th>
                            <th className="p-5">Ονοματεπώνυμο</th>
                            <th className="p-5">Θέση</th>
                        </thead>
                        <tbody className=" border border-gray-300">
                            {
                                  data.map((elem, index) => {
                                    return <Member id={index+1} fullName={elem.attributes.Fullname} pos={elem.attributes.Position} />
                                  })}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Ependytiki;
