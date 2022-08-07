import React, { useLayoutEffect, useState } from 'react'
import "../Header/Header.component.css"

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    useLayoutEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 120)

        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <>
            <header className='header bkg hidden-sm hidden-xs none'>
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
            {/* <nav className='navbar-main navbar navbar-default cl-pri'>
                <div className='container nav-wrapper check_nav responsive-menu'>
                    <div className='row'>
                        <div className='navbar-header'>
                            <div className='mobile-menu-icon-wrapper'>
                                <div className='menu-logo'>
                                    <h1 className="logo logo-mobile">
                                        <a >
                                            <img src="//hstatic.net/349/1000150349/1000203344/logo.png?v=28" alt="default-fresh-food" className="img-responsive logoimg" />
                                        </a>
                                    </h1>
                                    <div className="nav-login">
                                        <a className="cart " title="Tài khoản">
                                            <img className="avatar" src="https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg" />
                                        </a>
                                    </div>
                                    <div className="menu-btn click-menu-mobile ">
                                        <a href="#menu-mobile" class="navbar-toggle">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}
            <div className={ scrolled ? ' stickys nones ' : 'headers nones'}>
                <div className={'container'}>
                    <div className='row top-header'>
                        <div className='col-md-12 col-sm-12 col-xs-12 evo-header-mobile'>
                            <button type="button" className="evo-flexitem evo-flexitem-fill navbar-toggle collapsed visible-sm visible-xs" id="trigger-mobile">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="logo evo-flexitem evo-flexitem-fill">
                                <a href="/" class="logo-wrapper" >
                                    <img src="https://hstatic.net/349/1000150349/1000203344/logo.png?v=28" className="img-responsive center-block" />
                                </a>
                            </div>
                            <div className="evo-flexitem evo-flexitem-fill visible-sm visible-xs">
                                <div className="avatar-mobile">
                                    <a title="Tài khoản">
                                        <img className="avatar" src="https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg" />
                                    </a>
                                    <ul>
                                        <li >
                                            <a >Đăng nhập</a>
                                        </li>
                                        <li >
                                            <a >Đăng ký</a>
                                        </li>
                                    </ul>
                                </div>
                                <a className="cart ">
                                    <i className="fa fa-cart-arrow-down"></i>
                                    <span className="count_item_pr">0</span>
                                </a >
                                <a className="site-header-search cart" rel="nofollow" title="Tìm kiếm">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header