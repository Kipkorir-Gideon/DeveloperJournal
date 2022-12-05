import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from './components/Header'
import Note from './components/Note'
import Footer from './components/Footer'
import CreateJournal from './components/CreateJournal'
import { useState } from 'react'

function App() {

  const [journals, setJournals] = useState([])

  function addJournal(journal) {
    setJournals(prevJournals => {
      return [...prevJournals, journal]
    })
  }

  function deleteJournal(id) {
    setJournals(prevJournals => {
      return prevJournals.filter((journal, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <CreateJournal onAdd={addJournal} />
      {journals.map((newJournal, index) => {
        return <Note 
          key={index}
          id={index}
          title={newJournal.title}
          content={newJournal.content}
          onDelete={deleteJournal}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
