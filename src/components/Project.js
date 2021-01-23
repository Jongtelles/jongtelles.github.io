function Project({ name, url, repo, desc, alt, img }) {
  return (
    <article className='project'>
      <i className='fas fa-link'></i>
      <a
        href={url}
        target='_blank'
        rel='noreferrer noopener'
        className='project--link'
      >
        {name}
      </a>
      <br />
      <i className='fab fa-github'></i>
      <a
        href={repo}
        target='_blank'
        rel='noreferrer noopener'
        className='project--link'
      >
        Github Repo
      </a>
      <img className='project--img' alt={alt} src={img} />
      <p className='project--desc'>{desc}</p>
    </article>
  );
}

export default Project;
