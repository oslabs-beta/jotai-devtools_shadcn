import React, { memo } from 'react';
import { Background, Handle, Position } from 'reactflow';

function CustomNode({ data }) {
  return (
    <div>
        <div className="CustomNode" style={{
          color: "#F5F5F5",
          backgroundColor: '#252B37',
          borderRadius: "50%",
          width: "2rem",
          height: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          }}>
          {data.label}  
        </div>

      {/* <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" /> */}
    </div>
  );
}


export default memo(CustomNode);