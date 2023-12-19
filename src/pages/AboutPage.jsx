import React from 'react';
import { Link } from 'react-router-dom';
import coding from '../images/coding.jpg';
import me from '../images/me.jpg';
import iitu from '../images/iitu.jpg';

export default function AboutPage() {
  return (
    <main className="content">
      <section className="about">
        <div className="about__container">
          <div className="about__content">
            <h1 className="about__title">About Me</h1>
            <p className="about__txt">
            My name is Aruzhan. I am a 3rd year student at the International University of Information Technologies in Almaty. 
            </p>
            <Link to="https://t.me/aruka1707b" target={'_blank'} className="about__link button">Contact Me</Link>
          </div>
          <div className="about__images">
            <img src={me} alt="context image" className="about__img" />
            <img src={iitu} alt="context image" className="about__img" />
          </div>
        </div>
        <div className="about__container">
          <span className="about__blue-box"></span>
          <img src={coding} alt="context image" className="about__big-img" />
          <div className="about__content">
            <h1 className="about__title">My works</h1>
            <p className="about__txt">
            I love the colorfulness, color combinations and brightness. 
            There are two ways to design a program. One is to make it so simple that it will obviously have no flaws. The other way is to make it so intricate that there will be no obvious flaws in it.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}