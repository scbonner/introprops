import React from 'react'
import ItemDescription from './ItemDescription'


// We are restructing props in the function
function Product({name, description, price}) {

    return (
// rendering props
        <div>
         <ItemDescription name={name} description={description} />
        <h4>${price}</h4>
           
        </div>
    )
}

export default Product