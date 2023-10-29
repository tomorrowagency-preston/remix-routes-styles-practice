
import { Outlet } from '@remix-run/react';
import styles from '../styles/orders.css';

const Orders = () => {
  return (
    <>
      <h1 id="orders_layout" class="orders orders--layout">Orders Page</h1>
      <Outlet />
    </>
  )
}

export default Orders;

export function links() {
  return [{rel: 'stylesheet', href: styles}]
}

// I think this would be considered a 'layout' 
// its like the "index.html" of the nested 'orders' routes