import React, { useCallback } from 'react';
import ReactFlow, { 
  useReactFlow,
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
import { atomToPrintable } from '../../../../../utils';

const allValues = atomWithDefault<ValuesAtomTuple[]>((get) => {
  const allAtoms = get(valuesAtom);
  return allAtoms;
});

const nodeTypes = {
  custom: CustomNode,
};

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
    
    let atomNodes = () => {
        const nodesArray = [];
        // values.map iterates through all the atoms in the application to create a node
        values.map(([atom], i) => {
            const atomKey = atom.toString();
            nodesArray.push(
                {
                    id: `atom-list-item-${atomKey + i}`,
                    type: 'custom',
                    // x and y position creates a grid layout based on index of the atom in values
                    position: {
                      x: i % 10 * 100,
                      y: Math.floor(i/10) * 100,
                    },
                    data: { label: atomToPrintable(atom) }
                  });

              })
              return nodesArray;
            };
    
    const initialEdges = [
      // { id: 'e1-2', source: '1', target: '2' },
      // { id: 'el1-3', source:'1', target: '3'}
    ];
    
  const [ nodes, setNodes, onNodesChange ] = useNodesState(atomNodes);
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
              // dark mode: style={{ backgroundColor: "#000000" }}
              style={{ backgroundColor: "#F5F5F5" }}
              >
              <Controls />
              {/* dark mode: color="#252B37" */}
              <Background color="#FFFFFF" variant='lines' />
            </ReactFlow>
          </div>
);
}

export default Reactflow;