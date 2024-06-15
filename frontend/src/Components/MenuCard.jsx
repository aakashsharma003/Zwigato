import axios from "axios";
import { Button, CircularProgress } from "@mui/material";
import { server } from "../main";
import { useState } from "react";

const MenuCard = ({ menuData }) => {
  const [loading, setLoading] = useState(false);
  const OrderHandler = async (price) => {
    setLoading(true);
    try {
      const {
        data: { key },
      } = await axios.get(`${server}/getkey`);
      const {
        data: { order },
      } = await axios.post(`${server}/checkout`, { price });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Zwigato Payments",
        description: "Making Transaction",
        image: "https://i.postimg.cc/pT7MyDgw/You-Tube-800x800.png",
        order_id: order.id,
        callback_url: `${server}/paymentverification`,
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
    } catch (error) {
      console.error("Order failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="loader-container">
          <CircularProgress />
        </div>
      )}
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

                  <Button
                    className="card-tag subtle"
                    variant="outlined"
                    sx={{ margin: "1rem 0", width: "100%" }}
                    onClick={() => {
                      OrderHandler(curElem.price);
                    }}
                  >
                    Order Now
                  </Button>
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
