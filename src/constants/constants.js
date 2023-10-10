export const GET_PRODUCTS = "GET_PRODUCTS";
export const SET_ORDERS = "SET_ORDERS";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const SEARCH_PRODUCT_SUCCESS = "SEARCH_PRODUCT_SUCCESS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const REMOVE_PRODUCT_SUCCESS = "REMOVE_PRODUCT_SUCCESS";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS";
export const CANCEL_GET_PRODUCTS = "CANCEL_GET_PRODUCTS";
export const CLEAR_SEARCH_STATE = "CLEAR_SEARCH_STATE";
export const SET_LAST_REF_KEY = "SET_LAST_REF_KEY";

export const SET_BASKET_ITEMS = "SET_BASKET_ITEMS";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const CLEAR_BASKET = "CLEAR_BASKET";
export const ADD_QTY_ITEM = "ADD_QTY_ITEM";
export const MINUS_QTY_ITEM = "MINUS_QTY_ITEM";

export const SET_CHECKOUT_SHIPPING_DETAILS = "SET_CHECKOUT_SHIPPING_DETAILS";
export const SET_CHECKOUT_PAYMENT_DETAILS = "SET_CHECKOUT_PAYMENT_DETAILS";
export const RESET_CHECKOUT = "RESET_CHECKOUT";

export const SIGNIN = "SIGNIN";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNOUT = "SIGNOUT";
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const SET_AUTH_STATUS = "SET_AUTH_STATUS";
export const SIGNIN_WITH_GOOGLE = "SIGNIN_WITH_GOOGLE";
export const SIGNIN_WITH_FACEBOOK = "SIGNIN_WITH_FACEBOOK";
export const SIGNIN_WITH_GITHUB = "SIGNIN_WITH_GITHUB";
export const ON_AUTHSTATE_CHANGED = "ON_AUTHSTATE_CHANGED";
export const SET_AUTH_PERSISTENCE = "SET_AUTH_PERSISTENCE";
export const ON_AUTHSTATE_SUCCESS = "ON_AUTHSTATE_SUCCESS";
export const ON_AUTHSTATE_FAIL = "ON_AUTHSTATE_FAIL";
export const RESET_PASSWORD = "RESET_PASSWORD";

export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const SET_PROFILE = "SET_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const CLEAR_PROFILE = "CLEAR_PROFILE";

export const SET_TEXT_FILTER = "SET_TEXT_FILTER";
export const SET_TYPE_FILTER = "SET_TYPE_FILTER";
export const SET_MIN_PRICE_FILTER = "SET_MIN_PRICE_FILTER";
export const SET_MAX_PRICE_FILTER = "SET_MAX_PRICE_FILTER";
export const RESET_FILTER = "RESET_FILTER";
export const APPLY_FILTER = "APPLY_FILTER";
export const CLEAR_RECENT_SEARCH = "CLEAR_RECENT_SEARCH";
export const REMOVE_SELECTED_RECENT = "REMOVE_SELECTED_RECENT";

export const REGISTER_USER = "REGISTER_USER";
export const GET_USER = "GET_USER";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";

export const LOADING = "LOADING";
export const IS_AUTHENTICATING = "IS_AUTHENTICATING";
export const SET_REQUEST_STATUS = "SET_REQUEST_STATUS";
export const categories = [
  { value: "Tops", label: "Tops" },
  { value: "Bottoms", label: "Bottoms" },
  { value: "Active", label: "Active" },
];

export const type = [
  { value: { categories: "Tops", name: "T-shrit" }, label: "T-shrit" },
  {
    value: { categories: "Bottoms", name: "Sweatpants & Pants" },
    label: "Sweatpants & Pants",
  },
  {
    value: { categories: "Bottoms", name: "Leggings" },
    label: "Leggings",
  },
  {
    value: { categories: "Active", name: "Active wear" },
    label: "Active wear",
  },
  { value: { categories: "Tops", name: "Jacket" }, label: "Jacket" },
  {
    value: { categories: "Tops", name: "Hoodies & Sweatshrits" },
    label: "Hoodies & Sweatshrits",
  },
];
