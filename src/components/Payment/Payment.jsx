import "./Payment.css";

export default function Payment() {
  return (
    <div className="pricing">
      <div className="pricing-wrapper">
        <div className="plan">
          <img src="./images/icon-music.svg" alt="" />
          <div className="plan-wrapper">
            <span>Annual Plan</span>
            <span className="price">$59.99/year</span>
          </div>
        </div>
        <a href="#">Change</a>
      </div>
      <div className="payment-wrapper">
        <button className="pay-button">Proceed to Payment</button>
        <button className="cancel-button">Cancel Order</button>
      </div>
    </div>
  );
}
