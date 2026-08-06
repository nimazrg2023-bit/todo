import { useSelector, useDispatch } from "react-redux";
import { addtodo, removetodo, filtercat, addCat } from "./Counterslice";
import { createContext, useState } from "react";
import '../src/App.css'
import Add from "./Additem";
import AddCategory from "./AddCtegory";
import SearchComponent from "./SearchComponent";
import ItemComponent from "./ItemComponent";
export const Context = createContext(null)
function App() {
  const [Cat, setCat] = useState("none")
  const [Search, setSearch] = useState("")
  const add = useSelector(state => state.todolist.todo)
  const Catt = useSelector(state => state.todolist.option)
  const filteredtodo = add.filter(Cat !== "none" ? item => item.name.includes(Search) && item.category == Cat : item => item.name.includes(Search))
  const dispatch = useDispatch();
  return (
    <Context value={{
      filteredtodo,
      add, Cat, Catt, dispatch, setCat,
      Search, setSearch
    }}>
      <Add />
      <AddCategory />
      <SearchComponent />
      <ItemComponent />
    </Context>
  )
}
export default App;