import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router'
import instance from '../functional/axios'
import DisplayItem from './DisplayItem'
import EditItem from './EditItem'

const Item = () => {


    // const { itemName, itemType, itemImage, itemDesc, itemPrice } = useSelector((state) => {
    //     state.itemInfo.menuItems
    // })
    //   let item = useSelector((state) => state.itemInfo.menuItems)
    //   let {itemImage,itemDesc,itemName,itemPrice} = {...item[0]};
    // console.log(item[0])
    const { id } = useParams()
    const [item, setItem] = useState({});
    // const [page, setPage] = useState("Edit");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const[flag,setFlag] = useState(false);
    const navigate = useNavigate();


    async function getitem() {

        const response = await instance.get(`/item/${id}`)
        // console.log(response.data);
        setItem(response.data)
    }

    useEffect(() => {
        try {
            getitem()
        } catch (error) {
            alert("something went wrong")
        }
    }, [])

    // function handleEdit() {
    //     if (page === "Edit") {
    //         setPage("Save");
    //     }
    //     else {
    //         setPage("Edit")
    //     }
    // }
    if (!item) return <p>Loading...</p>;

    // function handleEdit() {
    //     setPage(page === "Edit" ? "Save" : "Edit");
    // }

    // function pageSet() {
    //     return page === "Edit"
    //         ? <DisplayItem {...item} />
    //         : <EditItem {...item} />;
    // }

    useEffect(()=>{
        if(flag) navigate("/menu")
    },[flag])
    async function handleDelete() {
        try {
            await instance.delete(`/deleteitem/${id}`);
            alert("Item deleted")
            setFlag(true);
        } catch (error) {
            alert("Failed to delete item");
        }
    }


    return (
        <div className="item-parent">
            {/* {pageSet()} */}
            <DisplayItem {...item}/>
            <div className="item-body1">
                <div>
                    <Link className="anch" to="/menu">Back</Link>
                </div>
                <div>
                    <Link className="anch" to="edit">Edit</Link>
                </div>
                <div>
                    <button className="anch" onClick={() => setShowDeleteModal(true)}>
                        Delete
                    </button>
                </div>
            </div>
            {showDeleteModal && (
                <div className="modal-overlay">
                    <div className="confirm-modal">
                        <h3>Delete Item</h3>
                        <p>Are you sure you want to delete this item?</p>

                        <div className="modal-actions">
                            <button className="yes-btn" onClick={handleDelete}>
                                Yes
                            </button>
                            <button
                                className="no-btn"
                                onClick={() => setShowDeleteModal(false)}>
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Item