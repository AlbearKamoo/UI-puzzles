import React from 'react';

import './WinStateModal.css';

const WinStateModal = (props) => {
  return (
    <div>
      <div className={'modal-overlay'}></div>
      <div className={'center-contents modal-wrapper'}>
        <div className={'win-text'}> You Win!
        </div>
        <button onClick={props.handleSubmit}>OK</button>
      </div>
    </div>
  )
}

export default WinStateModal;
