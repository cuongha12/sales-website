import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../Search/Search.css"
const Searchs = () => {
    let { id } = useParams()
    const [product, setProduct] = useState([])
    const Product = async () => {
        return await axios.get('http://localhost:3000/product')
            .then(res => setProduct(res.data))
    }
    useEffect(() => {
        Product()
    }, [])
   
    return (
        <div>
            <div className="wrap-breadcrumb">
                <div className="clearfix container">
                    <div className="row main-header">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                            <ol className="breadcrumb breadcrumb-arrows">
                                <li><a href='/'>Trang chủ</a></li>
                                <li><a >Tìm kiếm</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <section className='clearfix container'>
                <div className='row'>
                    <div className='col-md-12 col-xs-12 col-sm-12 col-lg-12'>
                        <span className="header-search header-page clearfix">
                            <h1>Tìm kiếm</h1>
                        </span>
                        <div className="content-page" id="search">
                            <div className="col-md-12  col-xs-12 col-sm-12 col-lg-12">
                                <span className="subtext">
                                    Kết quả tìm kiếm cho  <strong>"{id}"</strong>.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='col-md-12 col-sm-12 col-xs-12 content-product-list col-lg-12 search-product'>
                <div className='row product-list'>
                    {
                        product.filter((x) =>{return x.category === "shop" && x.title.toLowerCase().includes(id.toLowerCase())}).map((e) => (
                            <div className='col-md-4  col-sm-6 col-xs-12 pro-loop col-lg-3' key={e.id}>
                                <div className='product-block product-resize fixheight'>
                                    <div className='product-img image-resize view view-third'>
                                        <div className={e.sale ? "product-sale" : 'sale'}>
                                            <span><label className="sale-lb">- </label>{e.sales}%</span>
                                        </div>
                                        <a>
                                            <img className='class="first-image  has-img"' src={e.image} />
                                            <img className="second-image" src={e.img}></img>
                                        </a>
                                        <div className="actionss">
                                            <div className="btn-cart-products">
                                                <a >
                                                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                            <div className="view-details">
                                                <a href="/products/xuong-ong-heo-vissan" className="view-detail">
                                                    <span><i className="fa fa-clone"> </i></span>
                                                </a>
                                            </div>
                                            <div className="btn-quickview-products">
                                                <a className="quickview" ><i className="fa fa-eye"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-detail clearfix">
                                        <h3 className="pro-name"><a title="Xương ống heo Vissan">{e.title} </a></h3>
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
            </div>
        </div>
    )
}

export default Searchs