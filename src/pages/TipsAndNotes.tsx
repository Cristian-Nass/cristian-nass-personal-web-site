import {useMediaQuery} from 'usehooks-ts';
import transition from '../transition';

const TipsAndNotes = () => {
  const matches = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="bg-sky-200 bg-cover top-0 left-0 absolute h-full w-full">
      <div
        className="flex flex-row"
        style={{
          padding: matches ? '20vh 100px' : '10vh 20px',
          fontFamily: 'Ubuntu',
        }}>
        <h1 className="text-4xl text-stone-300 mb-8" style={{color: 'red'}}>
          Tips & Notes
        </h1>
        <div
          className={`text-stone-300 ${matches ? 'text-xl' : 'text-lg'} `}
          style={{color: 'red'}}>
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default transition(TipsAndNotes);
