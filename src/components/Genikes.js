import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

const myList = [
    {
        id: 1,
        title: "11η Γενική Συνέλευση (2022)",
        links: ["Έντυπο ΤΕΑ 11ης Γενικής Συνέλευσης"],
    },

    {
        id: 2,
        title: "10η Γενική Συνέλευση (2021)",
        links: ["Έντυπο ΤΕΑ 10ης Γενικής Συνέλευσης"],
    },

    {
        id: 3,
        title: "9η Γενική Συνέλευση (2020)",
        links: ["Έντυπο ΤΕΑ 9ης Γενικής Συνέλευσης"],
    },

    {
        id: 4,
        title: "8η Γενική Συνέλευση (2019)",
        links: [
            "Πρόγραμμα Γενικής Συνέλευσης",
            "Αφίσα",
            "Έντυπο ΤΕΑ 8ης Γενικής Συνέλευσης",
        ],
    },

    {
        id: 5,
        title: "7η Γενική Συνέλευση (2018)",
        links: [
            "Ανακοίνωση",
            "Πρόγραμμα Γενικής Συνέλευσης",
            "Θέματα Ημερήσιας Διάταξης Γ.Σ.",
            "Αφίσα",
            "Ανακοίνωση Αποφάσεων 7ης Γ.Σ.",
        ],
    },

    {
        id: 6,
        title: "6η Γενική Συνέλευση (2017)",
        links: ["Αφίσα", "Ανακοίνωση Αποφάσεων"],
    },

    {
        id: 7,
        title: "5η Γενική Συνέλευση (2016)",
        links: ["Πρόσκληση", "Αφίσα", "Δελτίο Τύπου"],
    },

    {
        id: 8,
        title: "4η Γενική Συνέλευση (2015)",
        links: ["Πρόσκληση"],
    },

    {
        id: 9,
        title: "3η Γενική Συνέλευση (2014)",
        links: ["Αφίσα", "Φάκελος", "Δελτίο Τύπου"],
    },

    {
        id: 10,
        title: "2η Γενική Συνέλευση (2013)",
        links: ["Φάκελος", "Δελτίο Τύπου"],
    },

    {
        id: 11,
        title: "1η Γενική Συνέλευση (2012)",
        links: ["Φάκελος", "Πρακτικά", "Δελτίο Τύπου"],
    },
];

function App() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const itemsPerPage = 11;

    const fetchMeetings = async () => {
        try{
            const response = await axios.get("http://localhost:1337/api/genikes-syneleyseis");
            console.log(response.data.data)
            setData(response.data.data);
            const calculatedTotalPages = Math.ceil(response.data.data.length / itemsPerPage);
            setTotalPages(calculatedTotalPages);
        }
        catch(err){
            console.log(Error, err)
        }
    };

    useEffect(() => {
        fetchMeetings();
    }, []);

    
    const links = data.map((elem) => {
        let temp = [];
        for (let link in elem.attributes) {
            if (elem.attributes[link] && link.slice(0,3) === "Url") {
                temp.push(elem.attributes[link]) 
            }
        }
        console.log(temp)
        return temp;
    })

    console.log("Links are", links)

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const subset = data.slice(startIndex, endIndex);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
        smoothScrollToTop();
    };

    const smoothScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="bg-gray-100 min-h-screen ">
            <div className="text-center pt-4">
                <h1 style={{color: "#0582ca"}} className="text-3xl  font-bold pt-20">
                    ΓΕΝΙΚΕΣ ΣΥΝΕΛΕΥΣΕΙΣ
                </h1>
            </div>
            <div className="mx-auto container" style={{ maxWidth: "80%" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                    {subset.map((elem, ind) => (
                        <div
                            key={elem.id}
                            className="block rounded-lg bg-white mt-6 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                {elem.attributes.Title}
                            </h5>
                            <div>
                                <ul>
                                    {links[ind].map((link, index) => {
                                        return (
                                            <li key={index} className="break-words mb-2">
                                                <a
                                                    className="text-blue-700"
                                                    href={link}>
                                                    {myList[ind].links[index]}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="py-4">
                    <div
                        className={`flex flex-col items-center justify-center pt-6`}>
                        <div className={`flex justify-center pt-6`}>
                            {/* ReactPaginate component */}
                            <ReactPaginate
                                pageCount={totalPages}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                onPageChange={handlePageChange}
                                containerClassName="pagination"
                                activeClassName="bg-blue-600 text-white"
                                previousLabel="<"
                                nextLabel=">"
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                pageClassName="cursor-pointer  inline-block px-3  hover:bg-blue-600 hover:text-white rounded-full"
                                pageLinkClassName="page-link "
                                previousClassName={` custom-previous inline-block px-2`}
                                previousLinkClassName="page-link"
                                nextClassName={` custom-next inline-block px-2`}
                                nextLinkClassName="page-link"
                                forcePage={currentPage}
                            />
                        </div>
                        <div className="mt-3 border-4 rounded-full p-2">
                            Σελίδα {currentPage + 1} από {totalPages}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
