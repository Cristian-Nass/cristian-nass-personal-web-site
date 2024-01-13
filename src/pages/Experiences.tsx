import {useState} from 'react';
import transition from '../transition';
import {useMediaQuery} from 'usehooks-ts';
import {experiences} from '../utils/experiences';
import '../styles/experiences.css';
import ExperienceDetails from '../components/ExperienceDetails';
import Modal from '../components/Modal';

const Experiences = () => {
  const matches = useMediaQuery('(min-width: 1024px)');
  const [currentId, setCurrentId] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-sky-600 bg-cover top-0 left-0 absolute h-full w-full">
      <div
        className="flex flex-row"
        style={{
          backgroundColor: '#0284c7',
          padding: matches ? '20vh 100px' : '10vh 20px',
          color: 'lightgray',
          fontFamily: 'Ubuntu',
        }}>
        <div style={{width: '260px', display: 'block'}}>
          {experiences.map((item) => (
            <div
              key={item.id}
              className="experiences-wrapper"
              onClick={() => {
                setCurrentId(item.id === currentId ? 0 : item.id),
                  setModalOpen(true);
              }}>
              <div className="experiences-title">{item.company}</div>
              <div>{item.job}</div>
              <div>{item.location}</div>
              <div>{item.year}</div>
              <div
                style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'white',
                  opacity: '0.2',
                  marginBottom: '12px',
                  marginTop: '2px',
                }}></div>
            </div>
          ))}
        </div>
        {matches ? (
          <div style={{width: '100%', paddingLeft: '60px', paddingTop: '5%'}}>
            <ExperienceDetails id={currentId} />
          </div>
        ) : (
          <Modal open={modalOpen} closeModal={closeModal} id={currentId} />
        )}
      </div>
    </div>
  );
};

export default transition(Experiences);
