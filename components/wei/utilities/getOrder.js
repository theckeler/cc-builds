import weiData from "../data/wei.json";

const getOrder = (orderID) => {
  let displayOrder = "";
  weiData.orders.forEach((order, index) => {
    if (orderID === order.orderNum) {
      displayOrder = order;
    }
  });
  return displayOrder;
};
export default getOrder;
