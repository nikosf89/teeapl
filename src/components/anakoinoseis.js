import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
// import closed from "./closed.jpg";
import red from '../images/redMark.jpg'
import axios from "axios";


function App() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const itemsPerPage = 10;

    const fetchAnnouncements = async () => {
        const response = await axios.get("http://localhost:1337/api/anakoinoseis");
        setData(response.data.data);
        const calculatedTotalPages = Math.ceil(response.data.data.length / itemsPerPage);
        setTotalPages(calculatedTotalPages);
        console.log("My data is ", data);
    };

    useEffect(() => {
        fetchAnnouncements(); 
    }, []);

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
            <div className="mx-auto container" style={{ maxWidth: "80%" }}>
                <div className="text-center pt-20">
                    <h1 className="text-3xl text-blue-600 font-bold">Ανακοινώσεις</h1>
                </div>
                <div className={`flex justify-center pt-4`}>
                    {/* ReactPaginate component */}
                    <ReactPaginate 
                        pageCount={totalPages}
                        pageRangeDisplayed={5}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
                    {subset.map((card) => (
                        <div
                            key={card.id}
                            style={{ backgroundColor: "rgb(37,63,91)" }}
                            className="block mt-5 ">
                            <div className="flex justify-center align-middle mt-5">
                                <img
                                    className="rounded-t-lg transition ease-in-out hover:scale-105 duration-1000"
                                    src={red}
                                    alt=""
                                    style={{ width: "90%" }}
                                />
                            </div>
                            <div className="p-6 ml-5">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-white">
                                    {card.attributes.Title}
                                </h5>
                                <p>
                                    <small className=" text-base text-white">
                                        {card.attributes.Date}
                                    </small>
                                </p>
                                <button
                                    type="button"
                                    className="bg-white inline-block rounded  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal mt-3"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Συνεχιστε την αναγνωση
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="py-4">
                <div className={`flex justify-center pt-6`}>
                    {/* ReactPaginate component */}
                    <ReactPaginate 
                        pageCount={totalPages}
                        pageRangeDisplayed={5}
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
                </div>
            </div>
        </div>
    );
}

export default App;
