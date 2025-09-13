import {useHTMLData} from '../store/useHTMLData';
import NoteView from './notes/NoteView';

const NotesView = () => {
  const {data} = useHTMLData();
  return (
    <div>
      {data.map((item) => (
        <NoteView key={item.title} item={item} />
      ))}
    </div>
  );
};

export default NotesView;
