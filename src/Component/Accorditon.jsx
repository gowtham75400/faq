/* eslint-disable react/prop-types */
import AccItems from "./AccItems"

const Accorditon = ({data}) => {
    return (
        <div className="main-acc">
            <h1>FAQ</h1>
            {data.map((items) =>(
                <AccItems key={items.id} question={items.question} answer={items.answer} />
            ))}
        </div>
    )
}

export default Accorditon