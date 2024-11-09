import React from 'react';

const Data = () => (
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
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>$1,200.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>jane.smith@example.com</td>
            <td>$2,500.00</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Michael Brown</td>
            <td>michael.brown@example.com</td>
            <td>$3,750.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
);

export default Data;