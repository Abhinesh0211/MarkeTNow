import React from 'react';
import '../styles/NewsSection.css';

const news = [
  { title: 'Politics', text: 'Eu anim nostrud ex aliquip proident...', img: 'https://via.placeholder.com/150' },
  { title: 'Health', text: 'Enim commodo est ipsum fugiat fugiat...', img: 'https://via.placeholder.com/150' },
  { title: 'Sports', text: 'Culpa sunt ad ad officia...', img: 'https://via.placeholder.com/150' },
  { title: 'Crime', text: 'How A Parking Dispute...', img: 'https://via.placeholder.com/150' },
  { title: 'Tech', text: "Watch - 'Pagal Hai Kya?'...", img: 'https://via.placeholder.com/150' },
  { title: 'World', text: '100 Hours On...', img: 'https://via.placeholder.com/150' }
];

const NewsSection: React.FC = () => {
  return (
    <section className="news">
      <h2>News</h2>
      <div className="news-cards">
        {news.map((item, i) => (
          <div key={i} className="news-card">
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;