import './LineBike.css';

export default function LineBike({ lineBike, isPaid }) {
  return (
    <div className="LineBike">
      <div className="flex-ctr-ctr">{lineBike.bike.emoji}</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineBike.bike.name}</span>
        <span>{lineBike.bike.avgCost.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => alert('clicked')}
          >−</button>
        }
        <span>{lineBike.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => alert('clicked')}
          >+</button>
        }
      </div>
      <div className="ext-avgCost">${lineBike.extAvgCost.toFixed(2)}</div>
    </div>
  );
}