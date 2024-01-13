import transition from '../transition';
import {useMediaQuery} from 'usehooks-ts';
import {education} from '../utils/education';

import '../styles/education.css';

const Education = () => {
  const matches = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="bg-teal-600 bg-cover top-0 left-0 absolute h-full w-full">
      <div
        className="flex flex-row"
        style={{
          padding: matches ? '20vh 100px' : '10vh 20px',
          color: 'lightgray',
          fontFamily: 'Ubuntu',
          fontSize: '20px',
        }}>
        <div>
          {education.map((item) => (
            <div key={item.id}>
              <div className="education-title">
                {item.title}
                <span style={{fontSize: '16px', opacity: '0.6'}}>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {item.year}
                </span>
              </div>
              <div className="education-text">{item.field}</div>
              <div className="education-under-text">
                Certified No. {item.certified}
              </div>
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
      </div>
    </div>
  );
};

export default transition(Education);
