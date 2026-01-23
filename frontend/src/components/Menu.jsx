
import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { setItem } from "../redux/slice";
import { Link, Navigate } from "react-router";
import instance from "../functional/axios";

function Menu() {

    const dispatch = useDispatch();
    let menuItems = useSelector((state) => state.itemInfo.menuItems)

    async function getItems() {
        const response = await instance.get("/items")
        console.log(response.data)
        dispatch(setItem(response.data));
    }
    useEffect(() => {
        try {
            getItems()
            console.log("data loaded")
        } catch (error) {
            alert("Something went wrong")
        }
    }, [])

    const user = useSelector((state)=> state.userInfo.user);
    // const user = null;
    console.log(user);
    console.log(user?.admin)
    



    console.log(menuItems)


    const [type, setType] = useState("");
    const [choice, setChoice] = useState("");
    const [search, setSearch] = useState("");

    function getType(event) {
        setType(event.target.value);
    }
    //  console.log(choice)
    function getItem(event) {
        setSearch("");
        setChoice(event.target.value);
    }

    function searchInput(event) {
        setSearch(event.target.value.toLowerCase());
    }

    function items() {
        const filtered = menuItems?.filter((ele) => {
            const matchesType = type ? ele.itemType === type : true;
            const matchesChoice = choice ? ele.itemName === choice : true;
            const matchesSearch = search ? ele.itemName.toLowerCase().includes(search) : true;

            return matchesType && matchesChoice && matchesSearch;
        });

        return filtered?.map((ele, i) => {
            return (
                <>
                <Link key={ele.itemId} to={user !== null ? `/menu/${ele.itemId}` : "/login"}>
                    <MenuCard {...ele} />
                </Link>
                
                </>
            )
        });
    }

    return (
        <>
            <div id="menu" className="container-menu">
                <div className="filter">
                    <h1>Menu</h1>
                    <select value={type} className="fixed-dropdown" id="type" onChange={getType}>
                        <option value="">All</option>
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                    </select>

                    <select value={choice} className="fixed-dropdown" onChange={getItem}>
                        <option value="">All</option>
                        {menuItems
                            ?.filter((ele) => (type ? ele.itemTypeype === type : true))
                            .map((ele) => (
                                <option key={ele.itemId} value={ele.itemName}>
                                    {ele.itemName}
                                </option>
                            ))}
                    </select>
                    <input value={search} type="text" id="input" onChange={searchInput} placeholder="Search items..." />
                </div>
                <div className="item-cards">
                    {items()}
                </div>
            </div>
        </>
    );
}

// function Select({ name }) {
//     // console.log(name)
//     return (
//         <option value={name}>{name}</option>
//     )
// }

export default Menu;
