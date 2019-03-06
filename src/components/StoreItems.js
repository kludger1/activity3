import React from 'react'

const Items = ({ items, deleteItem }) => {
    const itemsList =
        items.map(item => {
            return (
                <tr className="item" key={item.id}>
                    <td> {item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.cost}</td>
                    <td> <button class="btn red lighten-2" onClick={() => {deleteItem(item.id)}}>Delete Item
                    </button></td>
                </tr>
            )
        })

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
                        {itemsList}
                    </tbody>
                </table>
            }



        </div>
    );
}

export default Items