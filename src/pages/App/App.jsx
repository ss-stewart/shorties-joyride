import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import ListMotorcycle from './components/list-motorcycle.component';
import EditMotorcycle from './components/edit-motorcycle.component';
import CreateMotorcycle from './components/create-motorcycle.component';
import DeleteMotorcycle from './components/delete-motorcycle.component';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" exact component={ListMotorcycle} />
            <Route path="/edit/:id" component={EditMotorcycle} />
            <Route path="/create" component={CreateMotorcycle} />
            <Route path="/delete/:id" component={DeleteMotorcycle} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
