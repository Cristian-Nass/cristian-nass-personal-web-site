import {useHTMLData} from '../store/useHTMLData';

const NotesView = () => {
  const {title, subTitle, description, example} = useHTMLData();
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>{description}</p>
      <p>{example}</p>
    </div>
  );
};

export default NotesView;
