import React from 'react';

const Toolbar = ({ onAddWall }) => {
  return (
    <div className="toolbar">
      <button onClick={onAddWall}>Add Wall</button>
      {/* Add more buttons for other actions */}
    </div>
  );
};

export default Toolbar;
