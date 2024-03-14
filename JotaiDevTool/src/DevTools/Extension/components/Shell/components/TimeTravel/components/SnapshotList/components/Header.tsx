import React from 'react';
import { cn } from '../../../../../../../../../../lib/utils';
import { ClearHistory } from './ClearHistory';
import { RecordHistory } from './RecordHistory';
import { SnapshotListNavigation } from './SnapshotListNavigation';
import { SnapshotSearchInput } from './SnapshotSearchInput';

export const Header = () => {
  return (
    <div className={cn('flex flex-col space-y-4')}>
      <div
        className={cn(
          'flex items-center justify-between p-4 rounded-md bg-white dark:bg-slate-500 mt-4',
        )}
      >
        <div className="flex items-center space-x-2">
          <RecordHistory />
          <ClearHistory />
        </div>
        <SnapshotListNavigation />
      </div>
      <SnapshotSearchInput />
    </div>
  );
};
