function MenuCard({itemName,itemPrice,itemType,itemDesc,itemImage})
{
    return(

         <div className="menu-card">
                <div id={0} className="image">
                    <img src={itemImage} alt={itemName} />
                </div>
                <h1>{itemName}</h1>
                <span>${itemPrice}/-</span>
                <p>{itemDesc}</p>
            </div>        
    )
}
export default MenuCard