import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUser} from "../../Features/User/user.slice.js";
import {useMemo} from "react";
import {createSelector} from "@reduxjs/toolkit";
import {useGetItemsQuery} from "../../Features/Api/api.slice.js";

export const Items = () => {

    const {id} = useParams()
    // selectors may be occurred multiple renders
    const user = useSelector(state => selectUser(state, id))

    // create memoized selector which get items from cache
    const items = useMemo(() => {
        return createSelector(
            response => response.data, (response, id) => id,
            (items, id) => items?.filter(item => item.user_id === id) ?? []
        )
    }, [])

    const {
        userItems
    } = useGetItemsQuery(undefined, {
        selectFromResult: result => ({
            ...result, // we can not modify result, we can only append new data to result
            userItems: items(result, id)
        })
    })

    const itemTitles = userItems.map(item => (
        <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.display_name}</Link>
        </li>
    ))

    return (
        <>
            <section>
                <ul>
                    {
                        userItems.length > 0 ? itemTitles : <p>user does not have items</p>
                    }
                </ul>
            </section>
        </>
    )
}