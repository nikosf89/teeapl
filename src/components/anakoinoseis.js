import React, { useState, useEffect } from 'react';
import { FcCalendar } from 'react-icons/fc';
import { Link, useNavigate, useParams} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import PDF from "../images/icon.png";
import ReactMarkdown from 'react-markdown';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const { page }  = useParams(); // from react-router, this is the `:page` parameter defined on the route. 
  const navigate = useNavigate();

 

  const itemsPerPage = 10;

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/anakoinoseis');
      setData(response.data.data);
      const calculatedTotalPages = Math.ceil(response.data.data.length / itemsPerPage);
      setTotalPages(calculatedTotalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  useEffect(() => {
    // Update your component's state or fetch data based on the current page
    // For example, you can update the currentPage state here
    setCurrentPage(parseInt(page) - 1); // Subtract 1 to match the array index
  }, [page]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);

  

  

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    navigate(`/teaapl/anakoinoseis/${selected+1}`)
    smoothScrollToTop();
  };

  

  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <div className="bg-gray-100 min-h-screen pt-4">
      <div className="mx-auto container" style={{ maxWidth: '80%' }}>
        <div className="text-center pt-20">
          <h1 style={{ color: '#0582ca' }} className="text-3xl font-bold ">
            ΑΝΑΚΟΙΝΩΣΕΙΣ
          </h1>
        </div>
        {loading ? (
          <div className="text-center pt-4">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <div className={`flex justify-center pt-4`}>
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
                pageClassName="cursor-pointer inline-block px-3 opacity-50 hover:bg-blue-600 hover:text-white rounded-full"
                pageLinkClassName="page-link"
                previousClassName={`inline-block px-2`}
                previousLinkClassName="page-link"
                nextClassName={`inline-block px-2`}
                nextLinkClassName="page-link"
                forcePage={currentPage}
              />
            </div>
            <div className="container mt-5 mx-auto max-w-3xl">
              {subset.map((card) => (
                <div
                  className="mb-5 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                  key={card.id}
                >
                  <div className="p-6">
                    <h5 className="mb-2 lg:text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                      {card.attributes.Title}
                    </h5>

                    <div className="mb-4 text-base text-left text-neutral-600 dark:text-neutral-200">
                      {card && card.attributes && (
                        <ReactMarkdown
                          components={{
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
                          }}
                        >
                          {card.attributes.summary}
                        </ReactMarkdown>
                      )}
                    </div>

                    <div>
                      {card && card.attributes && card.attributes.Title && card.attributes.announcement && card.attributes.has_announcement && (
                        <Link to={`/announcement/${card.id}`}
                        state={{ announcementData: { id: card.id, title: card.attributes.Title, announcement: card.attributes.announcement },
                        }}>
                          <button  className=" text-blue-600 hover:text-blue-700 font-bold">
                            Περισσότερα
                          </button>
                        </Link>
                        
                        )
                      }
                    </div>
                  </div>
                  <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                    <span className="flex justify-center items-center">
                      <FcCalendar className="mr-1" />
                      <span>
                        {card.attributes.date.replace('Δημιουργήθηκε :', '').trim()}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="py-4">
              <div className={`flex justify-center pt-6`}>
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
                  pageClassName="cursor-pointer inline-block px-3 opacity-50 hover:bg-blue-600 hover:text-white rounded-full"
                  pageLinkClassName="page-link"
                  previousClassName={`inline-block px-2`}
                  previousLinkClassName="page-link"
                  nextClassName={`inline-block px-2`}
                  nextLinkClassName="page-link"
                  forcePage={currentPage}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
