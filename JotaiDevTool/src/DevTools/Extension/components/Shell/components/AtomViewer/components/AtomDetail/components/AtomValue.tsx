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


import React, { useCallback } from 'react';
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
import { Card, CardContent, CardHeader, CardTitle } from '../../../../../../../../../../components/ui/card';
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
      <Card>
        <CardHeader>
          <CardTitle>Raw value</CardTitle>
        </CardHeader>
        <CardContent>
          <ErrorMessage message="Failed to parse the value of the atom" />
        </CardContent>
      </Card>
    );
  }

  const typeOfValue = getTypeOfAtomValue(atomValue);
  const isJsonTreeCompatible = supportedTreeValueTypes.includes(typeOfValue);

  if (!isJsonTreeCompatible) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Raw value</CardTitle>
        </CardHeader>
        <CardContent>
          <MemoizedValueRenderer value={parsedValue}/>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Value</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="raw-value" value={atomValueViewer} onValueChange={handleOnTabChange}>
          <TabsList>
            <TabsTrigger value="raw-value">
              <IconSourceCode className="mr-2 h-3.5 w-3.5" />
              Raw value
            </TabsTrigger>
            <TabsTrigger value="json-tree">
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
      </CardContent>
    </Card>
  );
};