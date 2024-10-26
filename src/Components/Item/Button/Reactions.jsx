import {reactionEmojis} from "../../../Helpers/emoji.js";
import {useDispatch} from "react-redux";
import {reactionUpdated} from "../../../Features/Item/item.slice.js";

export const Reactions = ({item}) => {
    const dispatch = useDispatch()

    return (
        <>
            <div className='m-4 text-left text-slate-900 dark:text-white text-opacity-55'>
                {
                    Object.entries(reactionEmojis).map(([name, emoji]) => {
                        return (
                            <button
                                onClick={() => dispatch(reactionUpdated({id: item.id, reaction: name}))}
                                key={name} type="button" className="mx-1 text-2xl">
                                {emoji} {item.reactions[name]}
                            </button>
                        )
                    })
                }
            </div>
        </>
    )
}