// import React, { useCallback } from 'react';
// import { Box, Tabs, Text } from '@mantine/core';
// import { IconBinaryTree2, IconSourceCode } from '@tabler/icons-react';
// import { AnyAtomValue } from 'src/types';
// import {
//   ErrorSymbol,
//   getTypeOfAtomValue,
//   stringifyAtomValue,
// } from '../../../../../../../../utils';
// import { ErrorMessage } from '../../../../ErrorMessage';
// import { JSONTree } from '../../../../JSONTree';
// import { AtomValueViewer, useAtomValueViewer } from '../atoms';
// import { MemoizedValueRenderer } from './MemoizedValueRenderer';

// type AtomParseRawValueValueProps = {
//   atomValue: AnyAtomValue;
// };

// const supportedTreeValueTypes: ReturnType<typeof getTypeOfAtomValue>[] = [
//   'object',
//   'array',
//   'atom',
// ];

// export const AtomValue = ({
//   atomValue,
// }: AtomParseRawValueValueProps): JSX.Element => {
//   const [atomValueViewer, setSelectedValueViewer] = useAtomValueViewer();
//   const parsedValue = stringifyAtomValue(atomValue);

//   const handleOnTabChange = useCallback(
//     (value: AtomValueViewer) => {
//       if (value) {
//         setSelectedValueViewer(value as AtomValueViewer);
//       }
//     },
//     [setSelectedValueViewer],
//   );

//   if (parsedValue === ErrorSymbol) {
//     return (
//       <Box>
//         <Text fw="bold" mb="sm">
//           Raw value
//         </Text>
//         <ErrorMessage message="Failed to parse the value of the atom" />
//       </Box>
//     );
//   }

//   const typeOfValue = getTypeOfAtomValue(atomValue);
//   const isJsonTreeCompatible = supportedTreeValueTypes.includes(typeOfValue);

//   if (!isJsonTreeCompatible) {
//     return (
//       <Box>
//         <Text fw="bold" mb="sm">
//           Raw value
//         </Text>
//         <MemoizedValueRenderer value={parsedValue} />
//       </Box>
//     );
//   }

//   return (
//     <Box>
//       <Text fw="bold" mb="sm">
//         Value
//       </Text>
//       <Tabs
//         defaultValue="raw-value"
//         keepMounted={false}
//         id="jotai-devtools-atom-viewer-value-tabs"
//         value={atomValueViewer}
//         onTabChange={handleOnTabChange}
//       >
//         <Tabs.List>
//           <Tabs.Tab
//             value="raw-value"
//             icon={<IconSourceCode size="0.9rem" stroke="1.75" />}
//           >
//             Raw value
//           </Tabs.Tab>
//           <Tabs.Tab
//             value="json-tree"
//             icon={<IconBinaryTree2 size="0.9rem" stroke="1.75" />}
//           >
//             Tree view
//           </Tabs.Tab>
//         </Tabs.List>

//         <Tabs.Panel value="raw-value" pt="xs">
//           <MemoizedValueRenderer value={parsedValue} />
//         </Tabs.Panel>

//         <Tabs.Panel value="json-tree" pt="xs" data-testid="json-tree-panel">
//           <JSONTree data={atomValue} />
//         </Tabs.Panel>
//       </Tabs>
//     </Box>
//   );
// };

//----Migrated Code -----



import React, { useCallback, useState } from 'react';
import { IconBinaryTree2, IconSourceCode } from '@tabler/icons-react';
import { AnyAtomValue } from 'src/types';
import {
  ErrorSymbol,
  getTypeOfAtomValue,
  stringifyAtomValue,
} from '../../../../../../../../utils';
import { ErrorMessage } from '../../../../ErrorMessage';
import { JSONTree } from '../../../../JSONTree';
import { AtomValueViewer, useAtomValueViewer } from '../atoms';
import { MemoizedValueRenderer } from './MemoizedValueRenderer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../../../../../../../../components/ui/tabs';
import { cn } from '../../../../../../../../../../lib/utils';

type AtomParseRawValueValueProps = {
  atomValue: AnyAtomValue;
};

const supportedTreeValueTypes: ReturnType<typeof getTypeOfAtomValue>[] = [
  'object',
  'array',
  'atom',
];

export const AtomValue = ({
  atomValue,
}: AtomParseRawValueValueProps): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState('raw-value');
  const [atomValueViewer, setSelectedValueViewer] = useAtomValueViewer();
  const parsedValue = stringifyAtomValue(atomValue);

  const handleOnTabChange = useCallback(
    (value: string) => {
      if (value === 'raw-value' || value === 'json-tree') {
        setSelectedValueViewer(value as AtomValueViewer);
      }
    },
    [setSelectedValueViewer],
  );

  if (parsedValue === ErrorSymbol) {
    return (
      <div className="space-y-4 md:m-6 dark:bg-slate-900">
        <h2 className='font-bold font-inter text-grey-900 dark:text-gray-200'>
          Raw value
        </h2>
          <ErrorMessage message="Failed to parse the value of the atom" />
      </div>
    );
  }

  const typeOfValue = getTypeOfAtomValue(atomValue);
  const isJsonTreeCompatible = supportedTreeValueTypes.includes(typeOfValue);

  if (!isJsonTreeCompatible) {
    return (
      <div className="space-y-4 md:m-6 dark:bg-slate-900">
        <h2 className='font-bold font-inter text-grey-900 dark:text-gray-200'>
          Raw value
        </h2>
          <MemoizedValueRenderer value={parsedValue}/>
      </div>
    );
  }

  return (
    <div className="space-y-4 md:m-6 dark:bg-slate-900">
        <h2 className='font-bold font-inter text-grey-900 dark:text-gray-200'>
          Value
        </h2>
        <Tabs 
          defaultValue="raw-value" 
          className="flex flex-col"
          value={atomValueViewer} 
          onValueChange={handleOnTabChange}>
          <TabsList className="flex justify-start bg-white border-b-2 border-gray-300 rounded-t-md rounded-b-none dark:bg-slate-800 dark:border-gray-400">
            <TabsTrigger 
              value="raw-value"
              onClick={() => setSelectedTab('raw-value')}
              className={cn(
                'flex items-center px-4 py-2 text-sm font-medium focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2 border-gray-300 dark:border-gray-400 -ml-1',
                selectedTab === 'raw-value'
                  ? 'text-black dark:text-gray-100 border-black dark:border-white'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-white',
                'rounded-t-md rounded-b-none -mb-1',
              )}
              >
              <IconSourceCode className="mr-2 h-3.5 w-3.5" />
              Raw value
            </TabsTrigger>
            <TabsTrigger 
              value="json-tree"
              onClick={() => setSelectedTab('json-tree')}
              className={cn(
                'flex items-center px-4 py-2 text-sm font-medium focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2 border-gray-300 dark:border-gray-400',
                selectedTab === 'json-tree'
                  ? 'text-black dark:text-gray-100 border-black dark:border-white'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-white',
                'rounded-t-md rounded-b-none -mb-1',
              )}
              >
              <IconBinaryTree2 className="mr-2 h-3.5 w-3.5" />
              Tree view
            </TabsTrigger>
          </TabsList>
          <TabsContent value="raw-value">
            <MemoizedValueRenderer value={parsedValue} />
          </TabsContent>
          <TabsContent value="json-tree" className={cn('pt-4')} data-testid="json-tree-panel">
            <JSONTree data={atomValue} />
          </TabsContent>
        </Tabs>
    </div>
  );
};