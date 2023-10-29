const OrderDate = () => <h1>Order Date</h1>

export default OrderDate;

/*
using a trailing underscore on 'orders_' changes the 'layout'.
Without the underscore, the layout is 'orders.jsx' and whatever text
is in that file will be printed to the screen. But with the underscore
the layout becomes 'root.jsx' and the printed text comes from this file.
*/