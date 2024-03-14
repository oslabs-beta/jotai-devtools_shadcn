//---- ORIGINAL CODE ------
// import * as React from 'react';
// import { Flex, Sx } from '@mantine/core';
// import { Panel, PanelGroup } from 'react-resizable-panels';
// import { PanelResizeHandle } from '../PanelResizeHandle';
// import { AtomDetail } from './components/AtomDetail';
// import { AtomList } from './components/AtomList';

// const panelStyles = { overflow: 'auto' };
// const atomListWrapperStyles: Sx = (theme) => ({
//   background:
//     theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2],
// });

// export const AtomViewer = React.memo(() => {
//   return (
//     <PanelGroup direction="horizontal">
//       <Panel defaultSize={50} minSize={30} style={panelStyles}>
//         <Flex
//           p={10}
//           pt={0}
//           h="100%"
//           direction="column"
//           sx={atomListWrapperStyles}
//         >
//           <AtomList />
//         </Flex>
//       </Panel>
//       <PanelResizeHandle />
//       <Panel defaultSize={50} minSize={30} style={panelStyles}>
//         <Flex p={10} h="100%" direction="column" pos="relative">
//           <AtomDetail />
//         </Flex>
//       </Panel>
//     </PanelGroup>
//   );
// });


//--- MIGRATED CODE TO SHADCN 

import * as React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { AtomDetail } from './components/AtomDetail';
import { AtomList } from './components/AtomList';



export const AtomViewer = React.memo(() => {
  return (
    <div className="flex flex-row h-full">
      <ScrollArea.Root className="w-1/2 h-full">
        <ScrollArea.Viewport className="h-full">
          <div className=" pb-4 h-full flex flex-col border-r border-gray-400">
            <AtomList />
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="bg-gray-200 dark:bg-gray-700 w-2.5 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-150"
        >
          <ScrollArea.Thumb className="bg-gray-400 dark:bg-gray-500 rounded-full" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-gray-200 dark:bg-gray-700" />
      </ScrollArea.Root>

      <ScrollArea.Root className="w-1/2 h-full">
        <ScrollArea.Viewport className="h-full">
          <div className="p-1 h-full flex flex-col relative bg-white dark:bg-gray-900">
            <AtomDetail />
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="bg-gray-200 dark:bg-gray-700 w-2.5 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-150"
        >
          <ScrollArea.Thumb className="bg-gray-400 dark:bg-gray-500 rounded-full" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-gray-200 dark:bg-gray-700" />
      </ScrollArea.Root>
    </div>
  );
});