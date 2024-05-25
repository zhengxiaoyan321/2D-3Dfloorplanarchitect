import React from 'react';

const Sidebar = ({ selectedObject, onChangeProperty }) => {
  if (!selectedObject) return null;

  return (
    <div className="sidebar">
      <h3>Properties</h3>
      {/* Display and edit properties of the selected object */}
      <input
        type="text"
        value={selectedObject.name}
        onChange={(e) => onChangeProperty('name', e.target.value)}
      />
      {/* Add more property fields as needed */}
    </div>
  );
};

export default Sidebar;
