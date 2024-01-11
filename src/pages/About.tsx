import transition from '../transition';
const About = () => {
  return (
    <div className="bg-red-500 bg-cover top-0 left-0 absolute h-full w-full">
      <div
        className="flex flex-row"
        style={{padding: '400px 100px', color: 'lightgray'}}>
        <div className="basis-1/2">
          As someone who works in this field, I can tell you that it is both
          challenging and rewarding. Front-end development involves building the
          parts of a website or application that users interact with directly.
          This includes things like the layout, user interface, and overall
          design. As a result, it requires strong attention to detail and a good
          eye for aesthetics. One of the things I love about front-end
          development is the constant opportunity to learn and grow. There are
          always new technologies and techniques emerging, and staying up to
          date on them is a must. But this also means that there's always room
          for improvement and experimentation. I hope this gives you a better
          sense of what it's like to be a front-end developer. Best regards,
          Cristian.
        </div>
        <div className="basis-1/2"></div>
      </div>
    </div>
  );
};

export default transition(About);
