import React, { useState } from 'react';
import './style.css';

export default function Tool({ children }) {
  const [show, setShow] = useState(false);

  return (
    <div className="tooltip-container">
      <div className={show ? 'tooltip-box visible' : 'tooltip-box'}>
        <table>
          <tr>
            <th>Person 1</th>
            <th>Person 2</th>
            <th>Person 3</th>
          </tr>
          <tr>
            <td>Emil</td>
            <td>Tobias</td>
            <td>Linus</td>
          </tr>
          <tr>
            <td>16</td>
            <td>14</td>
            <td>10</td>
          </tr>
        </table>
        <span className="tooltip-arrow" />
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
}
