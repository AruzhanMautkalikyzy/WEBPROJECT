import React from 'react';
import { Link } from 'react-router-dom';
import insta from '../images/insta.svg';
import mail from '../images/mail.svg';
import telega from '../images/telega.svg';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__top">
          <div className="footer__info">
            <Link to="/home" className="footer__logo-container link">
              <p className="footer__logo-txt">IdeaNest</p>
            </Link>
            <p className="footer__info-txt">
            An app for creating different ideas and recording them on the homepage.
            </p>
          </div>
          <nav className="footer__nav">
            <p className="footer__subtitle">
              QUICK LINKS
            </p>
            <ul className="footer__menu">
              <li className="footer__menu-item">
                <Link to="/about" className="footer__link link">About me</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/home" className="footer__link link">Blog</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="*" className="footer__link link">Page</Link>
              </li>
            </ul>
          </nav>
          <div className="footer__contacts">
            <p className="footer__subtitle">CONTACTS</p>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="https://www.instagram.com/aruka_1707b/" target={'_blank'} className="footer__icon-box">
                  <span className="footer__icon">
                    <img src={insta} alt="icon" className="footer__icon-img" />
                  </span>
                </Link>
                <div className="footer__item-content">
                  <p className="footer__social">Instagram</p>
                  <p className="footer__social-name">aruka_1707b</p>
                </div>
              </li>
              <li className="footer__item">
                <Link to="https://t.me/aruka1707b" target={'_blank'} className="footer__icon-box">
                  <span className="footer__icon">
                    <img src={telega} alt="icon" className="footer__icon-img" />
                  </span>
                </Link>
                <div className="footer__item-content">
                  <p className="footer__social">Telegram</p>
                  <p className="footer__social-name">aruka_1707b</p>
                </div>
              </li>
              <li className="footer__item">
                <Link to="mailto:bolysbek.aruzhan@bk.ru" target={'_blank'} className="footer__icon-box">
                  <span className="footer__icon">
                    <img src={mail} alt="icon" className="footer__icon-img" />
                  </span>
                </Link>
                <div className="footer__item-content">
                  <p className="footer__social">E-mail</p>
                  <p className="footer__social-name">bolysbek.aruzhan@bk.ru</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__rights">
          ©IdeaNest. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}