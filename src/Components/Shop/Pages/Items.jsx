import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectShop, selectShopItems} from "../../../Features/Shop/shop.slice.js";

export const Items = () => {

    const {id} = useParams()
    // selectors may be occurred multiple renders
    const shop = useSelector(state => selectShop(state, id))
    // const items = useSelector(state => {
    //     const items = selectShops(state)
    //     return items.filter(item => item.shop_id === id)
    // })
    // if state and user id changed then component will be re-rendered
    const items = useSelector(state => selectShopItems(state, id))

    const itemTitles = items.map(item => (
        <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.display_name}</Link>
        </li>
    ))

    return (
        <>
            <section>
                <h2>{shop.name}</h2>
                <ul>
                    {
                        items.length > 0 ? itemTitles : <p>shop does not have items</p>
                    }
                </ul>
            </section>
        </>
    )
}