import {useHTMLData} from '../store/useHTMLData';

const NotesView = () => {
  const {data} = useHTMLData();
  return (
    <div>
      {data.map((item) => (
        <div key={item.title}>
          <h1>{item.title}</h1>
          <h2>{item.subTitle}</h2>
          <p>{item.description}</p>
          <p>{item.example}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesView;
