import React from "react";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";

const Category = () => {
    const {index} = useParams();
    console.log(index);

    const brandTitle = ["Nike", "Adidas", "Puma"];
    return (
        <>
            <section className="cate_banner"></section>
            <section className="cate_content_space">
                <div className="wrap">
                    <h3 className="">{brandTitle[index]}</h3>
                </div>
                <div className="cont">
                    <div className="cont-img">
                        <Link to="/detail">
                            <img src="" alt=""/>
                        </Link>
                    </div>

                </div>
                <p className="presentiveTxt">각 브랜드 대표 문구</p>
            </section>
        </>
    )
}

export default Category;