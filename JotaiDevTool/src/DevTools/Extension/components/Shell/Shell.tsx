import '../../../../../app/globals.css';
import React, { useRef, useState } from 'react';
// import { Tabs } from '@mantine/core';
import { useAtomValue } from 'jotai/react';
import { shellStylesAtom } from '../../../atoms/shell-styles';
import { TabKeys, shellStyleDefaults } from '../../../constants';
import { useDevtoolsJotaiStoreOptions } from '../../../internal-jotai-store';
import { AtomViewer } from './components/AtomViewer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/Header';
import { ShellResizeBar } from './components/ShellResizeBar';
import { TimeTravel } from './components/TimeTravel';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../../../../components/ui/tabs';
import { cn } from '../../../../../lib/utils';
export const Shell = () => {
  const [selectedTab, setSelectedTab] = useState('atom-viewer');

  // export const Shell = () => {
  //   const [selectedShellTab, setSelectedShellTab] = useSelectedShellTab();

  const shellRef = useRef<HTMLDivElement>(null);

  // TODO move this to a custom hook
  const { height } = useAtomValue(
    shellStylesAtom,
    useDevtoolsJotaiStoreOptions(),
  );

  // const handleOnTabChange = (value: TabKeys) => setSelectedShellTab(value);
  //   return (
  //     <Tabs
  //       keepMounted={false}
  //       variant="default"
  //       defaultValue={TabKeys.AtomViewer}
  //       sx={shellStyles}
  //       h={height}
  //       mah={shellStyleDefaults.maxHeight}
  //       ref={shellRef}
  //       className="jotai-devtools-shell"
  //       data-testid="jotai-devtools-shell"
  //       id="jotai-devtools-shell"
  //       value={selectedShellTab}
  //       onTabChange={handleOnTabChange}
  //     >
  //       <ShellResizeBar shellRef={shellRef} />
  //       <Header />
  //       <ErrorBoundary>
  //         <TabsHeader />
  //         <Tabs.Panel
  //           value={TabKeys.AtomViewer}
  //           h="100%"
  //           sx={{
  //             overflow: 'hidden',
  //             // Hide the overlap of this div's bg
  //             borderBottomLeftRadius: '7px',
  //             borderBottomRightRadius: '7px',
  //           }}
  //         >
  //           <AtomViewer />
  //         </Tabs.Panel>
  //         <Tabs.Panel
  //           value={TabKeys.TimeTravel}
  //           h="100%"
  //           sx={{
  //             overflow: 'hidden',
  //             // Hide the overlap of this div's bg
  //             borderBottomLeftRadius: '7px',
  //             borderBottomRightRadius: '7px',
  //           }}
  //         >
  //           <TimeTravel />
  //         </Tabs.Panel>
  //       </ErrorBoundary>
  //     </Tabs>
  //   );
  // };

  return (
    <Tabs
      defaultValue={selectedTab}
      className="flex w-full flex-col"
      style={{
        height: height,
        maxHeight: shellStyleDefaults.maxHeight,
      }}
      ref={shellRef}
      data-testid="jotai-devtools-shell"
      id="jotai-devtools-shell"
    >
      <ShellResizeBar shellRef={shellRef} />
      <Header />
      <ErrorBoundary>
        {/* <TabsList className="flex border-b border-gray-300"> */}
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="atom-viewer"
            onClick={() => setSelectedTab('atom-viewer')}
            className={cn(
              'px-4 py-2 text-sm font-medium focus:outline-none',
              selectedTab === 'atom-viewer'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-700',
            )}
          >
            Atom Viewer
          </TabsTrigger>
          <TabsTrigger
            value="time-travel"
            onClick={() => setSelectedTab('time-travel')}
            className={cn(
              'px-4 py-2 text-sm font-medium focus:outline-none',
              selectedTab === 'time-travel'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-700',
            )}
          >
            Time Travel
          </TabsTrigger>
        </TabsList>
        <div
          style={{
            height: '100%',
            // height: 'calc(100% - 90px)',
            overflow: 'auto',
            borderBottomLeftRadius: '7px',
            borderBottomRightRadius: '7px',
          }}
        >
          <TabsContent value="atom-viewer" className="h-full">
            <AtomViewer />
          </TabsContent>
          <TabsContent value="time-travel" className="h-full">
            <TimeTravel />
          </TabsContent>
        </div>
      </ErrorBoundary>
    </Tabs>
  );
};
