import React from 'react'

function SelectDeliveryAddress() {
  return (
    <main>
         {/*-- breadcrumb area start --*/}
         <div className="breadcrumb-area common-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb-wrap">
                            <nav aria-label="breadcrumb">
                                <h1>Choose Delivery Address</h1>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="fa fa-home"></i></a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Choose Delivery Address</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*-- breadcrumb area end --*/}
        
    </main>
  )
}

export default SelectDeliveryAddress