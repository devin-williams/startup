import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Data = () => {
  const [data, setData] = useState([]);
  const [rates, setRates] = useState(null);
  const [baseCurrency, setBaseCurrency] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      // Mock fetching data
      const fetchData = async () => {
        const result = [
          { id: 1, name: 'John Doe', email: 'john.doe@example.com', balance: '$1,200.00' },
          { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', balance: '$2,500.00' },
          { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com', balance: '$3,750.00' },
          { id: 4, name: 'Devin Williams', email: 'devin.williams@example.com', balance: '$100,000,000.00' }
        ];
        setData(result);
      };

      fetchData();
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      const fetchRates = async () => {
        try {
          const response = await fetch('/api/rates');
          const data = await response.json();
          if (data.success) {
            setRates(data.rates);
            setBaseCurrency(data.base);
          } else {
            console.error('Failed to fetch rates:', data.error);
          }
        } catch (error) {
          console.error('Failed to fetch rates:', error);
        }
      };

      fetchRates();
    }
  }, [token]);

  if (!token) {
    return (
      <main>
        <div className="container">
          <p>Please log in to view this data.</p>
          <button onClick={() => navigate('/login')}>Go to Login</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="rates">
          <h3>Exchange Rates (Base: {baseCurrency})</h3>
          {rates ? (
            <table>
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(rates).map(([currency, rate]) => (
                  <tr key={currency}>
                    <td>{currency}</td>
                    <td>{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading rates...</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Data;