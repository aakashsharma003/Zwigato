import { useSearchParams } from "react-router-dom";
const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const ref = searchParams.get("reference");
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50dvw",
          height: "50dvh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="approved-icon">
            <img
              src={"/images/approved.png"}
              style={{
                width: "100%",
                height: "100%",
              }}
              alt="approved-mark"
            />
          </div>
          <h1>Payment Successfull</h1>

          <div
            style={{
              width: "100%",
              height: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3>ReferenceId:</h3>
            <h3>{ref}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
