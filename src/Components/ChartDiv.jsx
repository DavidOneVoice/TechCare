import { useEffect, useState, useRef } from 'react';
import { getPatientData } from '../api';
import { Chart } from 'chart.js/auto';
import arrowUpIcon from '../assets/ArrowUp.png';
import arrowDownIcon from '../assets/ArrowDown.png';
import expandIcon from '../assets/expand-icon.png';
import respRate from '../assets/resp-icon.png';
import heartRate from '../assets/heart-rate-icon.png';
import tempIcon from '../assets/temp-icon.png';

export default function ChartDiv() {
  const [patientInfo, setPatientInfo] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPatientData();
      console.log(data[3]);
      if (data) {
        setPatientInfo(data[3]);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (patientInfo && patientInfo.diagnosis_history) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
  
      const canvas = document.getElementById('myChart');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        chartRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024'],
            datasets: [
              {
                label: 'Systolic',
                data: [120, 118, 160, 115, 150, 158],
                borderColor: '#E66FD2',
                tension: 0.4,
              },
              {
                label: 'Diastolic',
                data: [108, 65, 110, 95, 75, 78],
                borderColor: '#8C6FE6',
                tension: 0.4,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false,
                position: 'bottom',
              },
            },
          },
        });
      }
    }
  }, [patientInfo]);
  

  return (
    <div id="chart">
      <section id="chart-section" style={{backgroundColor: 'white', borderRadius: '20px'}}>
        <h2>Diagnosis History</h2>
        <div className="chart-container">
          <section id="chart-section2">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>Blood Pressure</h3>
              <span id='expand'
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <p style={{ fontSize: '0.8em' }}>Last 6 Months</p>
                <img style={{ width: '1em' }} src={expandIcon} alt="Expand Icon" />
              </span>
            </div>
            <canvas id="myChart"></canvas>
          </section>
                
          <section id='systolic'>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: '0.8em',
                  backgroundColor: '#E66FD2',
                  height: '0.8em',
                  marginRight: '0.5em',
                  borderRadius: '50%',
                }}
              ></div>
              <p className='sp' style={{ fontSize: '0.8em' }}>
                <b>Systolic</b>
              </p>
            </span>
            <h2 className='sh2' style={{ margin: '0em' }}>
              {patientInfo?.diagnosis_history[0]?.blood_pressure?.systolic?.value || 'N/A'}
            </h2>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <img src={arrowUpIcon} alt="Arrow Up Icon" />
              <p className='sp' style={{ fontSize: '0.8em', marginLeft: '0.5em' }}>
                {patientInfo?.diagnosis_history[0]?.blood_pressure?.systolic?.levels || 'N/A'}
              </p>
            </span>
            <div style={{ backgroundColor: '#CBC8D4', height: '0.1em' }}></div>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: '0.8em',
                  backgroundColor: '#8C6FE6',
                  height: '0.8em',
                  marginRight: '0.5em',
                  borderRadius: '50%',
                }}
              ></div>
              <p className='sp' style={{ fontSize: '0.8em' }}>
                <b>Diastolic</b>
              </p>
            </span>
            <h2 className='sh2' style={{ margin: '0em' }}>
              {patientInfo?.diagnosis_history[0]?.blood_pressure?.diastolic?.value || 'N/A'}
            </h2>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <img src={arrowDownIcon} alt="Arrow Down Icon" />
              <p className='sp' style={{ fontSize: '0.8em', marginLeft: '0.5em' }}>
                {patientInfo?.diagnosis_history[0]?.blood_pressure?.diastolic?.levels || 'N/A'}
              </p>
            </span>
          </section>
        </div>

        <section id="basic-info">
            <div className='basicinfo-divs' style={{display: 'flex', backgroundColor: '#E0F3FA', flexWrap: 'wrap', borderRadius: '20px', flexDirection: 'column', padding: '1em'}}>
                <img style={{width: '6em'}} src={respRate} alt="Respiratory Rate Icon" />
                <p>Respiratory Rate</p>
                <h2 style={{marginTop: '-0.5em', marginBottom: '-0.3em'}}>{patientInfo?.diagnosis_history[0]?.respiratory_rate?.value}bpm</h2>
                <p>{patientInfo?.diagnosis_history[0]?.respiratory_rate?.levels}</p>
            </div>
            <div className='basicinfo-divs' style={{display: 'flex', backgroundColor: '#FFE6E9', flexWrap: 'wrap', borderRadius: '20px', flexDirection: 'column', padding: '1em'}}>
                <img style={{width: '6em'}} src={tempIcon} alt="Temperature Icon" />
                <p>Temperature</p>
                <h2 style={{marginTop: '-0.5em', marginBottom: '-0.3em'}}>{patientInfo?.diagnosis_history[0]?.temperature?.value}°F</h2>
                <p>{patientInfo?.diagnosis_history[0]?.temperature?.levels}</p>
            </div>
            <div className='basicinfo-divs' style={{display: 'flex', backgroundColor: '#FFE6F1', flexWrap: 'wrap', borderRadius: '20px', flexDirection: 'column', padding: '1em'}}>
                <img style={{width: '6em'}} src={heartRate} alt="Heart Rate Icon" />
                <p>Heart Rate</p>
                <h2 style={{marginTop: '-0.5em', marginBottom: '-0.3em'}}>{patientInfo?.diagnosis_history[0]?.heart_rate?.value}bpm</h2>
                <p><img style={{marginRight: '1em'}} src={arrowDownIcon} />{patientInfo?.diagnosis_history[0]?.heart_rate?.levels}</p>
            </div>
        </section>
        </section>

        <section id="diagnostic" style={{ backgroundColor: 'white', marginTop: '2em', borderRadius: '20px' }}>
  <h2 style={{ marginBottom: '1em' }}>Diagnostic List</h2>
  <div style={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', gap: '2em' }}>
    <span className='diagnostic-h3' style={{width: '27%'}}><h3>Problem/Diagnosis</h3></span>
    <span className='diagnostic-h3' style={{width: '43%'}}><h3>Description</h3></span>
    <span className='diagnostic-h3' style={{width: '30%'}}><h3>Status</h3></span>
  </div>
  {patientInfo?.diagnostic_list.map((item, index) => (
    <div
      key={index}
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        textAlign: 'left',
        gap: '2em',
        marginTop: '1em',
      }}
    >
      <span style={{width: '27%'}}>{item?.name}</span>
      <span style={{width: '43%'}}>{item?.description}</span>
      <span style={{width: '30%'}}>{item?.status}</span>
    </div>
  ))}
</section>

    </div>
  );
}
