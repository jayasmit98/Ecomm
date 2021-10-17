import React from "react";
import TopMenu from '../TopMenu';
import "./_header.scss"
const Header = () => (
    <>
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-2">
            <div className="header__logo">
              <font>E-comm</font>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 aligncent">
              <div className="input-group">
                <div className="input-group-prepend">
                  <select name="" id="" className="form-control btn btn-success dropdown-toggle">
                    <option value="">All</option>
                    <option value="">Men</option>
                    <option value="">Women</option>
                    <option value="">Kids</option>
                  </select>
                </div>
                <input type="text" className="form-control" />
                  <div className="input-group-append">
                    <button className="btn  btn-success">
                    <i className="fa fa-search"></i>
                    </button>
                </div>
              </div>
          
          
          </div>
          <div className="col-lg-3 alignright">
            <div className="header__right">
              <div className="auth">
                <a href="#">Sign-In</a>
                <a href="#">Sign-Up</a>
              </div>
              <ul className="widget">
                <li><i className="fa fa-heart"></i></li>
                <li><i className="fa fa-shopping-cart"></i></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </header>
    <TopMenu/>
    </>
)

export default Header;