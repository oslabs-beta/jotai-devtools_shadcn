import * as React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { Panel, PanelGroup } from 'react-resizable-panels';
import { PanelResizeHandle } from '../PanelResizeHandle';
import { PlayBar } from './components/PlayBar';
import { SnapshotDetail } from './components/SnapshotDetail';
import { SnapshotList } from './components/SnapshotList';

const panelStyles = { overflow: 'auto' };
const panelGroupStyles = { height: 'calc(100% - 56px)' };

export const TimeTravel = React.memo(() => {
  return (
    <>
      <PanelGroup
        direction="horizontal"
        style={panelGroupStyles}
        id="jotai-devtools-time-travel-panel-group"
      >
        <Panel
          defaultSize={45}
          minSize={30}
          style={panelStyles}
          id="jotai-devtools-time-travel-panel-left"
        >
          <ScrollArea.Root className="h-full">
            <ScrollArea.Viewport className="h-full">
              <div className=" p-4 pt-0 h-full flex flex-col data-[testid='jotai-devtools-time-travel-panel-left-content'] dark:text-white dark:bg-slate-700 ml-4 rounded-md bg-gray-200">
                <SnapshotList />
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
        </Panel>
        <PanelResizeHandle />
        <Panel
          defaultSize={55}
          minSize={40}
          style={panelStyles}
          id="jotai-devtools-time-travel-panel-right"
        >
          <ScrollArea.Root className="h-full">
            <ScrollArea.Viewport className="h-full">
              <div className="p-10 h-full flex flex-col relative dark:text-white">
                <SnapshotDetail />
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
        </Panel>
      </PanelGroup>
      <PlayBar />
    </>
  );
});