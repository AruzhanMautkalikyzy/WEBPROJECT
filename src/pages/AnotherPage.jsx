import React from 'react';
import { Link } from 'react-router-dom';

export default function AnotherPage() {
  return (
    <section className="another-page">
      <h1 className="another-page__title">
      A personal blog provides me with a unique opportunity to express my thoughts, ideas, and experiences online. Creating my own sharing platform allows me to share my knowledge, passions, and learning with others. 
      It becomes a kind of digital diary where I can reflect my professional and personal growth.
      </h1>
      <Link to="/home" className="another-page__link">Home</Link>
    </section>
  )
}

