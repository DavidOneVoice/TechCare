import logo from '../assets/logo.png';
import homeIcon from '../assets/home-icon.png';
import patientsIcon from '../assets/patients-icon.png';
import calendarIcon from '../assets/calendar-icon.png';
import messageIcon from '../assets/message-icon.png';
import creditCardIcon from '../assets/credit-card-icon.png';
import joseSimmons from '../assets/jose-simmons.png';
import settingsIcon from '../assets/settings-icon.png';
import moreOptionsIcon from '../assets/more.png';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <section id='logo'>
        <img src={logo} alt="Tech-core-logo" />
      </section>

      <section id='centermenu'>
        <div>
          <img src={homeIcon} alt="Home icon" />
          <span className='centermenulist'><b>Overview</b></span>
        </div>
        <div id='patients'>
          <img src={patientsIcon} alt="Patients icon" />
          <span className='centermenulist'><b>Patients</b></span>
        </div>
        <div>
          <img src={calendarIcon} alt="calendar icon" />
          <span className='centermenulist'><b>Schedule</b></span>
        </div>
        <div>
          <img src={messageIcon} alt="Message icon" />
          <span className='centermenulist'><b>Message</b></span>
        </div>
        <div>
          <img src={creditCardIcon} alt="credit card icon" />
          <span className='centermenulist'><b>Transactions</b></span>
        </div>
      </section>

      <section id='rightmenu'>
        <img src={joseSimmons} alt="Image of a senior doctor" />
        <article>
          <p id='jose'><b>Dr. Jose Simmons</b></p>
          <p>General Practitioner</p>
        </article>
        <span>|</span>
        <img src={settingsIcon} alt="Settings icon" />
        <img src={moreOptionsIcon} alt="More options icon" style={{height: '1em'}}/>
      </section>
    </div>
  );
}
