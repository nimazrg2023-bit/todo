import { useContext } from "react"
import { Context } from "./App"
function SearchComponent() {
    const { setSearch , Search } = useContext(Context)
    const inputhandler2 = (e) => {
        setSearch(e.target.value)

    }
    return (
        <input type="text" placeholder="search" onChange={inputhandler2} value={Search} className="input-search" />
    )
}
export default SearchComponent