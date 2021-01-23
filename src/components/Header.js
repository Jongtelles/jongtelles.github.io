function Header() {
  return (
    <header className='header'>
      <span>
        Jon Telles<i className='fas fa-laptop-code'></i>Software Engineer
      </span>
      <ul className='header--links'>
        {/* <li className='header--item'>
          <a className='header--link' href='#projects'>
            <i className='fas fa-flask'></i>Projects
          </a>
        </li> */}
        <li className='header--item'>
          <a
            className='header--link'
            href='https://drive.google.com/file/d/1VnTYC66Y8r_pYYQjSIlAy2Bkaw-uZ91B/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='my resume'
          >
            <i className='far fa-file-alt' title='my resume'></i>Resume
          </a>
        </li>
        <li className='header--item'>
          <a
            className='header--link'
            href='https://www.linkedin.com/in/jongtelles/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='my linkedin account'
          >
            <i className='fab fa-linkedin' title='my linkedin account'></i>
            LinkedIn
          </a>
        </li>
        <li className='header--item'>
          <a
            className='header--link'
            href='https://github.com/Jongtelles'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='my github account'
          >
            <i className='fab fa-github' title='my github account'></i>Github
          </a>
        </li>
        <li className='header--item'>
          <a
            className='header--link'
            href='mailto:jongtelles@gmail.com'
            aria-label='email me'
          >
            <i className='far fa-envelope' title='email me'></i>Email
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
