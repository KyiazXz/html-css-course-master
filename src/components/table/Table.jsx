import React from 'react'
import "./table.css"


export default function Table() {
  return (
    <div>
        <table>
            <thead>
             <tr>
                <th>Chair</th>
                <th>The Laid Back</th>
                <th>The worker</th>
                <th>12</th>
            </tr>
            </thead>
            <tbody>

            <tr>
                <th>Width</th>
                <td>80 cm</td>
                <td>60 cm </td>
                <td>12</td>
            </tr>
            <tr>
                <th>Height</th>
                <td>100 cm</td>
                <td>110 cm</td>
                <td>12</td>
            </tr>
            </tbody>
        </table>       
    </div>
  )
}
