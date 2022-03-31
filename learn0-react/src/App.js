import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <Header title="Task Tracker" />
      <Tasks />
    </div>
  );
}

export default App;
