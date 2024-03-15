import React, { useCallback, useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../../../../../../../../../../../components/ui/tabs';
import { IconFileCode, IconFileDiff } from '@tabler/icons-react';
import { JSONTree } from '../../../../../../JSONTree';
import { SelectedSnapshotDetail } from '../../../atoms';
import { SnapshotValueViewer, useSnapshotValueViewer } from '../atoms';
import { ErrorBoundary } from '../../../../../../../components/ErrorBoundary';
import { TreeView } from './TreeView';
import { cn } from '../../../../../../../../../../../../lib/utils';

type SnapshotValueProps = {
  state: SelectedSnapshotDetail;
};

export const SnapshotValue = (props: SnapshotValueProps): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState('state');
  const [snapshotValueViewer, setSnapshotValueViewer] =
    useSnapshotValueViewer();

  const handleOnTabChange = useCallback(
    (value: SnapshotValueViewer) => {
      if (value) {
        setSnapshotValueViewer(value as SnapshotValueViewer);
      }
    },
    [setSnapshotValueViewer],
  );

  return (
    <div className="dark:bg-slate-900">
      <h2 className="flex justify-center text-l font-bold font-inter text-grey-900 dark:text-gray-200 leading-6">
        Value
      </h2>

      <Tabs
        defaultValue="state"
        className="flex flex-col"
        id="jotai-devtools-time-travel-value-tabs"
        value={snapshotValueViewer}
        onValueChange={handleOnTabChange}
      >
        <ErrorBoundary>
          <TabsList className="flex justify-start bg-white border-b-2 border-gray-300 rounded-t-md rounded-b-none dark:bg-slate-800 dark:border-gray-400">
            <TabsTrigger
              value="state"
              onClick={() => setSelectedTab('state')}
              className={cn(
                'flex items-center px-4 py-2 text-sm font-medium focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2 border-gray-300 dark:border-gray-400 -ml-1',
                selectedTab === 'state'
                  ? 'text-black dark:text-gray-100 border-black dark:border-white'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-white',
                'rounded-t-md rounded-b-none -mb-1',
              )}
            >
              <IconFileCode size="0.9rem" stroke="1.75" />
              State
            </TabsTrigger>
            <TabsTrigger
              value="diff"
              onClick={() => setSelectedTab('diff')}
              className={cn(
                'flex items-center px-4 py-2 text-sm font-medium focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2 border-gray-300 dark:border-gray-400',
                selectedTab === 'diff'
                  ? 'text-black dark:text-gray-100 border-black dark:border-white'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-white',
                'rounded-t-md rounded-b-none -mb-1',
              )}
            >
              <IconFileDiff size="0.9rem" stroke="1.75" />
              Diff
            </TabsTrigger>
          </TabsList>

          <TabsContent value="state">
            <JSONTree data={props.state.displayValues} />
          </TabsContent>

          <TabsContent value="diff" data-testid="jotai-devtools-diff-panel">
            <TreeView diff={props.state.diff} />
          </TabsContent>
        </ErrorBoundary>
      </Tabs>
    </div>
  );
};
