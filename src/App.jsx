import { useEffect, useState } from 'react';
import CallCard from './components/CallCard';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(10);

  const calls = [
    {
      id: 1,
      client: 'Іван Петренко',
      phone: '+380671112233',
      duration: 5,
    },
    {
      id: 2,
      client: 'Анна Мельник',
      phone: '+380661234567',
      duration: 10,
    },
    {
      id: 3,
      client: 'Олег Коваль',
      phone: '+380931234567',
      duration: 7,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    if (secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoading, secondsLeft]);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Завантаження...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <h1 className="page-title">Список дзвінків</h1>

      <div className="banner">
        {secondsLeft > 0 ? (
          <p>Акція закінчиться через {secondsLeft} секунд</p>
        ) : (
          <p>Акція завершилась</p>
        )}
      </div>

      <div className="cards">
        {calls.map((call) => (
          <CallCard
            key={call.id}
            id={call.id}
            client={call.client}
            phone={call.phone}
            duration={call.duration}
          />
        ))}
      </div>
    </div>
  );
}

export default App;