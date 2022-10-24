import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Note from './components/Note'
import Footer from './components/Footer'
import journals from './components/Journals'

function App() {
  return (
    <div className="App">
      <Header />
      {journals.map((journal) => {
        return (
          <Note 
            key = {journal.key}
            title = {journal.title}
            content = {journal.content}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
