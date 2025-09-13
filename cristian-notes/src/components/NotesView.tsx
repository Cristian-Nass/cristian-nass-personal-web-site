import {useEffect} from 'react';
import {useHTMLData} from '../store/useHTMLData';
import NoteView from './notes/NoteView';
import {Splide, SplideSlide} from '@splidejs/react-splide';

const NotesView = () => {
  const {data, getHTMLData} = useHTMLData();

  useEffect(() => {
    getHTMLData();
  }, [getHTMLData]);

  return (
    <Splide aria-label="My Favorite Images">
      {data.map((item) => (
        <SplideSlide key={item.title}>
          <NoteView item={item} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default NotesView;
