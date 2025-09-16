import {Splide, SplideSlide} from '@splidejs/react-splide';
import Vest1 from '../assets/img/svgs/vest1.svg';
import Vest2 from '../assets/img/svgs/vest2.svg';
import Vest3 from '../assets/img/svgs/vest3.svg';
import Vest4 from '../assets/img/svgs/vest4.svg';
import Vest5 from '../assets/img/svgs/vest5.svg';

const SwanholmView = () => {
  const swanholmData = [
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
                fontSize: '24px',
                fontWeight: 'normal',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
              {item.title}
            </h1>
            <img src={item.image} alt={item.title} />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SwanholmView;
