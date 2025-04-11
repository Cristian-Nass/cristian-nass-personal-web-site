interface ExperienceDetailsProps {
  id: number;
}
const ExperienceDetails = ({id}: ExperienceDetailsProps) => {
  if (id === 1)
    return (
      <>
        I work primarily as a Front-end developer, but I also assist with In
        addition to these technologies, I have experience with Firebase,
        FireStore, Google Cloud Functions, Sendgrid, and other tools and
        services essential for creating robust and efficient web applications
      </>
    );

  if (id === 2)
    return (
      <>
        I work primarily as a Front-end developer, but I also assist with
        Back-end tasks using Node.js.
        <br /> I'm proud to be part of a talented team that has successfully
        created and implemented various applications for a wide range of
        clients, including Uppsala Kummon, OKQ8, Preem, Circle-K, ST1, Svenska
        kyrka, Stuns Life, Fixi, and many others.
        <br />
        Our front-end work is mainly focused on React, although we have also
        undertaken a Vue.js project in the past.
        <br />
        On the back-end side, I've gained experience working with Node.js and
        Firebase.
        <br />
        For state management, we utilize various libraries and packages such as
        Redux Toolkit, MobX, Zustand, and useContext.
        <br />
        In terms of design and UI components, I'm proficient in working with Ant
        Design, Material UI, Style Components, Recharts, and more.
        <br />
        In addition to these technologies, I have experience with Firebase,
        FireStore, Google Cloud Functions, Sendgrid, and other tools and
        services essential for creating robust and efficient web applications
      </>
    );

  if (id === 3)
    return (
      <>
        I have designed and developed responsive and dynamic websites for
        restaurants.
        <br />
        Incorporating an Admin Control Panel.
        <br />I utilized Angular, HTML, CSS, Firebase, and Bootstrap to create a
        user-friendly interface.
        <br />
        Additionally, I have experience working with Adobe XD, Figma, Photoshop,
        and other tools for UI design.
      </>
    );

  if (id === 4)
    return (
      <>
        I have been part of teams involved in creating and designing numerous
        web applications for various industries, tutorials, genres, and more.
        <br />
        As a front-end developer, I primarily focused on tasks related to HTML,
        CSS, JavaScript, jQuery, and similar technologies.
        <br />
        However, I also had opportunities to contribute as a back-end developer,
        gaining experience with PHP, Java, and MySQL.
        <br />
        As a hobby, I did make a few little applications for Android with Java,
        SQLite, and Eclipse as IDE
      </>
    );
  if (id === 5)
    return (
      <>
        I worked at one of the largest advertising companies in my town, where
        we handled various fields of design.
        <br />
        Our projects included creating brochures, catalogs, billboards,
        advertising magazines, and more.
        <br />
        Additionally, I gained experience in 3D design using applications such
        as 3D-MAX, as well as a bit of industrial photography.
        <br />
        We regularly utilized Photoshop, CorelDraw, and other graphic
        applications for our design work.
        <br />
        Moreover, in recent months, I have also undertaken the design of a few
        static websites.
      </>
    );
  if (id === 6)
    return (
      <>
        During my time at this company.
        <br />A significant portion of my responsibilities involved designing
        tutorial books for kids.
        <br />
        These books encompassed various activities such as puzzles, coloring
        pages, games, math exercises, and more.
        <br />
        To accomplish this, we utilized a range of applications including Adobe
        Photoshop, Freehand, CorelDraw, InDesign, and others.
      </>
    );
  return <></>;
};

export default ExperienceDetails;
