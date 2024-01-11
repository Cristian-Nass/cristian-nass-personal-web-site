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
        Web App Developer
        <div>Web App Developer</div>
      </div>
    </>
  );
};

export default transition(Home);
