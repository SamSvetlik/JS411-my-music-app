import * as React from 'react'
import './App.css';
import Header from './Header'
import LoginForm from './LoginForm';

function App() {
  const [isLogged, setIsLogged] = React.useState(false)
  return (
    <div className="App">
      <Header />
      {!isLogged 
      ? <LoginForm setIsLogged={setIsLogged}/> 
      : <div> Logged in! </div>}
    </div>
  );
}

export default App;
