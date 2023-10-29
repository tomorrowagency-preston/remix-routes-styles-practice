import styles from '../styles/orders.css';

const OrderDate = () => <h1 class="orders">Order Date</h1>

export default OrderDate;

export function links() {
  return [{rel: 'stylesheet', href: styles}]
}

/*
using a trailing underscore on 'orders_' changes the 'layout'.
Without the underscore, the layout is 'orders.jsx' and whatever text
is in that file will be printed to the screen. But with the underscore
the layout becomes 'root.jsx' and the printed text comes from this file.
*/