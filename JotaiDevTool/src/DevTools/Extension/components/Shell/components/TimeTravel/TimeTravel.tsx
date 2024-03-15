import * as React from 'react';
import { ScrollArea } from '../../../../../../../components/ui/scroll-area';
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
          <ScrollArea className="h-full">
            <div className="p-4 pt-0 h-full flex flex-col data-[testid='jotai-devtools-time-travel-panel-left-content'] dark:text-white dark:bg-slate-700 rounded-md bg-gray-200">
              <SnapshotList />
            </div>
          </ScrollArea>
        </Panel>
        <PanelResizeHandle />
        <Panel
          defaultSize={55}
          minSize={40}
          style={panelStyles}
          id="jotai-devtools-time-travel-panel-right"
        >
          <ScrollArea className="h-full">
            <div className="p-30 h-full flex flex-col relative dark:text-white">
              <SnapshotDetail />
            </div>
          </ScrollArea>
        </Panel>
      </PanelGroup>
      <PlayBar />
    </>
  );
});