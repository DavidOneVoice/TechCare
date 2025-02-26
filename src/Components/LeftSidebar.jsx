import { useEffect, useState } from 'react';
import { getPatientData } from '../api';
import moreIcon2 from '../assets/more_horiz_FILL0_wght300_GRAD0_opsz24@2x.png';
import searchIcon from '../assets/search_FILL0_wght300_GRAD0_opsz24.png';

export default function LeftSidebar() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPatientData();
      if (data) {
        setPeople(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div id="leftsidebar" style={{ height: '100vh' }}>
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h3>Patients</h3>
        <img src={searchIcon} alt="Search Icon" />
      </section>

      <div style={{ maxHeight: 'calc(100vh - 5em)', overflowY: 'auto' }}>
        {people.map((person, index) => (
          <section
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '1em',
              alignItems: 'center',
              padding: '0 1em',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                style={{ height: '3em', marginRight: '1em' }}
                src={person.profile_picture}
                alt="Patient Image"
              />
              <span>
                <p style={{ fontSize: '0.8em', marginBottom: '-0.5em' }}>
                  <b>{person.name}</b>
                </p>
                <p style={{ fontSize: '0.8em' }}>
                  {person.gender}, {person.age}
                </p>
              </span>
            </div>
            <img style={{ width: '1em' }} src={moreIcon2} alt="" />
          </section>
        ))}
      </div>
    </div>
  );
}
