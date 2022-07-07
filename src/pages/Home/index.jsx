import "./styles.css";

import { Card } from "../../components/Card";

import React, { useState } from "react";

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  function handleNewStudent() {
    const newStudent = {
      id: students.length+1,
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
  }

  return (
    <div className="home">
      <h1>Lista de Presenca</h1>
      <input 
        type="text" 
        placeholder="Digite o nome..." 
        onChange={e => setStudentName(e.target.value)} 
      />

      <button type="button" onClick={handleNewStudent}>Adicionar</button>

      {
        students.map(student => (
          <Card 
            id={student.id}
            key={student.id}
            name={student.name} 
            time={student.time} 
          />
        ))
      }
    </div>
  );
}
