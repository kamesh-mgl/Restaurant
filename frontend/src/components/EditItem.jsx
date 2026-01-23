import React, { useEffect, useState } from 'react'
import AddItems from './AddItems'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

const EditItem = (props) => {

    const { id } = useParams()
    let items = useSelector((state) => state.itemInfo.menuItems)


    console.log(items)
    let item = items?.filter((ele) => {
        // console.log(ele.itemId)
        if (ele.itemId === +id) return ele
    })
    console.log(item)

    return (
        <AddItems fn={"Edit"} {...item[0]} />
    )
}

export default EditItem