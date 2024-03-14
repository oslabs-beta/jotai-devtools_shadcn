// import * as React from 'react';
// import { Box, LoaderProps, LoadingOverlay, Sx, Text } from '@mantine/core';
// import { useThemeMode } from '../../../../../../../hooks/useThemeMode';
// import { useSelectedSnapshotDetailValue } from './atoms';
// import { DisplaySnapshotDetails } from './components/DisplaySnapshotDetails';

// const messageBoxWrapperStyles: Sx = {
//   position: 'relative',
//   top: '50%',
//   transform: 'translateY(-50%)',
// };

// export const SnapshotDetail = React.memo((): JSX.Element => {
//   const selectedSnapshotDetail = useSelectedSnapshotDetailValue();

//   const loaderProps: LoaderProps = {
//     color: useThemeMode('dark', 'white'),
//   };

//   if (!selectedSnapshotDetail) {
//     return (
//       <Box sx={messageBoxWrapperStyles}>
//         <Text w="100%" ta="center">
//           Select a snapshot from the left panel to view the details
//         </Text>
//       </Box>
//     );
//   }

//   return (
//     <React.Suspense
//       fallback={
//         <LoadingOverlay
//           visible={true}
//           overlayBlur={2}
//           loaderProps={loaderProps}
//         />
//       }
//     >
//       <DisplaySnapshotDetails details={selectedSnapshotDetail} />
//     </React.Suspense>
//   );
// });

// SnapshotDetail.displayName = 'SnapshotDetail';


import * as React from 'react';
import { cn } from '../../../../../../../../../lib/utils';
import { useThemeMode } from '../../../../../../../hooks/useThemeMode';
import { useSelectedSnapshotDetailValue } from './atoms';
import { DisplaySnapshotDetails } from './components/DisplaySnapshotDetails';

// const LoadingSpinner = () => (
//   <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
// );

const messageBoxWrapperStyles = {
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
};

export const SnapshotDetail = React.memo((): JSX.Element => {
  const selectedSnapshotDetail = useSelectedSnapshotDetailValue();
  const spinnerColor = useThemeMode('text-gray-400', 'text-white');

  if (!selectedSnapshotDetail) {
    return (
      <div className={cn('relative', messageBoxWrapperStyles)}>
        <p className="w-full text-center justify-center mt-20 dark:text-gray-200">
          Select a snapshot from the left panel to view the details
        </p>
      </div>
    );
  }

  return (
    <React.Suspense
      fallback={
        <div className="relative">
          <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm" />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <LoadingSpinner className={spinnerColor} /> */}
          </div>
        </div>
      }
    >
      <DisplaySnapshotDetails details={selectedSnapshotDetail} />
    </React.Suspense>
  );
});

SnapshotDetail.displayName = 'SnapshotDetail';