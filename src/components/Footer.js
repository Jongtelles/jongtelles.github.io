function Footer() {
  const time = new Date().getFullYear();
  return (
    <footer className='footer'>
      <p className='footer--copyright'>
        <i className='far fa-copyright'></i> Jon Telles {time}
      </p>
      <p className='footer--blurb'>🙃 Made by a human being 🙃</p>
      <a
        className='gh--link'
        href='https://github.com/Jongtelles/jongtelles.github.io'
      >
        <span>Github Link</span>
      </a>
    </footer>
  );
}

export default Footer;
