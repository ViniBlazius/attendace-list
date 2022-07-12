import React, { useState, useEffect } from "react";
import "./styles.css";

import { Card, CardProps } from "../../components/Card";

type APIReponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string;
}

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);

  function handleNewStudent() {
    const newStudent = {
      id: students.length + 1,
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => {
    async function fetchData() {
      const r = await fetch("https://api.github.com/users/ViniBlazius");
      const data = await r.json() as APIReponse;

      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }

    fetchData()
  }, [])

  return (
    <div className="home">
      <header>
        <h1>Lista de Presenca</h1>

        <div>
          <p>{user.name}</p>
          <img src={user.avatar} alt="" />
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleNewStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card
          id={student.id}
          key={student.id}
          name={student.name}
          time={student.time}
        />
      ))}
    </div>
  );
}
