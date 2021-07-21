import React, { useState } from 'react';

export const NewEventModal = ({ onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const [time, setTime] = useState();

  return(
    <>
      <div id="newEventModal">
        <form>
          <h2>New Event</h2>
          <input
            type="time"
            step="0"
            className="time-set"
            value={time}
            onChange={e=> setTime(e.target.value)}
          />
          <input 
            className={error ? 'error' : ''}
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            id="eventTitleInput" 
            placeholder="Event Title" 
          />
          <button 
            onClick={() => {
              if (title) {
                setError(false);
                onSave(title);
              } else {
                setError(true);
              }
            }} 
            id="saveButton">Save</button>


          <button 
            onClick={onClose}
            id="cancelButton">Cancel</button>
        </form>
     </div>

      <div id="modalBackDrop"></div>
    </>
  );
};
