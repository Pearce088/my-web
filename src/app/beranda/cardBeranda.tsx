'use client';
import Hometable from './berandaTable';
import './CardBeranda.css'; // Import CSS terpisah
import NavBarInside from '@/components/layout/NavBarInside/NavBar';

const CardBeranda = () => {
  const cardData = [
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'Deskripsi untuk Card 3' },
    { title: 'Card 4', description: 'Deskripsi untuk Card 4' },
  ];

  return (
    <>
      <NavBarInside />
      <div className="card-container">
        <div className="grid-container">
          {cardData.map((card, index) => (
            <div key={index} className="card-item">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        {/* Tambahkan DataTable di bawah cards */}
        <Hometable />
      </div>
    </>
  );
};

export default CardBeranda;
