function Highlight({ url, header, imgs, desc, award, awardUrl }) {
  return (
    <article className='highlight'>
      <h2 className='highlight--header'>
        <a target='_blank' rel='noopener noreferrer' href={url}>
          {header}
        </a>
      </h2>
      <div className='highlight--img-container'>
        {imgs
          ? imgs.map(({ alt, img }, index) => (
              <img className='highlight--img' alt={alt} src={img} key={index} />
            ))
          : ""}
      </div>
      {desc}
      <a href={awardUrl} className='highlight--award'>
        {award}
      </a>
    </article>
  );
}

export default Highlight;
