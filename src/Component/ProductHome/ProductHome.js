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
    console.log(product);
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductHome