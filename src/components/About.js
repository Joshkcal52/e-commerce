import React from "react";

const About = () => {
  return (
    <body>
      <header>
        <h1>About Us</h1>
      </header>
      <main>
        <section>
          <h2>My Capstone Process</h2>
          <p>
            Welcome to my online store! I'm excited to share my journey in
            creating this project with you.
          </p>
          <p>
            The journey of creating my capstone project has been both
            challenging and rewarding. From the beginning, my goal was to build
            an intuitive and user-friendly e-commerce website that allows users
            to explore and shop a variety of products. I started by
            brainstorming ideas and eventually settled on building an online
            store that offers a diverse range of products, from jewelry and
            electronics to clothing.
          </p>
          <p>
            Throughout the development process, I focused on creating a seamless
            user experience. I collaborated closely with my team to design and
            implement the frontend of the website using React. We integrated the
            FakeStoreAPI to fetch real product data and categories, giving my
            project a real-world feel. Implementing features like product
            modals, a dynamic shopping cart, and category navigation challenged
            me to expand my coding skills and problem-solving abilities.
          </p>
        </section>
        <section>
          <h2>Overcoming Frontend Struggles</h2>
          <p>
            The frontend course was an incredible learning experience, but it
            came with its share of challenges. One of the main struggles I faced
            was managing state across different components. My cart system
            required synchronized state updates and persistent storage. To
            overcome this, I utilized React's state management and
            sessionStorage to ensure that the cart items persisted across page
            refreshes and navigation.
          </p>
          <p>
            Styling and responsive design were also key hurdles. Finding the
            balance between aesthetics and functionality was often tricky. Media
            queries and CSS frameworks helped me achieve a responsive and
            visually appealing layout across various devices.
          </p>
        </section>
        <section>
          <h2>My Favorite Language</h2>
          <p>
            In the world of frontend development, I learned to love JavaScript
            and React. JavaScript's versatility and dynamic nature allowed me to
            create interactive and engaging user interfaces.
          </p>
          <p>
            Additionally, CSS gave me the power to style and design my website,
            allowing me to bring my creative vision to life. I combined CSS with
            preprocessors like SCSS to write cleaner and more organized styles.
            I really enjoyed styling this project and am proud of the final
            result!
          </p>
        </section>
      </main>
    </body>
  );
};

export default About;
