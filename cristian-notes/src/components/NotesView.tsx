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
    <>
      <p style={{textAlign: 'center', color: 'yellow', fontSize: '30px'}}>
        {data.about}
      </p>
      <Splide aria-label=" HTML semantic structure">
        {data.htmlData.map((item) => (
          <SplideSlide key={item.title}>
            <NoteView item={item} />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default NotesView;
