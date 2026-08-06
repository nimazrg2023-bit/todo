import { useContext } from "react"
import { Context } from "./App"
import { removetodo } from "./Counterslice"
function ItemComponent() {
    const { filteredtodo , dispatch } = useContext(Context)
    const btnhandler = (item) => {
        dispatch(removetodo(item.id))
    }
    return (
        <table>
            <thead>
                <tr>
                    <th className="th1">Name</th>
                    <th className="th2">Category</th>
                    <th className="th3">Action</th>
                </tr>
            </thead>

            <tbody>
                {filteredtodo.map(item => (
                    <tr key={item.id}>
                        <td className="td-1">{item.name}</td>
                        <td className="td-2">{item.category}</td>
                        <td className="td-3">
                            <button
                                className="btn2"
                                onClick={() => btnhandler(item)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default ItemComponent