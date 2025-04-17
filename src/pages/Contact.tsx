import transition from '../transition';
import {useMediaQuery} from 'usehooks-ts';

const Contact = () => {
  const matches = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="bg-emerald-800 bg-cover top-0 left-0 absolute h-full w-full">
      <div
        className="flex flex-row"
        style={{
          padding: matches ? '20vh 100px' : '10vh 20px',
          color: 'lightgray',
          fontFamily: 'Ubuntu',
          fontSize: '20px',
        }}>
        <div
          className={matches ? 'basis-2/3' : undefined}
          style={{userSelect: 'text'}}>
          Email:{' '}
          <a
            className="contact-hover-mouse"
            target="_blank"
            href="mailto: cristian.tirdad@gmail.com">
            cristian.tirdad@gmail.com
          </a>
          <br />
          Mobil: +46 762931896
          <br />
          Address: Uppsala, Sweden
          <br />
          Website: cristian-nass.web.app
          <br />
          Linkedin:{' '}
          <a
            className="contact-hover-mouse"
            href="https://linkedin.com/in/cristnass"
            target="_blank">
            linkedin.com/in/cristnass
          </a>
          <br />
          Github:{' '}
          <a
            className="contact-hover-mouse"
            href="https://github.com/cristian-nass"
            target="_blank">
            github.com/cristian-nass
          </a>
        </div>
        {matches && <div className="basis-1/3"></div>}
      </div>
    </div>
  );
};

export default transition(Contact);
