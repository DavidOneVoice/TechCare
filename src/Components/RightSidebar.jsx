import { useEffect, useState } from 'react';
import { getPatientData } from '../api';
import calendarIcon from '../assets/calendar-icon.png';
import phoneIcon from '../assets/phoneicon.png';
import femaleIcon from '../assets/femaleicon.png';
import insuranceIcon from '../assets/insuranceicon.png';
import downloadIcon from '../assets/download-icon.png';

export default function RightSidebar() {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPatientData();
      console.log(data[3]);
      if (data) {
        setPatient(data[3]);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="sidebar" style={{ display: 'flex', flexDirection: 'column' }}>
      {patient ? (
        <div id="rightsidebar">
          <img id="jessica-img" src={patient.profile_picture} alt="Patient's image" />
          <h2>{patient.name}</h2>
          <section>
            <img className="rightsidebaricons" src={calendarIcon} alt="Calendar Icon" />
            <span>
              <p>Date Of Birth</p>
              <p>{patient.date_of_birth}</p>
            </span>
          </section>
          <section>
            <img className="rightsidebaricons" src={femaleIcon} alt="Female Gender Icon" />
            <span>
              <p>Gender</p>
              <p>{patient.gender}</p>
            </span>
          </section>
          <section>
            <img className="rightsidebaricons" src={phoneIcon} alt="Phone Icon" />
            <span>
              <p>Contact Info</p>
              <p>{patient.phone_number}</p>
            </span>
          </section>
          <section>
            <img className="rightsidebaricons" src={phoneIcon} alt="Phone Icon" />
            <span>
              <p>Emergency Contacts</p>
              <p>{patient.emergency_contact}</p>
            </span>
          </section>
          <section>
            <img className="rightsidebaricons" src={insuranceIcon} alt="Insurance Icon" />
            <span>
              <p>Insurance Provider</p>
              <p>{patient.insurance_type}</p>
            </span>
          </section>
          <button id="showinfobtn">Show All Information</button>
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>Loading patient details...</p>
      )}

      <div id="rightsidebar2">
        {patient && patient.lab_results ? (
          <>
            <h2>Lab Results</h2>
            {patient.lab_results.map((result, index) => (
              <section key={index}>
                <span>{result}</span>
                <img src={downloadIcon} alt="Download Icon" />
              </section>
            ))}
          </>
        ) : (
          <p>No lab results available.</p>
        )}
      </div>
    </section>
  );
}
