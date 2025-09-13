import {type HTMLDataItem} from '../../store/useHTMLData';
const NoteView = ({item}: {item: HTMLDataItem}) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <h2>{item.subTitle}</h2>
      <p>{item.description}</p>
      <p>{item.example}</p>
    </div>
  );
};

export default NoteView;
