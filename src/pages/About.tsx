import transition from '../transition';
import {useMediaQuery} from 'usehooks-ts';

const About = () => {
  const matches = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="bg-red-500 bg-cover top-0 left-0 absolute h-full w-full">
      <div
        className="flex flex-row"
        style={{
          backgroundColor: '#ef4444',
          padding: matches ? '20vh 100px' : '10vh 20px',
          color: 'lightgray',
          fontFamily: 'Ubuntu',
          fontSize: '20px',
        }}>
        <div className={matches ? 'basis-2/3' : undefined}>
          I am an experienced software engineer with a robust background in
          programming, boasting a proven track record of successfully developing
          a diverse range of applications.
          <br />
          Throughout my career, I have made significant contributions to
          numerous projects, both collaboratively and independently.
          <br />
          <br />
          In recent years, I have specialized in front-end development,
          utilizing advanced libraries and frameworks such as React, Angular,
          and Vue.
          <br />
          My proficiency extends to complementary technologies like NodeJS,
          Firebase, Github, GitAction, RestAPI, and Docker.
          <br />
          <br />
          I honed my skills by creating various websites and web applications
          using HTML, CSS, jQuery, and vanilla JavaScript.
          <br />
          <br />
          While my earlier experiences involved developing Android applications
          using Java with the Eclipse IDE during the Android 4 era, I also built
          applications for Windows using Windows Forms and C#.
          <br />
          <br />
          Currently, my primary goal is to further expand my expertise in
          front-end development and TypeScript I am exploring additional tools
          like NextJS, NodeJS, and Docker to enhance my skill set.
          <br />
          <br />
          Committed to continuous learning, I actively seek opportunities to
          stay abreast of the latest developments in the field. Also, I am
          interested in expanding my knowledge about micro-frontend, React
          nattive, and more.
        </div>
        {matches && <div className="basis-1/3"></div>}
      </div>
    </div>
  );
};

export default transition(About);
