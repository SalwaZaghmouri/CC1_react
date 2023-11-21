import './paginationCss.css';
import { useState,useEffect} from 'react' ;
import axios from 'axios' ;




function Pagination() {
  const [dataArray, setDataArray] = useState ([]) ;

const [page, setPage] = useState (1) ;
 
useEffect (() => {
 axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
 .then ( (response) =>
 {setDataArray (response .data) })
}, [page])

const next = () => {
  setPage (page + 1)
}
const prev = () => {
if (page > 1) {
  setPage (page - 1)
  }
}
return (

<div >


   <ul>
       {dataArray.map((el,id)=>( <li>{el.title}</li>))}
   </ul>
   <button className='b1' onClick={prev}> Previous</button>
   <button className='b2' onClick={next}> Next</button>
   </div>
)
}

export default Pagination ;

