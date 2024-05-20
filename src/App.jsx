import React, { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };
    if (!title || !content) {
      alert("제목과 내용을 입력하세요");
    } else {
      setTodo((prev) => [...prev, newTodo]);
      setTitle();
      setContent();
    }
  };

  return (
    <div id='todo-container'>
      <form id='todo-form' onSubmit={addTodo}>
        <input type='text' placeholder='제목' value={title} onChange={onChangeTitle} />
        <input type='text' placeholder='내용' value={content} onChange={onChangeContent} />
        <button type='submit'>추가하기</button>
      </form>
      <h2>Working...</h2>
      <ul id='working-todo'>
        <li key={todo.id}>
          <div>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
          </div>
          <button>삭제</button>
          <button>완료</button>
        </li>
      </ul>
      <h2>Done!</h2>
    </div>
  );
}
