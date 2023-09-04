import { useState, useEffect } from "react";
import axios from "axios";
/* import Anesti from "../images/anesti_small.jpg";
import Vasdekis from "../images/vasdekis_small.jpg";
import Giannarakis from "../images/gianarakis_small.jpg";
import Skiadas from "../images/skiadas_small.jpg";
import Tsakalis from "../images/tsakalis_small.jpg";
import Dwrea from "../images/dwrea.jpg";
import Eustathiou from "../images/eustathiou.jpg";
import Giakoumi from "../images/giakoumi.jpg";
import Kapageridi from "../images/kapageridi.jpg";
import Karampelia from "../images/karampelia.jpg";
import Mitropoulou from "../images/mitropoulou.jpg";
import Mpomponis from "../images/mpomponis.jpg";
import Oikonomidou from "../images/oikonimidou.jpg";
import Savva from "../images/savva.jpg";
import Dimotakis from "../images/dimotakis.jpg"; */

const handleDownload = (path) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = process.env.PUBLIC_URL + path;
    downloadLink.download = "file";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};

const Card = ({ text, image, file }) => {
    if (file)
        return (
            <div className="border">
                <button
                    onClick={() => {
                        if (file) handleDownload("/Epistolh.DOC");
                    }}>
                    <p className="text-left text-custom-new-blue underline text-1xl font-semibold">
                        {text}
                    </p>
                    <img src={image}></img>
                </button>
            </div>
        );
    else {
        return (
            <div className="border">
                <a
                    href={image}
                    target="_blank">
                    <p className="text-left text-custom-new-blue underline text-1xl font-semibold ">
                        {text}
                    </p>
                    <img src={image}></img>
                </a>
            </div>
        );
    }
};

const Ergo = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:1337/api/to-tameio-toy-ergoys?populate=*"
            );
            setData(response.data.data);
            console.log(response.data.data);
        } catch (err) {
            console.log("Error", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDownload = (path) => {
        const downloadLink = document.createElement("a");
        downloadLink.href = process.env.PUBLIC_URL + path;
        downloadLink.download =
            "ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ (10-02-2015) ΓΙΑ ΚΑΡΑΜΠΕΛΙΑ.DOC";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div>
            <h1 className="text-center text-2xl underline font-bold text-custom-new-blue mt-24 ">
                ΤΟ ΕΡΓΟ ΤΟΥ ΤΑΜΕΙΟΥ
            </h1>
            <div className="mx-auto bg-white  rounded-lg  p-4 grid lg:grid-cols-5 lg:gap-8 mb-10 mt-10 ">
                {
                  data.map((elem, index) => {
                    const image = elem.attributes.Images?.data?.[0]?.attributes?.url;
                    if (image) {
                        return <Card key={elem.id} text={elem.attributes.Title} image={"http://localhost:1337" + image} file={elem.attributes.file} />;
                    }
                    return null; // Or handle the case when the image URL is missing or null
                })
                
                }
                
            </div>
        </div>
    );
};

export default Ergo;
