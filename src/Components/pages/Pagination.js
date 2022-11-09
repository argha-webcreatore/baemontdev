
import React, { useState, useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaThList, FaTh, FaSearchPlus, FaRegHeart, FaHeart, FaTimes, FaGripLines, FaRedoAlt } from "react-icons/fa"
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import './Setting.css'

import axios from 'axios';


//function Pagination(nPages, currentPage, setCurrentPage) {
const Pagination = ({nPages, currentPage, setCurrentPage}, props) => {
    
    const nextPage = () => {
        if(currentPage !== nPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    const prevPage = () => {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
        
return (
    <>
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <span href="#" className="page-link" onClick={prevPage}>Previous</span>
                </li>
                {props.pageNumbers?.map(pgNumber => {
                    return (<li key={pgNumber} className={`page-item ${currentPage == pgNumber ? 'active' : ''}`}>
                        <span href="" className="page-link" onClick={setCurrentPage(pgNumber)}>{pgNumber}</span>
                    </li>)
                })}
                <li className="page-item">
                    <span href="" className="page-link" onClick={nextPage}>Next</span>
                </li>
            </ul>
        </nav>
    </>
    )
}
export default Pagination