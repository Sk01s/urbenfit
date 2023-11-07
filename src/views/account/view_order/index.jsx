import { FlagFilled, LoadingOutlined } from "@ant-design/icons";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import PropType from "prop-types";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, withRouter, useParams } from "react-router-dom";
import firebase from "@/services/firebase";
import Skeleton from "react-loading-skeleton";
import {
  displayMoney,
  displayActionMessage,
  displayDate,
} from "@/helpers/utils";

const OrderView = () => {
  useDocumentTitle("Edit Product | Urbanfit");
  useScrollTop();

  const [orderDetails, setOrderDetails] = useState({
    address: {
      city: "",
      street: "",
      building: "",
      floor: "",
      isInternational: null,
    },
    items: [],
    fulfillment: false,
  });

  const price = orderDetails?.items?.reduce(
    (acc, next) => parseInt(acc) + parseInt(next.price),
    0
  );
  const totalPrice = orderDetails?.address?.isInternational
    ? price + 50
    : price + 5;

  const { id } = useParams();

  useEffect(() => {
    async function getOrder() {
      const data = await firebase.getOrder(id);
      const order = await data?.data();
      // console.log(data, order);
      setOrderDetails(order);
    }
    getOrder();
  }, [id]);
  console.log(orderDetails);

  return (
    <section className="product-form-container">
      <h2>Order</h2>
      {id && (
        <Suspense
          fallback={
            <div className="loader" style={{ minHeight: "80dvh" }}>
              <h6>Loading ... </h6>
              <br />
              <LoadingOutlined />
            </div>
          }
        >
          <div>
            <section className="address">
              <h4>Contact</h4>
              <div>
                <div>{orderDetails?.address?.email}</div>
                <div>{orderDetails?.address?.mobile?.value}</div>

                <div>
                  {orderDetails?.address?.building || <Skeleton width={40} />}
                </div>
              </div>
            </section>
            <section className="address">
              <h4>Shipping Address</h4>
              <span>
                {orderDetails?.address?.isInternational ? "" : "No "}
                International Shipping
              </span>
              <div>
                <div>
                  Country :{" "}
                  {orderDetails?.address?.country || <Skeleton width={40} />}
                  {" , "}
                </div>
                <div>
                  City :{" "}
                  {orderDetails?.address?.city || <Skeleton width={40} />}
                  {" , "}
                </div>

                <div>
                  Street :{" "}
                  {orderDetails?.address?.street || <Skeleton width={40} />}
                  {" , "}
                </div>

                <div>
                  Floor :{" "}
                  {orderDetails?.address?.floor || <Skeleton width={40} />}
                  {" , "}
                </div>

                <div>
                  Building{" "}
                  {orderDetails?.address?.building || <Skeleton width={40} />}
                </div>
              </div>
            </section>
            <section className="items">
              <h4>items</h4>
              <ol style={{ paddingLeft: "1.8rem", fontSize: "1.4rem" }}>
                {orderDetails?.items?.map((item, index) => (
                  <li key={index}>
                    <div>
                      <p>Name : {item?.name || <Skeleton width={40} />}</p>
                      <p>
                        Description :{" "}
                        {item?.description || <Skeleton width={40} />}
                      </p>
                      <p>
                        Selected Size :{" "}
                        {item?.selectedSize || <Skeleton width={40} />}
                      </p>
                      {item?.availableColors?.length === 1 ? (
                        ""
                      ) : (
                        <p>
                          Selected Color :{" "}
                          {item?.selectedColor || <Skeleton width={40} />}
                        </p>
                      )}
                      <p>
                        Quantity : {item.quantity || <Skeleton width={40} />}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.4rem" }}
            >
              <h4>Price</h4>
              {Number.isInteger(price) ? (
                displayMoney(totalPrice)
              ) : (
                <Skeleton width={50} />
              )}
            </div>
            <div>
              <h4>Order's Date</h4>
              <span>
                {orderDetails?.date ? (
                  displayDate(orderDetails?.date.toDate())
                ) : (
                  <Skeleton width={30} />
                )}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <h4>Deliverd </h4>
              <span style={{ fontSize: "1.5rem" }}>
                {orderDetails?.fulfillment ? "Yes" : "No"}
              </span>
            </div>
            <button
              className="button"
              onClick={() => {
                firebase
                  .removeOrder(id)
                  .then((e) => {
                    Redirect("/");
                  })
                  .catch((e) => {
                    displayActionMessage("Error happend");
                  });
              }}
            >
              Delete
            </button>
          </div>
        </Suspense>
      )}
    </section>
  );
};

export default OrderView;
