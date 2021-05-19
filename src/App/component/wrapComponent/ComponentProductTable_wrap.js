import { connect } from "react-redux";
import { ProductTable } from "../productComponent/ProductTable";
import { mapStateToProps } from "../../store/mapStateToProps";
import { mapDispatchToProps } from "../../store/mapDispatchToProps";

export const COMPONENT_PRODUCT_TABLE_WRAP = connect(
  mapStateToProps("ProductTable"),
  mapDispatchToProps("ProductTable")
)(ProductTable);
