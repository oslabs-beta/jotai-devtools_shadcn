// import * as React from 'react';
// import { Box, LoaderProps, LoadingOverlay, Sx, Text } from '@mantine/core';
// import { useAtomValue } from 'jotai/react';
// import { useThemeMode } from '../../../../../../../hooks/useThemeMode';
// import { useDevtoolsJotaiStoreOptions } from '../../../../../../../internal-jotai-store';
// import { selectedAtomAtom } from '../../atoms';
// import { DisplayAtomDetails } from './components/DisplayAtomDetails';

// const messageBoxWrapperStyles: Sx = {
//   position: 'relative',
//   top: '50%',
//   transform: 'translateY(-50%)',
// };

// export const AtomDetail = React.memo((): JSX.Element => {
//   const selectedAtomData = useAtomValue(
//     selectedAtomAtom,
//     useDevtoolsJotaiStoreOptions(),
//   );

//   const loaderProps: LoaderProps = {
//     color: useThemeMode('dark', 'white'),
//   };

//   if (!selectedAtomData) {
//     return (
//       <Box sx={messageBoxWrapperStyles}>
//         <Text w="100%" ta="center">
//           Select an atom from the left panel to view the details{' '}
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
//       <DisplayAtomDetails atom={selectedAtomData.atom} />
//     </React.Suspense>
//   );
// });

// AtomDetail.displayName = 'AtomDetail';

// ---- Migrated Code ------

import * as React from 'react';
import { useAtomValue } from 'jotai/react';
import { useDevtoolsJotaiStoreOptions } from '../../../../../../../internal-jotai-store';
import { selectedAtomAtom } from '../../atoms';
import { DisplayAtomDetails } from './components/DisplayAtomDetails';
import { cn } from '../../../../../../../../../lib/utils';

export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const LoadingSpinner = ({
  size = 24,
  className,
  ...props
}: ISVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('animate-spin', className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};

export const AtomDetail = React.memo((): JSX.Element => {
  const selectedAtomData = useAtomValue(
    selectedAtomAtom,
    useDevtoolsJotaiStoreOptions(),
  );

  if (!selectedAtomData) {
    return (
      <div className="flex flex-col items-center justify-center h-full mt-50%">
      <p className="text-center">
        Select an atom from the left panel to view the details{' '}
      </p>
    </div>
    );
  }

  return (
    <React.Suspense
      fallback={
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <LoadingSpinner size={32} className="text-primary" />
        </div>
      }
    >
      <DisplayAtomDetails atom={selectedAtomData.atom} />
    </React.Suspense>
  );
});

AtomDetail.displayName = 'AtomDetail';
