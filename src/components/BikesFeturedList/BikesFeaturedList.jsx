import './BikesFeturedList.css';
import BikesFeturedListBike from '../BikesFeturedListBike/BikesFeturedListBike';

export default function BikesFeturedList({ bikesfeturedBikes }) {
  const bikes = bikesfeturedBikes.map(bike =>
    <BikesFeturedListBike
      key={bike._id}
      bikesfeturedBike={bike}
    />
  );
  return (
    <main className="BikesFeturedList">
      {bikes}
    </main>
  );
}