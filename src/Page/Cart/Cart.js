import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, updateCart } from '../../Redux/actions/cart'

import '../Cart/Cart.css'
const Cart = () => {
    const dispatch = useDispatch()
    const cartProduct = useSelector(e => e.cart)
    const upDate = (e, data) => {
        e.preventDefault()
        if (e.target.className === "action-plus") {
            var item = {
                id: data.id,
                quantity: data.quantity + 1
            }
            dispatch(updateCart(item))
        } else if (data.quantity === 1) {
            const loco = JSON.parse(localStorage.getItem('cart'))
            const deleteData = loco.filter(e => e.id !== data.id)
            dispatch(updateCart(deleteData))
        }
        else {
            var item = {
                id: data.id,
                quantity: data.quantity - 1
            }
            dispatch(updateCart(item))
        }
    }
    const hanDele = (id) => {
        dispatch(removeFromCart(id))
    }
    return (
        <div>
            <div className="wrap-breadcrumb">
                <div className="clearfix container">
                    <div className="row main-header">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                            <ol className="breadcrumb breadcrumb-arrows">
                                <li><a href='/'>Trang chủ</a></li>
                                <li><a >Giỏ hàng</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <section className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className='row'>
                            <div className='col-md-12 col-sm-12 col-xs-12'>
                                <span className="header-page clearfix">
                                    <h1>Giỏ hàng</h1>
                                </span>
                                <form >
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="image">&nbsp;</th>
                                                <th className="item">Tên sản phẩm</th>
                                                <th className="qty">Số lượng</th>
                                                <th className="price">Giá tiền</th>
                                                <th className="remove">&nbsp;</th>
                                            </tr>
                                        </thead>
                                        {
                                            cartProduct.cartItems.map((e) => (
                                                <tbody key={e.id}>
                                                    <tr>
                                                        <td className="image">
                                                            <div className="product_image">
                                                                <a>
                                                                    <img src={e.img} alt="Bắp bò Úc giá tay" />
                                                                </a>
                                                            </div>
                                                        </td>
                                                        <td className="item">
                                                            <a>
                                                                <strong>{e.name}</strong>
                                                            </a>
                                                        </td>
                                                        <td className="qty">
                                                            <button className='action-minus' onClick={(x) => upDate(x, e)}>
                                                                <i className="fa-solid fa-minus"></i>
                                                            </button>
                                                            <input className="action-input" title="Quantity Number" type="text" name="quantity" value={`${e.quantity}`} onChange={() => console.log(1)} />
                                                            <button className="action-plus" title="Quantity Plus" onClick={(x) => upDate(x, e)}>
                                                                <i className="fa-solid fa-plus"></i>
                                                            </button>
                                                        </td>
                                                        <td className="price">{(e.price) * (e.quantity)}₫</td>
                                                        <td className="remove">
                                                            <a className="cart" onClick={() => hanDele(e)}>
                                                                <i className="fa-solid fa-xmark"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            ))
                                        }
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Cart