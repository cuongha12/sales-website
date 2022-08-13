import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Detail/detail.css'
import { Image } from 'antd';
import { Rate } from 'antd';
const Detail = () => {
    const { item } = useParams()
    const [product, setProduct] = useState([])
    const Item = async () => {
        return await axios.get(`http://localhost:3000/product/${item}`)
            .then(res => setProduct(res.data))
    }
    useEffect(() => {
        Item()
    }, [])
    return (
        <div style={{ background: '#f5f6f7' }}>
            <section className='inner-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='details-gallery'>
                                <div className="details-label-group">
                                    <label className={product.sale == true ? "details-label off" : "sale"}>-{product.sales}%
                                    </label>
                                </div>
                                <div className='details-preview'>
                                    <a>
                                        <Image src={product?.img} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='details-content'>
                                <h3 className="details-name">
                                    <a href="">{product.title}</a>
                                </h3>
                                <div className="details-meta">
                                    <p>SKU:
                                        <span>1234567</span>
                                    </p>
                                    <p>BRAND:
                                        <a href="">radhuni</a>
                                    </p>
                                </div>
                                <div className='details-rating'>
                                    <Rate disabled defaultValue={5} />
                                </div>
                                <h3 className="details-price">
                                    <del className={product.sale ? "" : "sale"}>{product.prices}đ</del>
                                    <span >
                                        {product.price}đ
                                    </span>
                                </h3>
                                <div className='product-action'>
                                    <button className='action-minus'>
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                    <input className="action-input" title="Quantity Number" type="text" name="quantity" value={1} />
                                    <button className="action-plus" title="Quantity Plus" >
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div className='details-list-group'>
                                    <label className="details-list-title">tags:</label>
                                    <ul className="details-tag-list">
                                        <li>
                                            <a >organic</a>
                                        </li>
                                        <li>
                                            <a >fruits</a>
                                        </li>
                                        <li>
                                            <a>chilis</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='details-list-group'>
                                    <label className="details-list-title">Share:</label>
                                    <ul className='details-share-list'>
                                        <li>
                                            <a className="icofont-facebook" title="Facebook">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="icofont-twitter" title="Twitter">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="icofont-linkedin" title="Linkedin">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="icofont-instagram" title="Instagram">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='details-add-group'>
                                    <button className="product-add" title="Add to Cart" >
                                        <i className="fa-solid fa-basket-shopping"></i>
                                        <span>add to cart</span>
                                    </button>
                                </div>
                                <div className="details-action-group">
                                    <a className="details-wish wish" href="#" title="Add Your Wishlist">
                                        <i className="fa-solid fa-heart"></i>
                                        <span>add to wish</span>
                                    </a>
                                    <a className="details-compare" href="compare.html" title="Compare This Item">
                                        <i class="fa-solid fa-shuffle"></i>
                                        <span>Compare This</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Detail