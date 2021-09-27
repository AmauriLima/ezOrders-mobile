import React, { useEffect, useState } from 'react';
import socketIo from 'socket.io-client';

import {
  Card, List, Status, TableNumber,
} from './styles';

const statuses = {
  PENDING: 'PENDENTE',
  PREPARING: 'PREPARANDO',
  DONE: 'FINALIZADO',
};

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://192.168.1.10:3001/orders');
      const json = await res.json();
      setOrders(json);
    })();

    const socket = socketIo('http://192.168.1.10:3001', {
      transports: ['websocket'],
    });

    socket.on('newOrder', (order) => {
      setOrders((prevState) => [order, ...prevState]);
    });

    socket.on('statusChange', (updatedOrder) => {
      setOrders((prevState) => prevState.map((order) => (
        order._id === updatedOrder._id ? updatedOrder : order
      )));
    });
  }, []);
  return (
    <List
      data={orders}
      keyExtractor={(order) => order._id}
      renderItem={({ item: order }) => (
        <Card status={order.status}>
          <TableNumber status={order.status}>#{order.table}</TableNumber>
          <Status status={order.status}>{statuses[order.status]}</Status>
        </Card>
      )}
    />
  );
}
