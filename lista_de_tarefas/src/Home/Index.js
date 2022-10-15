import React from 'react'
import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from "react-icons/bs";
import { Container, Header, Form, List, FormControl, Todo, TodoDone} from './styles'

const API = "http://localhost:5000"

const Index = () => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async() => {
            setLoading(true)
            const res = await fetch(API + "/todos")
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err))
        
        setLoading(false);
        setTodos(res)
        };
        loadData();
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const todo = {
            id: Math.random(),
            title,
            time,
            done: false,
        };
        await fetch(API + "/todos", {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json",
            },
        });

        setTodos((prevState) => [...prevState, todo])
        
        setTitle("");
        setTime("")
    };

    const handleDelete = async(id) => {

        await fetch(API + "/todos/" + id, {
            method: "DELETE",
           
        });
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    };

    const handleEdit = async(todo) => {
        todo.done = !todo.done;
        const data = await fetch(API + "/todos/" + todo.id, {
            method: "PUT",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json",
            },
        });
        setTodos((prevState) => prevState.map((t) => (t.id === data.id ? (t = data): t)));
    }

    if(loading){
        return<p>Carregando...</p>
    }

  return (
    <Container>
        <Header>
            <h1>React Todo</h1>
        </Header>
        <Form>
            <h2>Insira a sua próxima tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <label htmlFor="title">Q que você vai fazer?</label>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder='Título da tarefa' 
                        onChange ={(e) => setTitle(e.target.value)}
                        value={title || ""}
                        required
                        />
                </FormControl>
                <FormControl>
                    <label htmlFor="time">Duração:</label>
                    <input 
                        type="text" 
                        name="time" 
                        placeholder='Tempo estimado (em horas)' 
                        onChange ={(e) => setTime(e.target.value)}
                        value={time || ""}
                        required
                        />
                </FormControl>
                <input type="submit" value="Criar tarefa" />
            </form>
        </Form>
        <List>
            <h2>Lista de tarefas:</h2>
            {todos.length === 0 && <p>Não há tarefas!</p>}
            {todos.map((todo) => (
                <Todo key={todo.id}>
                    <TodoDone done={todo.done? todo.done : ""}>{todo.title}</TodoDone>
                    <p>Duração:{todo.time}</p>
                    <div>
                        <span onClick={() => handleEdit(todo)}>
                            {!todo.done ? <BsBookmarkCheck/> : <BsBookmarkCheckFill/> }
                        </span>
                        <BsTrash onClick={() => handleDelete(todo.id)}/>
                    </div>
                </Todo>
            ))}
        </List>
    </Container>
  )
}

export default Index

// className={todo.done ? "todo-done" : ""}