import React, { useState } from 'react'
import "../Shop/Shop.css"
const SHop = () => {
  const [show, setShow] = useState(false)
  const [menu, setMenu] = useState(false)
  const [menus, setMenus] = useState(false)
  const mok = [
    {
      id: 1,
      name: 'Rau ăn củ',
      created_date: new Date(2022, 1, 23),
      other: "vegetable"
    },
    {
      id: 2,
      name: 'Rau ăn quả',
      created_date: new Date(2022, 1, 23),
      other: "vegetable"
    },
    {
      id: 3,
      name: 'Trái cây',
      created_date: new Date(2022, 1, 23),
      other: "fruit"
    },
    {
      id: 4,
      name: 'Thịt các loại',
      created_date: new Date(2022, 8, 25),
      other: "meat"
    },
    {
      id: 5,
      name: 'Hải sản',
      created_date: new Date(2022, 8, 25),
      other: "seafood"
    },
    {
      id: 6,
      name: 'Trứng',
      created_date: new Date(2022, 8, 25)
    },
    {
      id: 7,
      name: 'Thực phẩm chay',
      created_date: new Date(2022, 4, 27)
    },
    {
      id: 8,
      name: 'Bánh mì - Bánh ngọt',
      created_date: new Date(2022, 4, 27)
    },
    {
      id: 9,
      name: 'Gạo-Ngũ cốc',
      created_date: new Date(2022, 4, 27)
    },
    {
      id: 10,
      name: 'Thực phẩm ăn liền',
      created_date: new Date(2022, 4, 27)
    },
  ]
  const sortOptions = [
    {
      id: 1,
      name: "Sản phẩm nổi bật",
      title: "manual"
    },
    {
      id: 2,
      name: "Giá: Tăng dần",
      title: "price-ascending"
    },
    {
      id: 3,
      name: "Giá: Giảm dần",
      title: "price-descending"
    },
    {
      id: 4,
      name: "Tên: A-Z",
      title: "title-ascending"
    },
    {
      id: 5,
      name: "Tên: Z-A",
      title: "title-descending"
    },
    {
      id: 6,
      name: "Cũ nhất",
      title: "created-ascending"
    },
    {
      id: 7,
      name: "Mới nhất",
      title: "created-descending"
    },
    {
      id: 8,
      name: "Bán chạy nhất",
      title: "best-selling"
    },
  ]
  console.log(sortOptions);
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
                        <a className={show ? "active" : ""}>
                          <span className="lbl">Rau củ quả</span>
                          <span className="sign drop-down collapsed" onClick={() => setShow(!show)}>
                          </span>
                        </a>
                        <ul className={show ? " children in-child " : ' children '}>
                          {mok.filter(e => e.created_date.getDay() === new Date(2022, 1, 23).getDay()).map((x) => (
                            <li className="first" key={x.id}>
                              <a >
                                <span>{x.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className='item has-sub  first'>
                        <a className={menu ? "active" : ""}>
                          <span className="lbl">Thực phẩm tươi sống</span>
                          <span className="sign drop-down collapsed" onClick={() => setMenu(!menu)}>
                          </span>
                        </a>
                        <ul className={menu ? " children  in-child" : ' children '}>
                          {mok.filter(e => e.created_date.getDay() === new Date(2022, 8, 25).getDay()).map((x) => (
                            <li className="first" key={x.id}>
                              <a  >
                                <span>{x.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className='item has-sub  first'>
                        <a className={menus ? "active" : ""}>
                          <span className="lbl">Thực phẩm khô</span>
                          <span className="sign drop-down collapsed" onClick={() => setMenus(!menus)}>
                          </span>
                        </a>
                        <ul className={menus ? " children in-child  " : ' children '}>
                          {mok.filter(e => e.created_date.getDay() === new Date(2022, 4, 27).getDay()).map((x) => (
                            <li className="first" key={x.id}>
                              <a >
                                <span>{x.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
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
                  <div className="list-group_l banner-left hidden-sm hidden-xs">
                    <a >
                      <img src="//hstatic.net/349/1000150349/1000203344/left_image_ad.jpg?v=28" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='content-col  col-lg-12' >
              <div className='row'>
                <div className='main-content'>
                  <div className=' hidden-sm hidden-xs col-lg-12'>
                    <div className='sort-collection'>
                      <div className='row'>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <h1>
                            Tất cả sản phẩm
                          </h1>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                          <div className='browse-tags'>
                            <span>Sắp xếp theo:</span>
                            <span className='custom-dropdown custom-dropdown--white'>
                              <select className="sort-by custom-dropdown__select custom-dropdown__select--white">
                                {sortOptions.map((e)=>(
                                  <option key={e.id} value={e.title}>{e.name}</option>
                                ))}
                              </select>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
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