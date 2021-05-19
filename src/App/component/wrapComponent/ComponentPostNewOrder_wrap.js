import { connect } from "react-redux";
import { PostNewOrder } from "../orderComponent/PostNewOrder";
import { mapStateToProps } from "../../store/mapStateToProps";
import { mapDispatchToProps } from "../../store/mapDispatchToProps";

export const COMPONENT_NEW_ORDER_WRAP = connect(
  mapStateToProps("PostNewOrder"),
  mapDispatchToProps("PostNewOrder")
)(PostNewOrder);
