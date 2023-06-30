import './MakeList.css';

export default function MakeList({ makes, activeCat, setActiveCat }) {
  const cats = makes.map(cat =>
    <li
      key={cat}
      className={cat === activeCat ? 'active' : ''}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  );
  return (
    <ul className="MakeList">
      {cats}
    </ul>
  );
}
