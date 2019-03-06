import React from 'react'

const Items = ({ items }) => {
    return (
        <div className="items-list container">
            {
                <table>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>description</th>
                            <th>cost</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            items.map(item => {
                                return (
                                    <tr className="item" key={item.id}>
                                        <td> {item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.cost}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }



        </div>
    );
}

export default Items