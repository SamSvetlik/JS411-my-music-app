import * as React from 'react'
import './App.css';
import Header from './Header'
import LoginForm from './LoginForm';
import Dashboard from './components/Dashboard';

function App() {
  const [isLogged, setIsLogged] = React.useState(false)
  return (
    <div className="App">
      <Header />
      {isLogged 
      ? <Dashboard />
      : <LoginForm setIsLogged={setIsLogged}/> }
    </div>
  );
}

export default App;
