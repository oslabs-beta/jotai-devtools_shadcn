import React, { useCallback, useEffect } from 'react';
import ReactFlow, { 
  useNodesState, 
  useEdgesState, 
  addEdge, 
  Controls,
  Background,
  Connection,
  Edge, 
} from 'reactflow';
import 'reactflow/dist/style.css';
import 'reactflow/dist/base.css';
import CustomNode from './CustomNode';
import { useAtomValue } from 'jotai/react';
import { valuesAtom } from '../../../../../atoms/values-atom';
import { atomWithDefault } from 'jotai/vanilla/utils';
import { ValuesAtomTuple } from 'src/types';
import { useDevtoolsJotaiStoreOptions } from '../../../../../internal-jotai-store';
import { useSyncSnapshotValuesToAtom } from '../../../../../hooks/useAtomsSnapshots';
import { atomToPrintable } from '../../../../../utils';
import { useDarkModeValue } from '../../../../../atoms/dark-mode';


const allValues = atomWithDefault<ValuesAtomTuple[]>((get) => {
  const allAtoms = get(valuesAtom);
  return allAtoms;
});

const nodeTypes = {
  custom: CustomNode,
};

function Reactflow() {
  const darkMode = useDarkModeValue();
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
    
    type nodeObj = {
      id: string;
      type: string;
      position: { x: number, y: number };
      data: { label: string; };
    }
    
    let atomNodes = (): nodeObj[] => {
      const nodesArray: nodeObj[] = [];
      // values.map iterates through all the atoms in the application to create a node
      values.map(([atom], i) => {
        const atomKey = atom.toString();
        nodesArray.push(
          {
            id: `atom-list-item-${atomKey + i}`,
            type: 'custom',
            // x and y position creates a grid layout based on index of the atom in values
            position: {
              x: i % 10 * 125,
              y: Math.floor(i/10) * 125,
            },
                    data: { label: atomToPrintable(atom) }
                  });

              })
              return nodesArray;
            };

    type edgeObj = {
      id: string;
      source: string;
      target: string;
    }        
    
    const initialEdges: Edge<edgeObj>[] = [
      // { id: 'e1-2', source: '1', target: '2' },
      // { id: 'el1-3', source:'1', target: '3'}
    ];
    
  const [ nodes, setNodes, onNodesChange ] = useNodesState(atomNodes);
  const [ edges, setEdges, onEdgesChange ] = useEdgesState(initialEdges);

  useEffect(() => {
    setNodes(atomNodes);
  }, [values]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
    
      return (
        <div className={darkMode ? 'dark' : ''} style={{ width: '98%', height: '98%' }}>
            <ReactFlow
              fitView
              nodes={nodes}
              nodeTypes={nodeTypes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              style={{ backgroundColor: darkMode ? "#111724" : "#F5F5F5" }}
              >
              {/* TODO: Controls are not responding to lightvsdark mode settings, need to fix  */}
              <div style={{ backgroundColor: darkMode ? "#C0C2C9" : "#F5F5F5" }} className='dark:bg-slate-900'>
              <Controls/>
              </div>
              <Background color={darkMode? "#252B37":"#FFFFFF"} variant='lines' />
            </ReactFlow>
          </div>
 );
}

export default Reactflow;