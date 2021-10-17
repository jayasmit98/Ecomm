import React from 'react';
import '../TopMenu/_topmenu.scss';

const menu=["Home","Men","Women","Kids","Bestseller"];

const TopMenu = () => (
    <>
        <header className="menuHeader">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <nav className="menu">
                            <ul>
                                {menu.map((value,index)=>(
                                    <li key={index}>
                                    <a href="#">{value}</a>
                                </li>
                                ))}                                
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </>
)

export default TopMenu;