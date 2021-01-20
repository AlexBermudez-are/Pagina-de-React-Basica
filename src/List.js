import React from 'react' 
import Item from './Item'


function List(props) {
    return (
        <div className="lista">
            {
                props.lista.map(item=>
                    <Item 
                        key = {item.id}
                        id = {item.id}
                        rating = {item.rating}
                        title = {item.title}
                        image = {item.image} 
                        updaterating = {props.updaterating}
                        onremove = {props.onremove}
                    />                      
                )
            }
        </div>
    )
}
export default List