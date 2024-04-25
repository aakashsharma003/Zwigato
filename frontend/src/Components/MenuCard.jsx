import axios from "axios";

import { server } from "../main";

const MenuCard = ({ menuData }) => {
  const OrderHandler = async (price) => {
    const {
      data: { key },
    } = await axios.get(`${server}/getkey`);
    const {
      data: { order },
    } = await axios.post(`${server}/checkout`, {
      price,
    });
    // console.log(window);
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Zwigato Payments",
      description: "Making Transaction",
      image:
        "data:image/jpeg;base64,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",
      order_id: order.id,
      callback_url: "${server}/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#490BDA",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem, indx) => {
          const { id, name, category, image, description } = curElem;
          return (
            <div className="card-container" key={indx}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle">{category}</span>
                  <h2 className="card-title">{name}</h2>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">Read</div>
                </div>
                <div className="card-order-section">
                  <img src={image} alt="images" className="card-media" />

                  <button
                    className="card-tag subtle"
                    onClick={() => {
                      OrderHandler(1000);
                    }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
