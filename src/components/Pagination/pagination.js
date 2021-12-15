import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);
  let updateDimension = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  return (
    <>
      <style jsx>
        {`
          @media (max-width: 786px) {
            .next,
            .prev {
              display: block;
            }
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-primary next"
        nextClassName="btn btn-primary prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
      />
    </>
  );
};
export default Pagination;
