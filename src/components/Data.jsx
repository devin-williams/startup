import React, { useEffect, useState } from 'react';

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Mock fetching data
    const fetchData = async () => {
      const result = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', balance: '$1,200.00' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', balance: '$2,500.00' },
        { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com', balance: '$3,750.00' },
        { id: 4, name: 'Devin Williams', email: 'devin.williams@example.com', balance: '$100,000,000.00'}
      ];
      setData(result);
    };

    fetchData();
  }, []);

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
      </div>
    </main>
  );
};

export default Data;