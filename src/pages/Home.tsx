import transition from '../transition';

const Home = () => {
  return (
    <>
      <div
        className={`bg-cover
      top-0 left-0
      absolute
      h-full
      w-full
      bg-[url('assets/images/cristian.jpg')]
      bg-right`}>
        <div style={{paddingTop: '50vh'}}>
          <div className="home-page-title">Web App Developer</div>
          <div className="home-page-text">Specialty: Front-end Developer</div>
        </div>
      </div>
    </>
  );
};

export default transition(Home);
