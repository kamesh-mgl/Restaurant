import React from 'react'

const DisplayItem = ( { itemName, itemType, itemImage, itemDesc, itemPrice }) => {

  return (
   
            <div className='item-comp'>
                <div className='item-img'>
                    <img src={`${itemImage}`} alt={`${itemName}`} />
                </div>
                <div className='item-body'>
                    <div className='item-name'>
                        <h2>{itemName}</h2>
                    </div>
                    <div className='item-desc'>
                        <p>{itemDesc}</p>
                    </div>
                    <div className='item-price'>
                        <span>{`$ ${itemPrice}`}</span>
                    </div>
                </div>
            </div>
     
  )
}

export default DisplayItem