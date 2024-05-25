import React, { useState } from 'react';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';

const App = () => {
  const [selectedObject, setSelectedObject] = useState(null);

  const handleAddWall = () => {
    // Logic to add a wall to the canvas
  };

  const handleChangeProperty = (property, value) => {
    // Logic to change the property of the selected object
  };

  return (
    <div className="app">
      <Toolbar onAddWall={handleAddWall} />
      <Canvas />
      <Sidebar
        selectedObject={selectedObject}
        onChangeProperty={handleChangeProperty}
      />
    </div>
  );
};

export default App;
