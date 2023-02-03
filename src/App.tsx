import './App.css';
import List from './components/List';
import TotalEliquids from './components/TotalEliquid';
import Controls from './components/Controls';
import NewEliquid from './components/NewEliquid';

function App() {
  return (
    <>
      <Controls />
      <List />
      <NewEliquid />
      <TotalEliquids />
    </>
  );
}

export default App;
