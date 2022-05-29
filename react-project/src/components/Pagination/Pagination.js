import React ,{useState,useEffect} from 'react';
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber , setPageNumber}) => {
   let [width,setwidth] = useState(window.innerWidth);
    let updateDimension = ()=>{
        setwidth(window.innerWidth);
    }

   useEffect(() =>{
       window.addEventListener("resize",updateDimension);
       return () => window.removeEventListener("resize",updateDimension)
   },[]
   );
   
   // console.log(info.pages);
    return  <ReactPaginate 
    className="pagination justify-content-center gap-4 my-4"
    forcePage={pageNumber===1? 0 : pageNumber - 1 }
    nextLabel="Next "
    previousLabel="Prev"
    nextclassNameName="btn btn-primary "
    previousclassNameName="btn btn-primary"
    pageclassNameName="page-item"
    pageLinkclassNameName="page-link"
    activeclassNameName="active"

    onPageChange={(data)=>{
        setPageNumber(data.selected +1);
    }}
    pageCount={info?.pages} />;
       
   
};

export default Pagination
