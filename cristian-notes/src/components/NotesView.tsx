import {useEffect} from 'react';
import {useHTMLDataStore} from '../store/useHTMLDataStore';
import NoteView from './notes/NoteView';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import Navbar from './Navbar';

const NotesView = () => {
  const {data, getHTMLData} = useHTMLDataStore();

  useEffect(() => {
    getHTMLData();
  }, [getHTMLData]);

  console.log(data);
  return (
    <>
      <Navbar />
      <p style={{textAlign: 'center', color: 'yellow', fontSize: '30px'}}>
        {data.about}
      </p>
      <Splide aria-label=" HTML semantic structure">
        {data.htmlData
          .filter((item) => item.type === 'semantic-html')
          .map((item) => (
            <SplideSlide key={item.title}>
              <NoteView item={item} />
            </SplideSlide>
          ))}
      </Splide>
    </>
  );
};

export default NotesView;
