import './CipherMap.css'
import React, {useState} from'react';

const CipherMap = () => {

    const [graphData, setGraphData] = useState([]);

    // Function to mark a cell as 'contributed'
    const markCell = (row, col) => {
      const updatedGraphData = [...graphData];
      updatedGraphData[row][col] = true;
      setGraphData(updatedGraphData);
    };
  
    // Function to generate the grid of cells
    const renderGraph = () => {
      const rows = 7; // Number of rows in the grid
      const cols = 52; // Number of columns in the grid
  
      // Initialize the graph data with 'false' for each cell
    if (graphData.length === 0){
        const initialData = Array.from({ length: rows }, () => 
        Array.from({ length: cols }, () => false)
        );
        setGraphData(initialData);
    }
  
      // Render the grid of cells
    return graphData.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              onClick={() => markCell(rowIndex, colIndex)}
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: cell ? '#green' : '#eee',
                border: '1px solid #ddd',
                marginRight: '2px',
              }}
            />
          ))}
        </div>
      ));
    };

	return(
		<div className='About-Me'>
            <div className='About-Me-Section1'>
                <p className='page-heading'>CIPHER MAP</p>
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                {renderGraph}
            </div>
        </div>
	)
}
export default CipherMap;