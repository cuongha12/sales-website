import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../ProductHome/ProductHome.css'
const ProductHome = () => {
    const [product, setProduct] = useState([])
    const Product = async () => {
        return await axios.get('http://localhost:3000/product')
            .then(res => setProduct(res.data))
    }
    useEffect(() => {
        Product()
    }, [])

    return (
        <section className='clearfix container'>
            <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                    <div className='main-content'>
                        <div className='product-list clearfix'>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <aside className='styled_header  use_icon '>
                                        <h2>What hot</h2>
                                        <h3>Sản phẩm nổi bật</h3>
                                        <span className="icon">
                                            <img src="//hstatic.net/349/1000150349/1000203344/icon_featured.png?v=28" alt="" />
                                        </span>
                                    </aside>
                                </div>
                            </div>
                            <div className='row content-product-list products-resize'>
                                {
                                    product.filter((e) => e.status === "outstanding").map((e) => (
                                        <div key={e.id} className="col-md-3 col-sm-6 col-xs-6 pro-loop" >
                                            <div className='product-block product-resize fixheight' style={{ height: '336px' }}>
                                                <div className='product-img image-resize view view-third' style={{ height: '261px' }}>
                                                    <div className={e.sale ? "product-sale" : 'sale'}>
                                                        <span><label className="sale-lb">- </label>{e.sales}%</span>
                                                    </div>
                                                    <a>
                                                        <img src={e.image} alt={e.title} className="first-image  has-img" />
                                                        <img src={e.img} alt={e.title} className="second-image" />
                                                    </a>
                                                    <div className='actionss'>
                                                        <div className='btn-cart-products'>
                                                            <a>
                                                                <i className="fa fa-shopping-bag"></i>
                                                            </a>
                                                        </div>
                                                        <div className='view-details'>
                                                            <a className='view-detail'>
                                                                <span><i className="fa fa-clone"></i></span>
                                                            </a>
                                                        </div>
                                                        <div className="btn-quickview-products">
                                                            <a className="quickview" ><i className="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='product-detail clearfix'>
                                                    <h3 className="pro-name">
                                                        <a >{e.title} </a>
                                                    </h3>
                                                    <div className="pro-prices">
                                                        <p className="pro-price">{e.price}₫</p>
                                                        <p className="pro-price-del text-left">
                                                            <del className={e.sale ? "compare-price" : 'sale'}>{e.prices}₫</del>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='row'>
                                <div className='col-lg-12 col-sm-12 col-xs-12  pull-center center'>
                                    <a className="btn btn-readmore" >Xem thêm</a>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12 col-sm-12 col-xs-12'>
                                    <div className='animation fade-in home-banner-1'>
                                        <div className='banner-home-1'>
                                            <div className="divcontent">
                                                <span className="ad_banner_1">Miễn phí vận chuyển
                                                    <strong className="ad_banner_2">Với tất cả đơn hàng trên 500k</strong>
                                                </span>
                                                <span className="ad_banner_desc">
                                                    Miễn phí 2 ngày vận chuyển với đơn hàng trên 500k trừ trực tiếp khi thanh toán
                                                </span>
                                            </div>
                                            <div className="divstyle" ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <aside className='styled_header  use_icon '>
                                        <h3>Sản phẩm nổi bật</h3>
                                        <span className="icon">
                                            <img src="https://hstatic.net/349/1000150349/1000203344/icon_sale.png?v=28" alt="" />
                                        </span>
                                    </aside>
                                </div>
                            </div>
                            <div className='row content-product-list products-resize'>
                                {
                                    product.filter((e) => e.status === "new").map((e) => (
                                        <div key={e.id} className="col-md-3 col-sm-6 col-xs-6 pro-loop" >
                                            <div className='product-block product-resize fixheight' style={{ height: '336px' }}>
                                                <div className='product-img image-resize view view-third' style={{ height: '261px' }}>
                                                    <div className={e.sale ? "product-sale" : 'sale'}>
                                                        <span><label className="sale-lb">- </label>{e.sales}%</span>
                                                    </div>
                                                    <a>
                                                        <img src={e.image} alt={e.title} className="first-image  has-img" />
                                                        <img src={e.img} alt={e.title} className="second-image" />
                                                    </a>
                                                    <div className='actionss'>
                                                        <div className='btn-cart-products'>
                                                            <a>
                                                                <i className="fa fa-shopping-bag"></i>
                                                            </a>
                                                        </div>
                                                        <div className='view-details'>
                                                            <a className='view-detail'>
                                                                <span><i className="fa fa-clone"></i></span>
                                                            </a>
                                                        </div>
                                                        <div className="btn-quickview-products">
                                                            <a className="quickview" ><i className="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='product-detail clearfix'>
                                                    <h3 className="pro-name">
                                                        <a >{e.title} </a>
                                                    </h3>
                                                    <div className="pro-prices">
                                                        <p className="pro-price">{e.price}₫</p>
                                                        <p className="pro-price-del text-left">
                                                            <del className={e.sale ? "compare-price" : 'sale'}>{e.prices}₫</del>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='row'>
                                <div className='col-lg-12 col-sm-12 col-xs-12  pull-center center'>
                                    <a className="btn btn-readmore" >Xem thêm</a>
                                </div>
                            </div>
                            <div className='banner-bottom'>
                                <div className='row'>
                                    {
                                        product.filter((e) => e.status === "banner").map((e) => (
                                            <div className='col-xs-12 col-sm-6 home-category-item-2' key={e.id}>
                                                <div className='block-home-category'>
                                                    <a>
                                                        <img src={e.image} alt={e.title}/>
                                                    </a>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductHome