import axios from 'axios'
// import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { getUser } from '../../utilities/users-service';
// import AuthPage from '../AuthPage/AuthPage';
// import NavBar from '../../components/NavBar/NavBar';
// import './App.css';

function App() {
//   const [user, setUser] = useState(getUser());
  const [motorcycles, setMotorcycles] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    getMotorcycles();
  }, []);

  const onSubmitMotorcycle = async e => {
    e.preventDefault()
    const {make, model, year} = e.target
    await axios.post('/api/motorcycles', {
      make: make.value,
      model: model.value,
      year: year.value,
    })
    make.value = ''
    model.value = ''
    year.value = ''
    getMotorcycles()
  }
  
  // Read
  const getMotorcycles = async () => {
    const res = await axios.get('/api/motorcycles')
    const data = res.data
    setMotorcycles(data)
  }

  return (
    <main className="App">
//       { user ?
//         <>
//           <NavBar user={user} setUser={setUser} />
//           <Routes>
//             {/* Route components in here */}
//             <Route path="/" exact component={ListMotorcycle} />
//             <Route path="/edit/:id" component={EditMotorcycle} />
//             <Route path="/create" component={CreateMotorcycle} />
//             <Route path="/delete/:id" component={DeleteMotorcycle} />
//           </Routes>
             
//         </>
//         :
//         <AuthPage setUser={setUser} />
//       }
//     </main>
//   );
// }

// export default App;
