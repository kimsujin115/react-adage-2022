import React from "react";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";

import nikeBanner from "../../asset/images/nike_banner.jpg";
import adidasBanner from "../../asset/images/adidas_banner.jpg";
import pumaBanner from "../../asset/images/puma_banner.jpg";

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

const Category = () => {
    const {index} = useParams();
    console.log(index);
    //url 라우터에 의한 전달되는 값을 추출할 수 있음
    
    const brandBanner = [nikeBanner, adidasBanner, pumaBanner];
    const brandTitle = ["Nike", "Adidas", "Puma"];
    const brandItem = [
        [nike_01, nike_02, nike_03, nike_04],
        [adidas_01, adidas_02, adidas_03, adidas_04],
        [puma_01, puma_02, puma_03, puma_04],
    ];
    const brandTxt = [
        "Just Do it - Nike",
        "Impossible is Nothing - Adidas",
        "ForeverFaster - Puma",
    ];

    return (
        <>
            <section className="cate_banner" style={{backgroundImage:`url(${brandBanner[index]})`}}></section>
            <section className="cate_content_space">
                <div className="wrap">
                    <div className="title">
                        <h3 className="">{brandTitle[index]}</h3>
                    </div>

                    <div className="cont">
                        {brandItem[index].map((v,i) => (
                            <div className="cont-img" key={i}>
                                <Link to={"/detail/" + index + "-" + i}>
                                    <img src={v} alt={brandTitle[index]}/>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <p className="presentiveTxt">{brandTxt[index]}</p>
                </div>
            </section>
        </>
    )
}

export default Category;