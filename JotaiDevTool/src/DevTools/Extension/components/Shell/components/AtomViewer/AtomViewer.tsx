import * as React from 'react';
import { ScrollArea } from '../../../../../../../components/ui/scroll-area';
import { AtomDetail } from './components/AtomDetail';
import { AtomList } from './components/AtomList';

export const AtomViewer = React.memo(() => {
  return (
    <div className="flex flex-row h-full">
      <div className="w-1/2 h-full">
        <ScrollArea className="h-full">
          <div className="pb-4 h-full flex flex-col border-r ">
            <AtomList />
          </div>
        </ScrollArea>
      </div>
      <div className="w-1/2 h-full">
        <ScrollArea className="h-full">
          <div className="p-1 h-full flex flex-col relative ">
            <AtomDetail />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
});