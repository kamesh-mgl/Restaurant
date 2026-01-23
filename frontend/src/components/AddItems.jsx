import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setItem } from "../redux/slice";
import axios from "axios";
import instance from "../functional/axios";
import { Link, useNavigate } from "react-router";


export default function AddItems(props) {

    const navigate = useNavigate();
    const [flag,setFlag] = useState(false);

    useEffect(()=>{
       if(flag) navigate("/menu")
    },[flag])


    const [formData, setFormData] = useState(() => {
        if (props.fn === "Add") {
            return {
                itemName: "",
                itemPrice: "",
                itemType: "Veg",
                itemDesc: "",
                itemImage: ""
            }
        }
        else{
           const {fn,...newprops} = props
           return newprops
        }
    })


console.log(formData)
    async function sendData(formData) {
        // const sd = new FormData();
        // sd.append("item", new Blob([JSON.stringify(formData)], { type: "application/json" }))
        console.log(formData)
        try {
            await instance.post("/additem", formData)
            alert("Item added Successfully")
        } catch (error) {
            alert("Failed to add Item")
        }
    }
    async function updateData(formData) {
        // const sd = new FormData();
        // sd.append("item", new Blob([JSON.stringify(formData)], { type: "application/json" }))
        console.log(formData)
        try {
            await instance.put("/updateitem", formData)
            alert("Item updated Successfully")
            setFlag(true);
        } catch (error) {
            alert("Failed to edit Item")
        }
    }

    function submit(event) {
        event.preventDefault();
        props.fn ==="Add"?sendData(formData): updateData(formData);
        setFormData({
            itemName: "",
            itemPrice: "",
            itemType: "Veg",
            itemDesc: "",
            itemImage: ""
        })
    }

    // console.log(formData)
    function formHandle(event) {
        const { name, value } = event.target;
        console.log(name, value)
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    return (
        <div id="additems" className="container">
            <h1>{props.fn} Items to the Menu</h1>
            <div className="form-container">
                <div className="input-group">
                    <label htmlFor="itemName">Item Name</label>
                    <input value={formData.itemName} onChange={formHandle} name="itemName" type="text" id="itemName" className="input-tag" placeholder="Enter the item name" />
                </div>

                <div className="input-group">
                    <label htmlFor="itemPrice">Price</label>
                    <input value={formData.itemPrice} onChange={formHandle} name="itemPrice" type="text" id="itemPrice" className="input-tag" placeholder="Enter the item price" />
                </div>

                <div className="input-group">
                    <label htmlFor="itemType">Type</label>
                    <select value={formData.itemType} onChange={formHandle} name="itemType" className="fixed-dropdown" id="itemType">
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="itemImage">Image URL</label>
                    <input value={formData.itemImage} onChange={formHandle} name="itemImage" type="text" id="itemImage" className="input-tag" placeholder="Enter the item image" />
                </div>

                <div className="input-group textarea-group">
                    <label htmlFor="itemDescription">Description</label>
                    <textarea value={formData.itemDesc} onChange={formHandle} name="itemDesc" id="itemDescription" placeholder="Enter the item description" ></textarea>
                </div>
                <div className="item-body2">
                   <div>
                     <button onClick={submit} type="submit" className="add-btn">{props.fn==="Add"?"Add":"Save"}</button>
                   </div>
                    <div>
                        <Link className="anch" to={"/menu"}>Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
 
    )
}
