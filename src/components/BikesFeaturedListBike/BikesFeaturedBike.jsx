import './BikesFeturedListBike.css';

export default function BikesFeturedListBike({ bikesfeturedBike }) {
  return (
    <div className="BikesFeturedListBike">
      <div className="emoji flex-ctr-ctr">{bikesfeturedBike.emoji}</div>
      <div className="name">{bikesfeturedBike.name}</div>
      <div className="buy">
        <span>${bikesfeturedBike.avgCostp.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button>
      </div>
    </div>
  );
}