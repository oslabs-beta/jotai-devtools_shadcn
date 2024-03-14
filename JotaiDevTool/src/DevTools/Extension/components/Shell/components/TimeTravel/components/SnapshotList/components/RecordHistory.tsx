// import React from 'react';
// import { ActionIcon, Tooltip } from '@mantine/core';
// import { IconPlayerRecordFilled } from '@tabler/icons-react';
// import { useThemeMode } from '../../../../../../../../hooks/useThemeMode';
// import { useShouldRecordSnapshotHistory } from '../../../atoms';

// export const RecordHistory = () => {
//   const [shouldRecord, setShouldRecord] = useShouldRecordSnapshotHistory();
//   const handleOnClick = () => {
//     setShouldRecord((prev) => !prev);
//   };
//   const label = shouldRecord
//     ? 'Stop recording snapshot history'
//     : 'Record snapshot history';
//   return (
//     <Tooltip label={label} openDelay={750}>
//       <ActionIcon
//         variant="outline"
//         color={useThemeMode(
//           shouldRecord ? 'red.7' : 'dark',
//           shouldRecord ? 'red.7' : 'gray',
//         )}
//         onClick={handleOnClick}
//         aria-label={label}
//       >
//         <IconPlayerRecordFilled size={18} />
//       </ActionIcon>
//     </Tooltip>
//   );
// };

import React from 'react';
import { IconPlayerRecordFilled } from '@tabler/icons-react';
import { useThemeMode } from '../../../../../../../../hooks/useThemeMode';
import { useShouldRecordSnapshotHistory } from '../../../atoms';
import { Button } from '../../..//../../../../../../../components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '../../../../../../../../../../components/ui/tooltip';

export const RecordHistory = () => {
  const [shouldRecord, setShouldRecord] = useShouldRecordSnapshotHistory();
  const handleOnClick = () => {
    setShouldRecord((prev) => !prev);
  };
  const label = shouldRecord
    ? 'Stop recording snapshot history'
    : 'Record snapshot history';

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="outline"
            onClick={handleOnClick}
            aria-label={label}
            className={`h-8 w-8 p-0 ${useThemeMode(
              shouldRecord
                ? 'text-red-700 border-red-700 hover:text-red-700 hover:bg-white'
                : 'text-gray-900 border-gray-300',
              shouldRecord
                ? 'text-gray-400 border-gray-700'
                : 'text-red-700 border-red-700',
            )}`}
          >
            <IconPlayerRecordFilled className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-white dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 rounded-md p-2 shadow-md">
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
