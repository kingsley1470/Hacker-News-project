import React from 'react'

function NewsCard({article}) {
  if(!article.title) return null;
  return (
    <div className='news-card'>
      <h3>{article.title}</h3>
      <a href={article.url}>Read More</a>
      
    </div>
  )
}

export default NewsCard;
