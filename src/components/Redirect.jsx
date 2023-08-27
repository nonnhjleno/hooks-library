import React from 'react'

function Redirect(props) {

  const url = "https://github.com/nonnhjleno/hooks-library/blob/master/src/components/" + props.filename;

  return (
    <div className='mt-10'>
      <a href={url} className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>{props.filename}</a>
    </div>
  )
}

export default Redirect