import React from 'react';
import '../../scss/utils/_tags.scss'

const Tags = (props) => {
      return (
            <div className='position-desc'>
                  {props.tags}
            </div>
      );
};

export default Tags;
