import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

import nike_01 from "../../asset/images/nike_01.jpg";
import nike_02 from "../../asset/images/nike_02.jpg";
import nike_03 from "../../asset/images/nike_03.jpg";
import nike_04 from "../../asset/images/nike_04.jpg";
import adidas_01 from "../../asset/images/adidas_01.jpg";
import adidas_02 from "../../asset/images/adidas_02.jpg";
import adidas_03 from "../../asset/images/adidas_03.jpg";
import adidas_04 from "../../asset/images/adidas_04.jpg";
import puma_01 from "../../asset/images/puma_01.jpg";
import puma_02 from "../../asset/images/puma_02.jpg";
import puma_03 from "../../asset/images/puma_03.jpg";
import puma_04 from "../../asset/images/puma_04.jpg";
import { useParams } from "react-router-dom";

const brandArr = [
    {name : "nike", path : "0"},
    {name : "adidas", path : "1"},
    {name : "puma", path : "2"},
];


const mainContext = [
    [nike_01, nike_02, nike_03, nike_04],
    [adidas_01, adidas_02, adidas_03, adidas_04],
    [puma_01, puma_02, puma_03, puma_04],
    
];

const Main = () => {
    const [selIndex, setSelIndex] = useState(0);

    useEffect(() => {
        const randIndex = Math.floor(Math.random() * 4); //0 ~ 3
        //최소값 : 0.001이라면, 0.001*4 ==> 0.004 = (Math.floor-내림) => 0
        //최대값 : 0.999이라면, 0.999*4 ==> 3.994 = (Math.floor-내림) => 3
        console.log("랜덤값 : ", randIndex);
        
        setSelIndex(randIndex);
    }, []);

    return(
        <>
            <div className="mainBg"></div>
            {brandArr.map((v,i) => (
                <section className="mainCont" key={i}>
                    <div className="wrap">
                        <div className="title flex-style-3">
                            <h3 className="text-uppercase">{v.name}</h3>
                            <Link to={"/category/"+ i}>More +</Link>
                        </div>
                        <div className="mainBrandCont">
                            <Link to={"/detail/" + i + "-" + selIndex}>
                                <img className="d-block" src={mainContext[i][selIndex]} alt="" />
                            </Link>
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}

export default Main;