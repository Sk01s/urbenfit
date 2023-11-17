import { LoadingOutlined } from "@ant-design/icons";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import React, { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { addProduct } from "@/redux/actions/productActions";
import firebaseInstance from "@/services/firebase";
import { useState } from "react";
import { PROMO } from "@/constants/routes";

const PromoForm = lazy(() => import("../components/PromoForm"));

const AddProduct = () => {
  useScrollTop();
  useDocumentTitle("Add New Promo | Urbanfit");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (promo) => {
    console.log(promo);
    setIsLoading(true);
    const res = await firebaseInstance.addPromo(promo.code, promo);
    setIsLoading(false);
    history.go(PROMO);
  };

  return (
    <div className="product-form-container">
      <h2>Add New Promo</h2>
      <Suspense
        fallback={
          <div className="loader" style={{ minHeight: "80dvh" }}>
            <h6>Loading ... </h6>
            <br />
            <LoadingOutlined />
          </div>
        }
      >
        <PromoForm isLoading={isLoading} onSubmit={onSubmit} />
      </Suspense>
    </div>
  );
};

export default withRouter(AddProduct);
