import React, { useCallback } from 'react';
import ReactFlow, { 
  useNodesState, 
  useEdgesState, 
  addEdge, 
  Controls,
  Background, 
} from 'reactflow';
import 'reactflow/dist/style.css';
import 'reactflow/dist/base.css';
import CustomNode from './CustomNode';
import { useAtomValue, useAtom } from 'jotai/react';
import { valuesAtom } from '../../../../../atoms/values-atom';
import { atomWithDefault } from 'jotai/vanilla/utils';
import { ValuesAtomTuple } from 'src/types';
import { useDevtoolsJotaiStoreOptions } from '../../../../../internal-jotai-store';
import { useSyncSnapshotValuesToAtom } from '../../../../../hooks/useAtomsSnapshots';

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  { id: '1', type: 'custom', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', type: 'custom', position: { x: 0, y: 100 }, data: { label: '2' } },
  { id: '3', type: 'custom', position: { x: 0, y: 200 }, data: { label: '3' } },
];

const initialEdges = [
  // { id: 'e1-2', source: '1', target: '2' },
  // { id: 'el1-3', source:'1', target: '3'}
];

const allValues = atomWithDefault<ValuesAtomTuple[]>((get) => {
  const allAtoms = get(valuesAtom);
  return allAtoms;
});

function Reactflow() {
  useSyncSnapshotValuesToAtom();
  
  const values = useAtomValue(
    allValues,
    useDevtoolsJotaiStoreOptions(),
  )

  console.log('values', values);
  
  const valuesRef = React.useRef(values);
  
  React.useEffect(() => {
    valuesRef.current = values;
  }, [values]);
  
  
  const [ nodes, setNodes, onNodesChange ] = useNodesState(initialNodes);
  const [ edges, setEdges, onEdgesChange ] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
    
      return (
          <div style={{ width: '90%', height: '90%' }}>
            <ReactFlow
              fitView
              nodes={nodes}
              nodeTypes={nodeTypes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              style={{ backgroundImage: "linear-gradient(to bottom, #758696, #252B37)"  }}
    
            >
              <Controls />
              <Background color="#252B37" variant='lines' />
            </ReactFlow>
          </div>
      );
}

export default Reactflow;