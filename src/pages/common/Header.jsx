import React from "react";
import {Link} from 'react-router-dom';
import logoImg from '../../asset/images/logo.png';

const Header = () => {
    const menuArr = [
        ["nike", "/nike"],
        ["adidas", "/adidas"],
        ["puma", "/puma"],
    ];

    return (
        <>
            <header className="header-space h-60">
                <div className="wrap-1 flex-style-3 h-100-per">
                    <div className="logo">
                        <Link to="/">
                            <img className="d-block h-40" src={logoImg} />
                        </Link>
                    </div>
                    <nav>
                        <ul className="flex-style-2 col-gap-20">
                            {menuArr.map( (v,i) => (
                                <li key={i}>
                                    <Link className="d-block text-uppercase" to={"/category/"+  i}>
                                        {v[0]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header> 
        </>
    );
}

export default Header;