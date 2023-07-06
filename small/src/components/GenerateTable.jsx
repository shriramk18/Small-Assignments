import React, { useState } from 'react'

export default function GenerateTable() {
    const [number, setNumber] = useState('')
    const [tableData, setTableData] = useState([])

    const handleNumChange = (e) => {
        const value = e.target.value
        setNumber(value)
        tableGenerate(value)
    }
    const tableGenerate=(value)=>{
        const parsedValue = parseInt(value)
        if (isNaN(parsedValue)) {
            setTableData([])
            return
        }
        const table = [];
        for (let i = 1; i <= parsedValue; i++) {
            table.push(
                <tr key={i}>
                    <td>{i}</td>
                    <td>{i * i}</td>
                </tr>
            );
        }
        setTableData(table);
    };




    return (
        <>
            <input
                type='text'
                value={number}
                onChange={handleNumChange}
                placeholder='Enter number'
            />
            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Square</th>
                    </tr>
                </thead>
                <tbody>{tableData}</tbody>
            </table>
        </>
    )
}

