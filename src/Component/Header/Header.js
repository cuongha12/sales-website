import React from 'react'
import "../Header/Header.component.css"
const Header = () => {
    return (
        <header className='header bkg hidden-sm hidden-xs'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-7 col-sm-12 col-xs-12 '>
                        <aside className='top-info'>
                            {/* <div className='cart-info hidden-xs'>
                                <a className="cart-link" href="/cart">
                                    <span className="icon-cart">
                                    </span>
                                    <div className="cart-number">
                                        0
                                    </div>
                                </a>
                            </div> */}
                            <div className="navholder">
                                <nav id="subnav">
                                    <ul>
                                        <li>
                                            <a href="#"><i className="fa fa-phone" aria-hidden="true"></i>1900.636.099</a>
                                        </li>
                                        <li><a className="reg" href="/account/register" title="Đăng ký">ĐĂNG KÝ</a></li>
                                        <li><a className="log" href="/account/login" title="Đăng nhập">Đăng nhập</a></li>
                                    </ul>
                                </nav>
                                <div className="header_line"><p>Miễn phí vận chuyển<span className="mar-l5">ĐƠN HÀNG TRÊN 900K</span></p></div>
                            </div>
                        </aside>
                    </div>

                    <div className='col-lg-4 col-md-5 col-sm-12 col-xs-12 logo'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-7 col-xs-7'>
                                <h1>
                                    <a href="">
                                        <img src="//hstatic.net/349/1000150349/1000203344/logo.png?v=28" alt="default-fresh-food" className="img-responsive logoimg" />
                                    </a>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                        <div className='row justify-content-around'>
                            <div className="user d-flex align-items-ct">
                                <div className="user-logo">
                                    <img src="https://mcdn.nhanh.vn/store/18131/ps/20171117/22228659_1958158637798279_6481759436594791816_n_552x640.jpg" alt="" />
                                </div>
                                <p className="user-name ml-2">Cuong</p>
                                <span className="caret"></span>
                                <ul>
                                    <li >
                                        <a href="">Đăng nhập</a>
                                    </li>
                                    <li >
                                        <a href="">Đăng ký</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='cart-info hidden-xs'>
                                <a className="cart-link" href="/cart">
                                    <span className="icon-cart">
                                    </span>
                                    <div className="cart-number">
                                        0
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header