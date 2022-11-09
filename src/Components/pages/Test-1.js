import React, { useState, useEffect } from 'react'
import './TestPopStyle.css'
import { FaTimes, FaGripLines, FaRedoAlt  } from "react-icons/fa"
import { FiMoreHorizontal } from "react-icons/fi"
import { height } from '@mui/system'



import './Setting.css'
import Slider, { Range } from 'rc-slider/lib/Slider'
const style = { margin: "40px 8px" };

const marks = {
    0: {
        style: {
            transform: "translateX(-3px)",
        },
        label: "Excellent"
    },
    33.333333: 'Very Good',
    66.6667: 'Good',
    100: {
        style: {
            right: 0,
            left: "unset",
            transform: "translateX(3px)",
        },
        label: "Fair"
    },
  };

var angle = 0;
var half_of_height = (window.innerHeight / 2);
var pop_up = document.querySelector('.pop-up');

// $(pop_up).draggable();

function btn_click()
{
    if(window.matchMedia("(max-width: 767px)").matches)
    {
        var postModalBody = document.querySelector('.popModal-body');
        //*******************//
        var pop_up = document.querySelector('.pop-up');
        pop_up.classList.remove('pop-up-top-100');
        pop_up.classList.add('pop-up-bottom-0');
    }
    else
    {
        alert("your device width to high");
    }
}

function close_popup() {
    var pop_up = document.querySelector('.pop-up');
    pop_up.removeAttribute('style');
    pop_up.removeAttribute('data-x');
    pop_up.removeAttribute('data-y');
    pop_up.classList.add('pop-up-top-100');
    pop_up.classList.remove('pop-up-bottom-0');
}

function Test() {
  let [showPop, setPop] = useState(0);
  return (
    <>
    <div className="container my-5">
        <div className="pop-up pop-up-top-100">
            <div className="popHead d-flex justify-content-between align-items-center">
                <button className="btn close-pop-up" onClick={close_popup}><FaTimes /> Close</button>
                <button className="btn"><FaGripLines /></button>
                <button className="btn"><FaRedoAlt /> Reset</button>
            </div>
            <div className="popModal-body">
                { (showPop == 1) ? 
                    <div className="price-range w-100">
                        <div style={style}>
                            <Slider
                                range
                                allowCross={true}
                                step={33.333333}
                                pushable={33.333333}
                                marks={marks}
                                reverse={false}
                                defaultValue={[0, 100]}
                                draggableTrack
                                //onChange={log}
                            />
                        </div>
                    </div>
                    :
                    (showPop == 2) ? 
                    "2" 
                    : 
                    "3"
                }
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <h3>Hello</h3>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <button className="btn btn-dark btn-open-drawer" onClick={() => 
                            {
                                setPop(1);
                                btn_click();
                            }
                        }>Go</button>
                    </li>
                    <li className="list-inline-item">
                        <button className="btn btn-dark first_button" onClick={() => 
                            {
                                setPop(2);
                                btn_click();
                            }
                        }>Go</button>
                    </li>
                    <li className="list-inline-item">
                        <button className="btn btn-dark second_button" onClick={() => 
                            {
                                setPop(3);
                                btn_click();
                            }
                        }>Go</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Test
