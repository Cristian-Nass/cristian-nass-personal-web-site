import transition from '../transition';
import {useMediaQuery} from 'usehooks-ts';
import {experiences} from '../utils/experiences';
import '../styles/experiences.css';

const Experiences = () => {
  const matches = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="bg-sky-600 bg-cover top-0 left-0 absolute h-full w-full">
      <div
        className="flex flex-row"
        style={{
          backgroundColor: '#0284c7',
          padding: matches ? '20vh 100px' : '10vh 20px',
          color: 'lightgray',
          fontFamily: 'Ubuntu',
          fontSize: '20px',
        }}>
        <div style={{flex: '1'}}>
          {experiences.map((item) => (
            <div key={item.id} className="experiences-wrapper ">
              <div className="experiences-title">{item.company}</div>
              <div>{item.job}</div>
              <div>{item.location}</div>
              <div>{item.year}</div>
            </div>
          ))}
        </div>
        <div style={{flex: '4'}}>
          I work primarily as a Front-end developer, but I also assist with
          Back-end tasks using Node.js.
          <br /> I'm proud to be part of a talented team that has successfully
          created and implemented various applications for a wide range of
          clients, including Uppsala Kummon, OKQ8, Preem, Circle-K, ST1, Svenska
          kyrka, Stuns Life, Fixi, and many others.
          <br />
          Our front-end work is mainly focused on React, although we have also
          undertaken a Vue.js project in the past.
          <br />
          On the back-end side, I've gained experience working with Node.js and
          Firebase.
          <br />
          For state management, we utilize various libraries and packages such
          as Redux Toolkit, MobX, Zustand, and useContext.
          <br />
          In terms of design and UI components, I'm proficient in working with
          Ant Design, Material UI, Style Components, Recharts, and more.
          <br />
          In addition to these technologies, I have experience with Firebase,
          FireStore, Google Cloud Functions, Sendgrid, and other tools and
          services essential for creating robust and efficient web applications
        </div>
      </div>
    </div>
  );
};

export default transition(Experiences);
