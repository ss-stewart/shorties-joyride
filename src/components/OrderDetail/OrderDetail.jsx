import './OrderDetail.css';
import LineBike from '../LineBike/LineBike';

// Used to display the details of any order, including the favorite (unpaid order)
export default function OrderDetail({ order }) {
  if (!order) return null;

  const lineBikes = order.lineBikes.map(bike =>
    <LineBike
      lineBike={bike}
      isPaid={order.isPaid}
      key={bike._id}
    />
  );

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-bike-container flex-ctr-ctr flex-col scroll-y">
        {lineBikes.length ?
          <>
            {lineBikes}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={() => alert('clicked')}
                  disabled={!lineBikes.length}
                >Save </button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
  
        }
      </div>
    </div>
  );
}