import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./widgets.css"

const Widgets = () => {

    const newsArticle = (heading, subtitle) => {
        return (
            <div className='widgets__article'>
        <div className='widgets__articleLeft'>
           <FiberManualRecordIcon />
        </div>

        <div className='widgets__articleRight'>
           <h4>{heading}</h4>
           <p>{subtitle}</p>
        </div>
        </div>
        )

    }

  return (
    <div className='widgets'>
       <div className='widgets__header'>
        <h2>Linkedin News</h2>
        <InfoIcon />
       </div>

       {newsArticle("React is booming", "Top News - 999 readers")}
       {newsArticle("Covid : India News", "Top News - 886 readers")}
       {newsArticle("Bitcoin Breaks", "Top News - 600 readers")}
       {newsArticle("Why Mern Stack?", "Top News - 889 readers")}
       {newsArticle("javascript is the future", "Top News -1022 readers")}
       {newsArticle("AI taking over", "Top News - 6555 readers")}

    </div>
  )
}

export default Widgets