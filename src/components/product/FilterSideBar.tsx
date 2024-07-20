import React from 'react'
//filter component for sidebar
function FilterSideBar() {
  return (
    <div className="col-lg-3 order-2 order-lg-1">
        <aside className="sidebar-wrapper">
            <div className="sidebar-single">
                <h3 className="sidebar-title">categories</h3>
                <div className="sidebar-body">
                    <ul className="shop-categories">
                        <li><a href="#">Jasmine <span>10</span></a></li>
                        <li><a href="#">Rose <span>5</span></a></li>
                        <li><a href="#">Orchid <span>8</span></a></li>
                        <li><a href="#">Blossom <span>4</span></a></li>
                        <li><a href="#">Hyacinth <span>5</span></a></li>
                        <li><a href="#">Bouquet <span>2</span></a></li>
                    </ul>
                </div>
            </div>

            <div className="sidebar-single">
                <h3 className="sidebar-title">price</h3>
                <div className="sidebar-body">
                    <div className="price-range-wrap">
                        <input type="range" className="form-range" id="customRange1" />
                        <div className="range-slider">
                            <form action="#" className="d-flex align-items-center justify-content-between">
                                <div className="price-input">
                                    <label htmlFor="amount">Price: </label>
                                    <input type="text" id="amount" />
                                </div>
                                <button className="filter-btn">filter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar-single">
                <h3 className="sidebar-title">brand</h3>
                <div className="sidebar-body">
                    <ul className="checkbox-container categories-list">
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                <label className="custom-control-label" htmlFor="customCheck2">Studio
                                    (3)</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                <label className="custom-control-label" htmlFor="customCheck3">Hastech
                                    (4)</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                <label className="custom-control-label" htmlFor="customCheck4">Quickiin
                                    (15)</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Graphic corner
                                    (10)</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                <label className="custom-control-label" htmlFor="customCheck5">devItems
                                    (12)</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="sidebar-single">
                <h3 className="sidebar-title">color</h3>
                <div className="sidebar-body">
                    <ul className="checkbox-container categories-list">
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck12" />
                                <label className="custom-control-label" htmlFor="customCheck12">black
                                    (20)</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck13" />
                                <label className="custom-control-label" htmlFor="customCheck13">red (6)</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck14"/>
                                <label className="custom-control-label" htmlFor="customCheck14">blue (8)</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck11" />
                                <label className="custom-control-label" htmlFor="customCheck11">green
                                    (5)</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck15" />
                                <label className="custom-control-label" htmlFor="customCheck15">pink (4)</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="sidebar-single">
                <h3 className="sidebar-title">size</h3>
                <div className="sidebar-body">
                    <ul className="checkbox-container categories-list">
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck111" />
                                <label className="custom-control-label" htmlFor="customCheck111">S (4)</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck222" />
                                <label className="custom-control-label" htmlFor="customCheck222">M (5)</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck333" />
                                <label className="custom-control-label" htmlFor="customCheck333">L (7)</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck444" />
                                <label className="custom-control-label" htmlFor="customCheck444">XL (3)</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    </div>
  );
}

export default FilterSideBar