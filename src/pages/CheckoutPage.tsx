import React from 'react'

function CheckoutPage() {
  return (
    <>
        {/*-- breadcrumb area start --*/}
        <div className="breadcrumb-area common-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb-wrap">
                            <nav aria-label="breadcrumb">
                                <h1>checkout</h1>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="fa fa-home"></i></a></li>
                                    <li className="breadcrumb-item active" aria-current="page">checkout</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*-- breadcrumb area end --*/}

        {/*-- checkout main wrapper start --*/}
        <div className="checkout-page-wrapper pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/*-- Checkout Login Coupon Accordion Start --*/}
                        {/*-- Checkout Login Coupon Accordion End --*/}
                    </div>
                </div>
                <div className="row">
                    {/*-- Checkout Billing Details --*/}
                    <div className="col-lg-6">
                      {/*-- Order Payment Method --*/}
                      <div className="order-payment-method">
                                    <div className="single-payment-method show">
                                        <div className="payment-method-name">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="cashon" name="paymentmethod" value="cash"
                                                    className="custom-control-input" checked={true} />
                                                <label className="custom-control-label" htmlFor="cashon">Cash On
                                                    Delivery</label>
                                            </div>
                                        </div>
                                        <div className="payment-method-details" data-method="cash">
                                            <p>Pay with cash upon delivery.</p>
                                        </div>
                                    </div>
                                    <div className="single-payment-method">
                                        <div className="payment-method-name">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="directbank" name="paymentmethod" value="bank"
                                                    className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="directbank">Direct Bank
                                                    Transfer</label>
                                            </div>
                                        </div>
                                        <div className="payment-method-details" data-method="bank">
                                            <p>Make your payment directly into our bank account. Please use your Order
                                                ID as the payment reference. Your order will not be shipped until the
                                                funds have cleared in our account..</p>
                                        </div>
                                    </div>
                                    <div className="single-payment-method">
                                        <div className="payment-method-name">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="checkpayment" name="paymentmethod" value="check"
                                                    className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="checkpayment">Pay with
                                                    Check</label>
                                            </div>
                                        </div>
                                        <div className="payment-method-details" data-method="check">
                                            <p>Please send a check to Store Name, Store Street, Store Town, Store State
                                                / County, Store Postcode.</p>
                                        </div>
                                    </div>
                                    <div className="single-payment-method">
                                        <div className="payment-method-name">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="paypalpayment" name="paymentmethod"
                                                    value="paypal" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="paypalpayment">Paypal <img
                                                        src="static/images/paypal-card.jpg" className="img-fluid paypal-card"
                                                        alt="Paypal" /></label>
                                            </div>
                                        </div>
                                        <div className="payment-method-details" data-method="paypal">
                                            <p>Pay via PayPal; you can pay with your credit card if you don’t have a
                                                PayPal account.</p>
                                        </div>
                                    </div>
                                    <div className="summary-footer-area">
                                        <div className="custom-control custom-checkbox mb-20">
                                            <input type="checkbox" className="custom-control-input" id="terms" required={true} />
                                            <label className="custom-control-label" htmlFor="terms">I have read and agree to
                                                the website <a href="index.html">terms and conditions.</a></label>
                                        </div>
                                        <button type="submit" className="btn btn__bg">Place Order</button>
                                    </div>
                                </div>
                                {/*order checkout end*/}
                        {/*-- Checkout Billing Details end --*/}
                    </div>

                    {/*-- Order Summary Details --*/}
                    <div className="col-lg-6">
                        <div className="order-summary-details">
                            <h2>Your Order Summary</h2>
                            <div className="order-summary-content">
                                {/*-- Order Summary Table --*/}
                                <div className="order-summary-table table-responsive text-center">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th><strong>Products</strong></th>
                                                <th><strong>Total</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href="product-details.html">Suscipit Vestibulum <strong> ×
                                                            1</strong></a>
                                                </td>
                                                <td>$165.00</td>
                                            </tr>
                                            <tr>
                                                <td><a href="product-details.html">Ami Vestibulum suscipit <strong> ×
                                                            4</strong></a>
                                                </td>
                                                <td>$165.00</td>
                                            </tr>
                                            <tr>
                                                <td><a href="product-details.html">Vestibulum suscipit <strong> ×
                                                            2</strong></a>
                                                </td>
                                                <td>$165.00</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td>Sub Total</td>
                                                <td>$400</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping</td>
                                                <td>
                                                    <ul className="shipping-type d-inline-block">
                                                        <li>
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="flatrate" name="shipping"
                                                                    className="custom-control-input" checked={true} />
                                                                <label className="custom-control-label" htmlFor="flatrate">Flat
                                                                    Rate: $70.00</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="freeshipping" name="shipping"
                                                                    className="custom-control-input" />
                                                                <label className="custom-control-label"
                                                                    htmlFor="freeshipping">Free
                                                                    Shipping</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Total Amount</td>
                                                <td>$470</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*-- checkout main wrapper end --*/}
    </>
  )
}

export default CheckoutPage