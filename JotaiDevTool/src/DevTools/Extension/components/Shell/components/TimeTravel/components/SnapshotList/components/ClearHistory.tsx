// import React from 'react';
// import { ActionIcon } from '@mantine/core';
// import { IconTrashX } from '@tabler/icons-react';
// import { useThemeMode } from '../../../../../../../../hooks/useThemeMode';
// import {
//   useFilteredSnapshotHistoryAtomValue,
//   useSetSelectedSnapshotId,
//   useSetSnapshotHistory,
// } from '../../../atoms';

// export const ClearHistory = () => {
//   const filteredSnapshotHistory = useFilteredSnapshotHistoryAtomValue();
//   const setSnapshotHistory = useSetSnapshotHistory();
//   const setSelectedSnapshotIdx = useSetSelectedSnapshotId();

//   const handleOnClick = () => {
//     setSnapshotHistory((prev) => {
//       const lastItem = prev.at(-1);
//       if (lastItem) {
//         // Make last item hidden so that it doesn't show up in the list
//         // but we could still use it to show the last snapshot
//         lastItem.isHidden = true;
//         lastItem.label = 0;
//         return [lastItem];
//       }
//       return [];
//     });

//     setSelectedSnapshotIdx(undefined);
//   };

//   return (
//     <ActionIcon
//       variant="default"
//       color={useThemeMode('dark', 'gray')}
//       aria-label="Clear snapshot history"
//       title="Clear snapshot history"
//       onClick={handleOnClick}
//       disabled={filteredSnapshotHistory.length === 0}
//     >
//       <IconTrashX size={16} />
//     </ActionIcon>
//   );
// };

import React from 'react';
import { IconTrashX } from '@tabler/icons-react';
import { useThemeMode } from '../../../../../../../../hooks/useThemeMode';
import {
  useFilteredSnapshotHistoryAtomValue,
  useSetSelectedSnapshotId,
  useSetSnapshotHistory,
} from '../../../atoms';
import { Button } from '../../../../../../../../../../components/ui/button';

export const ClearHistory = () => {
  const filteredSnapshotHistory = useFilteredSnapshotHistoryAtomValue();
  const setSnapshotHistory = useSetSnapshotHistory();
  const setSelectedSnapshotIdx = useSetSelectedSnapshotId();

  const handleOnClick = () => {
    setSnapshotHistory((prev) => {
      const lastItem = prev.at(-1);
      if (lastItem) {
        // Make last item hidden so that it doesn't show up in the list
        // but we could still use it to show the last snapshot
        lastItem.isHidden = true;
        lastItem.label = 0;
        return [lastItem];
      }
      return [];
    });

    setSelectedSnapshotIdx(undefined);
  };

  return (
    <Button
      aria-label="Clear snapshot history"
      title="Clear snapshot history"
      onClick={handleOnClick}
      disabled={filteredSnapshotHistory.length === 0}
      className="h-8 w-8 p-0 bg-gray-500 hover:bg-gray-400 dark:bg-slate-700 dark:hover:bg-slate-600 focus:bg-gray-500"
    >
      <IconTrashX className="h-4 w-4 dark:text-white group-hover:text-white" />
    </Button>
  );
};