import { connect } from "react-redux";
import { PostNewProduct } from "../productComponent/PostNewProduct";
import { mapStateToProps } from "../../store/mapStateToProps";
import { mapDispatchToProps } from "../../store/mapDispatchToProps";

export const COMPONENT_NEW_PRODUCT_WRAP = connect(
  mapStateToProps("PostNewProduct"),
  mapDispatchToProps("PostNewProduct")
)(PostNewProduct);
