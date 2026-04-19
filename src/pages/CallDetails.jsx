import { useParams } from 'react-router-dom';

function CallDetails() {
  const { id } = useParams();

  const calls = [
    { id: '1', client: 'Іван Петренко', phone: '+380671112233', duration: 5 },
    { id: '2', client: 'Анна Мельник', phone: '+380661234567', duration: 10 },
    { id: '3', client: 'Олег Коваль', phone: '+380931234567', duration: 7 },
  ];

  const call = calls.find((item) => item.id === id);

  if (!call) {
    return <h2>Дзвінок не знайдено</h2>;
  }

  return (
    <div className="page">
      <h1>Деталі дзвінка</h1>
      <p><strong>Клієнт:</strong> {call.client}</p>
      <p><strong>Телефон:</strong> {call.phone}</p>
      <p><strong>Тривалість:</strong> {call.duration} хв</p>
    </div>
  );
}

export default CallDetails;