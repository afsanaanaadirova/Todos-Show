import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate} from 'react-router-dom'
import { getTodos } from "../components/slices/slice";


export default function Todos() {
  const [allTodo, setAllTodos] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodos()).then(res => {
        setAllTodos(res.payload)
    });
  }, [dispatch])

  return (
    <>
    <h5>All Todos</h5>
    <div className="todo">
      {allTodo?.map((item)=><span className="item" key={item.id} onClick={() => navigate(`todo/${item.id}`)}>{item.title}</span>)}
    </div>
    </>
  )
};
