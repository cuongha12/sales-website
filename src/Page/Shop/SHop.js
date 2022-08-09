import React, { useState } from 'react'
import "../Shop/Shop.css"
const SHop = () => {
  const [show,setShow] = useState(false)
  return (
    <div>
      <div className="wrap-breadcrumb">
        <div className="clearfix container">
          <div className="row main-header">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
              <ol className="breadcrumb breadcrumb-arrows">
                <li><a href='/'>Trang chủ</a></li>
                <li><a >Danh mục</a></li>
                <li ><span>Tất cả sản phẩm</span></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className='clearfix container'>
        <div className='row'>
          <div className='content-pages collection-page'>
            <div className='wrapper-sticky'>
              <div className=' col-sm-12 col-xs-12 leftsidebar-col'>
                <div className='group_sidebar'>
                  <div className='list-group navbar-inner '>
                    <div className="mega-left-title btn-navbar title-hidden-sm">
                      <h3 className="sb-title">Danh mục </h3>
                    </div>
                    <ul className='nav navs sidebar menu'>
                      <li className='item has-sub first'>
                        <a className={show? "" : "active"}>
                          <span className="lbl">Rau củ quả</span>
                          <span className="sign drop-down collapsed" onClick={()=>setShow(!show)}>
                          </span>
                        </a>
                        <ul className={show? " children  " :' children in-child'}>
                          <li className="first">
                            <a title="Rau ăn củ">
                              <span>Rau ăn củ</span>
                            </a>
                          </li>
                          <li className="">
                            <a title="Rau ăn quả">
                              <span>Rau ăn quả</span>
                            </a>
                          </li>
                          <li className="last">
                            <a  title="Trái cây">
                              <span>Trái cây</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className='item has-sub  first'>
                        <a>
                          <span className="lbl">Thực phẩm tươi sống</span>
                          <span className="sign drop-down collapsed">
                          </span>
                        </a>
                      </li>
                      <li className='item has-sub  first'>
                        <a>
                          <span className="lbl">Thực phẩm khô</span>
                          <span className="sign drop-down collapsed">
                          </span>
                        </a>
                      </li>
                      <li className='item has-sub  first'>
                        <a>
                          <span className="lbl">Thực phẩm bổ dưỡng</span>
                        </a>
                      </li>
                      <li className='item has-sub  first'>
                        <a>
                          <span className="lbl">Thực phẩm chế biến</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SHop