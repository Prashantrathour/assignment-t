import React from 'react'
import "../index.css"
function Table() {
  return (
    <div class="table-header">
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Status</th>
          <th>Transaction ID</th>
          <th>Refund Date</th>
          <th>Order amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="odr-id">#281209</td>
          <td className="odr-status">
            <div className="done"></div>Successful
          </td>
          <td className="odr-txn-id">131634495747</td>
          <td className="odr-date">Today, 08:45 PM</td>
          <td className="odr-price">₹1,125.00</td>
        </tr>
        <tr>
          <td className="odr-id">#281208</td>
          <td className="odr-status">
            <div className="pending"></div>Processing
          </td>
          <td className="odr-txn-id">131634495746</td>
          <td className="odr-date">Yesterday, 03:00 PM</td>
          <td className="odr-price">₹1,365.00</td>
        </tr>
        <tr>
          <td className="odr-id">#281207</td>
          <td className="odr-status">
            <div className="done"></div>Successful
          </td>
          <td className="odr-txn-id">131634495745</td>
          <td className="odr-date">12 Jul 2023, 09:30 PM</td>
          <td className="odr-price">₹4,625.00</td>
        </tr>
        <tr>
          <td className="odr-id">#281206</td>
          <td className="odr-status">
            <div className="done"></div>Successful
          </td>
          <td className="odr-txn-id">131634495744</td>
          <td className="odr-date">13 Jul 2023, 05:00 PM</td>
          <td className="odr-price">₹5,768.00</td>
        </tr>
        <tr>
          <td className="odr-id">#281205</td>
          <td className="odr-status">
            <div class="done"></div>Successful
          </td>
          <td className="odr-txn-id">131634495743</td>
          <td className="odr-date">14 Jul 2023, 06:00 PM</td>
          <td className="odr-price">₹2,387.00</td>
        </tr>
        <tr>
          <td className="odr-id">#281204</td>
          <td className="odr-status">
            <div className="done"></div>Successful
          </td>
          <td class="odr-txn-id">131634495742</td>
          <td className="odr-date">15 Jul 2023, 03:00 PM</td>
          <td className="odr-price">₹3,788.00</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default Table