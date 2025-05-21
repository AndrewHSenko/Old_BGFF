import React from 'react'

const Table = () => {
  return (
    <div className="Table">
        <h2>Average Added Income Per Month</h2>
        <table className="CompTable">
            <tr>
                <th className="tableSite">Site</th>
                <th className="tableRanks">High</th>
                <th className="tableRanks">Average</th>
                <th className="tableRanks">Low</th>
            </tr>
            <tr>
                <td className="siteName">Laundromats</td>
                <td className="cashMoney">$2000</td>
                <td className="cashMoney">$1000</td>
                <td className="cashMoney">$500</td>
            </tr>
            <tr>
                <td className="siteName">Supermarkets</td>
                <td className="cashMoney">$1500</td>
                <td className="cashMoney">$600</td>
                <td className="cashMoney">$500</td>
            </tr>
            <tr>
                <td className="siteName">Car Washes / Smoke Shops / Thrift Stores / Restaurants / Water Stores</td>
                <td className="cashMoney">$1250</td>
                <td className="cashMoney">$500</td>
                <td className="cashMoney">$300</td>
            </tr>
        </table>
    </div>
  )
}

export default Table