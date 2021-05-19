import { connect } from "react-redux";
import { OrderTable } from "../orderComponent/OrderTable";
import { mapStateToProps } from "../../store/mapStateToProps";
import { mapDispatchToProps } from "../../store/mapDispatchToProps";

export const COMPONENT_ORDER_TABLE_WRAP = connect(
  mapStateToProps("OrderTable"),
  mapDispatchToProps("OrderTable")
)(OrderTable);
