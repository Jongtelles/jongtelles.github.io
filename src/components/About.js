function About() {
  return (
    <div className='about'>
      <h2>About Me</h2>
      <div className='flex-container flex-evenly'>
        <div
          className='about--img'
          alt="headshot of a very cool and handsome smiling man (it's me)"
        ></div>
        <div className='about--list-container'>
          <ul className='about--list'>
            <li>
              <i className='fab fa-node-js'></i>
              Full Stack Web Developer that loves JavaScript
            </li>
            <li>
              <i className='far fa-comments'></i>
              Strong communicator with a knack for translating technical
              concepts into plain English (or terrible Spanish)
            </li>
            <li>
              <i className='fas fa-rocket'></i>
              Able to quickly implement new technologies; I live for solving
              complex problems and learning new things
            </li>
            <li>
              <i className='fas fa-brain'></i>I don't know how to do everything,
              but I know how to find out how to do <em>anything</em>
            </li>
            <li>
              <i className='fas fa-coffee'></i>I’ll <strong>always</strong> make
              the coffee
            </li>
          </ul>
        </div>
      </div>
      <p className='about--tech-skills'>
        <strong>Stack 🥞:</strong> React (Hooks) | Vue | Node | JavaScript
        (ES2015+) | SCSS/SASS | CSS3 (animations) | HTML5 | jQuery
        <br />
        <strong>Data 💾:</strong> JSON | GraphQL | MySQL | MongoDB | REST | APIs
        <br />
        <strong>Misc 🔀:</strong> Git | Testing (Jest/Enzyme) | Design Systems |
        Agile | JIRA | InVision | BEM | 508 compliance | NPM | Babel | Docker | Gulp
        <br />
        <strong>Looking Into 👀:</strong> Svelte | Deno | Dgraph | Kubernetes | FaunaDB |
        Gatsby | WASM | Rust
      </p>
    </div>
  );
}

export default About;
