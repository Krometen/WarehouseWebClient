export function mapStateToProps(component) {
  switch (component) {
    case "OrderTable": {
      return function (state) {
        return {
          orderData: state.orderData,
        };
      };
    }
    case "PostNewOrder": {
      return function (state) {
        return {
          newOrderData: state.newOrderData,
        };
      };
    }
    case "ProductTable": {
      return function (state) {
        return {
          productData: state.productData,
        };
      };
    }
    case "PostNewProduct": {
      return function (state) {
        return {
          newProductData: state.newProductData,
        };
      };
    }
    default:
      return undefined;
  }
}
