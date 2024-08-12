import React from 'react';

const orders = [
  {
    id: '1234567890',
    name: 'Sporty Mesh Cap',
    size: 'One size',
    color: 'Brown',
    amount: 2,
    price: '£11.24',
    orderDate: 'March 10, 2024',
    deliveryDate: 'March 14, 2024',
  },
  {
    id: '2345678901',
    name: 'Silk Elegance Blouse',
    size: 'Large',
    color: 'Beige',
    amount: 1,
    price: '£52.49',
    orderDate: 'February 2, 2024',
    deliveryDate: 'February 10, 2024',
  },
  {
    id: '3456789012',
    name: 'Classic Cotton T-shirt',
    size: 'Large',
    color: 'White',
    amount: 1,
    price: '£14.99',
    orderDate: 'January 15, 2024',
    deliveryDate: 'January 20, 2024',
  },
];

const Orders = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Order</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Price</th>
            <th className="py-2">Order Number</th>
            <th className="py-2">Order Date</th>
            <th className="py-2">Delivery Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-t">
              <td className="py-2">
                {order.name}<br />
                <span className="text-sm text-gray-600">Size: {order.size}</span><br />
                <span className="text-sm text-gray-600">Color: {order.color}</span>
              </td>
              <td className="py-2 text-center">{order.amount}</td>
              <td className="py-2 text-center">{order.price}</td>
              <td className="py-2 text-center">{order.id}</td>
              <td className="py-2 text-center">{order.orderDate}</td>
              <td className="py-2 text-center">{order.deliveryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;