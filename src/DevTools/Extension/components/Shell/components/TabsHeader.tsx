import * as React from 'react';
import { Indicator, Tabs } from '@mantine/core';
import { IconLayoutList, IconTimeline } from '@tabler/icons-react';
import {
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../../../../components/ui/tabs';
import { TabKeys } from '../../../../constants';
import { useShouldRecordSnapshotHistoryValue } from './TimeTravel/atoms';

//GHOSTFISH
//ADDING SHADCN TABS TO TEST
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "/Users/adamkim/jotai-devtools/src/components/ui/tabs"

export const TabsHeader = React.memo(() => {
  const isSnapshotRecordingOn = useShouldRecordSnapshotHistoryValue();
  return (
    <Tabs.List>
      <Tabs.Tab value={TabKeys.AtomViewer} icon={<IconLayoutList size={14} />}>
        Atom Viewer
      </Tabs.Tab>

      <Tabs.Tab
        value={TabKeys.TimeTravel}
        icon={<IconTimeline size={14} />}
        pr={isSnapshotRecordingOn ? 'xl' : 'md'}
      >
        {isSnapshotRecordingOn ? (
          <Indicator
            withBorder
            inline
            processing
            size={8}
            offset={-12}
            color="red"
            position="middle-end"
            data-testid="jotai-devtools-time-travel-recording-indicator"
          >
            Time travel
          </Indicator>
        ) : (
          'Time travel'
        )}
      </Tabs.Tab>
      {/* TODO Add these features */}
      {/* <Tabs.Tab
        value={TabKeys.AtomGraph}
        icon={<IconVectorTriangle size={14} />}
        disabled
      >
        Atom Graph
      </Tabs.Tab> */}
    </Tabs.List>
  );
});

TabsHeader.displayName = 'TabsHeader';

// {/* <>
//       <Tabs defaultValue={TabKeys.AtomViewer} className="flex w-full flex-col">
//         <TabsList
//           className="flex border-b border-slate-200 data-[orientation=horizontal]:border-none"
//           aria-label="Manage tabs"
//         >
//           <TabsTrigger
//             value={TabKeys.AtomViewer}
//             className="shrink-0 px-5 py-2.5 text-slate-500 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[orientation=horizontal]:border-b-2 data-[orientation=horizontal]:border-slate-500 data-[orientation=horizontal]:text-sm data-[orientation=vertical]:border-r-2 data-[orientation=vertical]:border-slate-500 data-[orientation=vertical]:text-xs"
//           >
//             <IconLayoutList className="mr-2 h-4 w-4" />
//             Atom Viewer
//           </TabsTrigger>
//           <TabsTrigger
//             value={TabKeys.TimeTravel}
//             className="shrink-0 px-5 py-2.5 text-slate-500 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[orientation=horizontal]:border-b-2 data-[orientation=horizontal]:border-slate-500 data-[orientation=horizontal]:text-sm data-[orientation=vertical]:border-r-2 data-[orientation=vertical]:border-slate-500 data-[orientation=vertical]:text-xs"
//           >
//             <IconTimeline className="mr-2 h-4 w-4" />
//             {isSnapshotRecordingOn ? (
//               <span className="relative">
//                 Time travel
//                 <span className="absolute top-0 right-0 -mr-2 -mt-1 inline-block h-3 w-3 animate-ping rounded-full bg-red-400 opacity-75"></span>
//                 <span className="absolute top-0 right-0 -mr-2 -mt-1 inline-block h-3 w-3 rounded-full bg-red-500"></span>
//               </span>
//             ) : (
//               'Time travel'
//             )}
//           </TabsTrigger>
//           {/* TODO Add these features */}
//           {/* <TabsTrigger
//             value={TabKeys.AtomGraph}
//             disabled
//             className="shrink-0 px-5 py-2.5 text-slate-400 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[orientation=horizontal]:border-b-2 data-[orientation=horizontal]:border-slate-500 data-[orientation=horizontal]:text-sm data-[orientation=vertical]:border-r-2 data-[orientation=vertical]:border-slate-500 data-[orientation=vertical]:text-xs"
//           >
//             <IconVectorTriangle className="mr-2 h-4 w-4" />
//             Atom Graph
//           </TabsTrigger> */}
//         </TabsList>
//         {/* Tabs Content goes here */}
//       </Tabs>
//     </>
//   );
// }); */}
