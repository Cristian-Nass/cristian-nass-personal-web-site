interface ExperienceDetailsProps {
  id: number;
}
const ExperienceDetails = ({id}: ExperienceDetailsProps) => {
  if (id === 1)
    return (
      <>
        Engineered a Scalable and Responsive Progressive Web App front-end
        architecture utilizing
        <span className="font-bold text-xl text-yellow-500"> Next.js</span>,
        <span className="font-bold text-xl text-yellow-500"> Storybook</span>{' '}
        for component-driven development,
        <span className="font-bold text-xl text-yellow-500">
          {' '}
          TailwindCSS
        </span>{' '}
        for utility-first styling, and
        <span className="font-bold text-xl text-yellow-500"> ShadCN</span> for
        enhanced UI/UX consistency.
        <br />
        <br />
        Integrated{' '}
        <span className="font-bold text-xl text-yellow-500">Supabase</span> to
        power the backend with real-time data synchronization, secure
        authentication, and efficient database management, ensuring seamless
        interaction between the front-end and server-side functionalities.
        <br />
        <br />
        Implemented{' '}
        <span className="font-bold text-xl text-yellow-500">PostHog</span> for
        comprehensive product analytics, enabling real-time tracking of user
        behavior and actionable insights for optimizing the user experience and
        driving data-driven improvements.
        <br />
        <br />
      </>
    );

  if (id === 2)
    return (
      <>
        I work primarily as a Front-end developer, but I also assist with
        Back-end tasks using Node.js.
        <br /> <br /> I'm proud to be part of a talented team that has
        successfully created and implemented various applications for a wide
        range of clients, including{' '}
        <span className="font-bold text-xl text-yellow-500">
          Uppsala Kummon
        </span>
        , <span className="font-bold text-xl text-yellow-500"> OKQ8</span>,
        <span className="font-bold text-xl text-yellow-500"> Preem</span>,
        <span className="font-bold text-xl text-yellow-500"> Circle-K</span>,
        <span className="font-bold text-xl text-yellow-500"> ST1</span>,
        <span className="font-bold text-xl text-yellow-500">
          {' '}
          Svenska kyrka
        </span>
        , <span className="font-bold text-xl text-yellow-500">Stuns Life</span>,
        and <span className="font-bold text-xl text-yellow-500">Fixi</span>.
        <br />
        <br />
        Our front-end work is mainly focused on{' '}
        <span className="font-bold text-xl text-yellow-500">
          React
        </span> and{' '}
        <span className="font-bold text-xl text-yellow-500">Vue js</span>,
        although we have also
        <br />
        <br />
        On the back-end side, I've gained experience working with{' '}
        <span className="font-bold text-xl text-yellow-500">Node.js</span> and
        <span className="font-bold text-xl text-yellow-500"> Firebase</span>.
        <br />
        <br />
        For state management, we utilize various libraries and packages such as
        <span className="font-bold text-xl text-yellow-500">Redux Toolkit</span>
        , <span className="font-bold text-xl text-yellow-500">MobX</span>,
        <span className="font-bold text-xl text-yellow-500"> Zustand</span>, and
        <span className="font-bold text-xl text-yellow-500"> useContext</span>.
        <br />
        <br />
        In terms of design and UI components, I'm proficient in working with Ant
        Design, Material UI, Style Components, Recharts, and more.
        <br />
        <br />
        In addition to these technologies, I have experience with{' '}
        <span className="font-bold text-xl text-yellow-500">Firebase</span>,
        <span className="font-bold text-xl text-yellow-500">FireStore</span>,{' '}
        <span className="font-bold text-xl text-yellow-500">
          Google Cloud Functions
        </span>
        , <span className="font-bold text-xl text-yellow-500">Sendgrid</span>,
        and other tools and services essential for creating robust and efficient
        web applications
      </>
    );

  if (id === 3)
    return (
      <>
        I have designed and developed responsive and dynamic websites for
        restaurants.
        <br />
        Incorporating an Admin Control Panel.
        <br />I utilized{' '}
        <span className="font-bold text-xl text-yellow-500">Angular</span>,
        HTML, CSS,
        <span className="font-bold text-xl text-yellow-500"> Firebase</span>,
        and <span className="font-bold text-xl text-yellow-500">Bootstrap</span>{' '}
        to create a user-friendly interface.
        <br />
        Additionally, I have experience working with
        <span className="font-bold text-xl text-yellow-500">
          {' '}
          Adobe XD
        </span>,{' '}
        <span className="font-bold text-xl text-yellow-500">Figma</span>,
        <span className="font-bold text-xl text-yellow-500"> Photoshop</span>,
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
