'use client';

import { useEffect, useState } from 'react';

import '../app/globals.css';

const HomePage = () => {
  const [prices, setPrices] = useState<any[]>([]);
  const [symbol, setSymbol] = useState('BTC');

  const fetchPrices = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/data?symbol=${symbol}`);
      const data = await response.json();
      console.log('Prices data:', data);
      setPrices(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(() => {
      fetchPrices();
    }, 5000);
    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div>
      <h1>Real-time Price Data</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((price: any, index: number) => (
            <tr key={index}>
              <td>{price.symbol}</td>
              <td>{price.price}</td>
              <td>{new Date(price.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setSymbol('ETH')}>Change to ETH</button>
    </div>
  );
};

export default HomePage;
