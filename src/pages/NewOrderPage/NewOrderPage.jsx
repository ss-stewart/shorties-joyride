import { useState, useEffect, useRef } from 'react';
import * as bikesAPI from '../../utilities/bikes-api';
import './NewOrderPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import BikesFeturedList from '../../components/BikesFeturedList/BikesFeturedList';
import MakeList from '../../components/MakeList/MakeList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [bikesfeturedBikes, setBikesFeturedBikes] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const makesRef = useRef([]);

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function() {
    async function getBikes() {
      const bikes = await bikesAPI.getAll();
      makesRef.current = [...new Set(bikes.map(bike => bike.make.name))];
      setBikesFeturedBikes(bikes);
      setActiveCat(makesRef.current[0]);
    }
    getBikes();
  }, []);

  return (
    <main className="NewOrderPage">
      <aside>
        <Logo />
        <MakeList
          makes={makesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <BikesFeturedList
        bikesfeturedBikes={bikesfeturedBikes.filter(bike => bike.make.name === activeCat)}
      />
      <OrderDetail />
    </main>
  );
}