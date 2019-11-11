
import React, { useState } from 'react';

import './index.scss';

function Loading() {

  const [ loading, setLoading ] = useState(0);

  return (
    <div className="loading">
      <svg viewBox="0 0 50 50">
        <circle class="ring" cx="25" cy="25" r="20"></circle>
        <circle class="ball" cx="25" cy="5" r="3.5"></circle>
      </svg>
    </div>
  )
}

export default Loading;