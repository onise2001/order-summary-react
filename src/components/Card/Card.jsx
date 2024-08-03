import "./Card.css";
import Payment from "../Payment/Payment";
import Summary from "./Summary/Summary";

export default function Card() {
  return (
    <div className="card">
      <img src="./images/illustration-hero.svg" alt="" className="card-img" />
      <div className="card-body">
        <Summary />
        <Payment />
      </div>
    </div>
  );
}
