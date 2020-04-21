import React from 'react'

const TodoItems = (props) => {
    const {items , deleteItem} = props;
    let length = items.length;
    const ListItem = length ? ( 
        items.map(item => {
            return (
                <div key={item.id}>
                    <span>{item.id}</span>
                    <span>{item.name}</span>
                    <span>{item.rate}</span>
                    <span onClick={() => deleteItem(item.id)}>&times;</span>
    
    
                </div>
            )
        }) 
    ) : (
        <p>abdo</p>
    )
    return (
        <div className="ListItems">
            <div>
                <span>Name</span>
                <span>rate</span>
                <span>Action</span>
            </div>
           {ListItem}
        </div>
    )
}
export default TodoItems;