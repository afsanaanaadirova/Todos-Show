import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import { getTodosById } from "../components/slices/slice";


export default function Detail() {
  const [todo, setTodo] = useState([]);
  const dispatch = useDispatch();

  const { id } = useParams();

  
  useEffect(() => {
    dispatch(getTodosById({ id: id })).then((res) => {
        setTodo(res?.payload)
    })
  }, [dispatch])


  return (
    <>
    <h5>Todo Details</h5>
      <div className="card-item">
        <span>UserId: {todo.userId}</span>
        <span>Id: {todo.id}</span>
        <span>Title: {todo.title}</span>
      </div>
     </>
  )
};
