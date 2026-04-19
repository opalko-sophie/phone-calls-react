import { Link } from 'react-router-dom';

function CatalogPage() {
  const calls = [
    { id: 1, client: 'Іван Петренко' },
    { id: 2, client: 'Анна Мельник' },
    { id: 3, client: 'Олег Коваль' },
  ];

  return (
    <div className="page">
      <h1>Каталог дзвінків</h1>

      <ul>
        {calls.map((call) => (
          <li key={call.id}>
            <Link to={`/call/${call.id}`}>{call.client}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogPage;