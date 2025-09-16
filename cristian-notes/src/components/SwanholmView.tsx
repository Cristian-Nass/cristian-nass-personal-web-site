import {Splide, SplideSlide} from '@splidejs/react-splide';
import Vest0 from '../assets/img/svgs/vest0.svg';
import Vest1 from '../assets/img/svgs/vest1.svg';
import Vest2 from '../assets/img/svgs/vest2.svg';
import Vest3 from '../assets/img/svgs/vest3.svg';
import Vest4 from '../assets/img/svgs/vest4.svg';
import Vest5 from '../assets/img/svgs/vest5.svg';
const SwanholmView = () => {
  const swanholmData = [
    {
      key: 0,
      title: 'AI vest, Be safe',
      image: Vest0,
    },
    {
      key: 1,
      title: 'Aktivt Printat Ljus',
      image: Vest1,
    },
    {
      key: 2,
      title: 'Alarn Knapp',
      image: Vest2,
    },
    {
      key: 3,
      title: 'Elektronisk Krage',
      image: Vest3,
    },
    {
      key: 4,
      title: 'Reflex',
      image: Vest4,
    },

    {
      key: 5,
      title: 'Flickor',
      image: Vest5,
    },
    {
      key: 6,
      title: '',
      image: '',
    },
  ];

  return (
    <Splide aria-label=" HTML semantic structure">
      {swanholmData.map((item) => (
        <SplideSlide key={item.key}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '461px',
              margin: '0 auto',
              color: 'yellow',
            }}>
            <h1
              style={{
                fontSize: '20px',
                fontWeight: 'normal',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
              {item.title}
            </h1>
            {item.key === 6 && (
              <a href="https://swanholm-technology.vercel.app/" target="_blank">
                <button
                  style={{
                    backgroundColor: 'gold',
                    border: 'none',
                    marginTop: '30vh',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    padding: '10px 20px',
                    fontSize: '16px',
                    width: '80%',
                    fontWeight: 'bold',
                  }}>
                  Click Here for more information
                </button>
              </a>
            )}
            <img src={item.image} alt={item.title} />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SwanholmView;
