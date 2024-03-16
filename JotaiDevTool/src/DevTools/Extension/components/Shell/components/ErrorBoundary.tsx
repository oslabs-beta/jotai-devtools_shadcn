// import * as React from 'react';
// import { Anchor, Box, Flex, Sx, Text } from '@mantine/core';
// import { IconAlertCircle } from '@tabler/icons-react';
// import {
//   FallbackProps,
//   ErrorBoundary as ReactErrorBoundary,
// } from 'react-error-boundary';
// import { useThemeMode } from '../../../../hooks/useThemeMode';
// import { CodeSyntaxHighlighter } from './CodeSyntaxHighlighter';

// const textStyles: Sx = {
//   display: 'flex',
//   alignItems: 'center',
// };

// const ErrorFallback = ({ error }: FallbackProps) => {
//   if (Error?.stackTraceLimit) {
//     Error.stackTraceLimit = 5;
//   }

//   Error?.captureStackTrace?.(error);

//   const themedRedColor = useThemeMode('red.8', 'red.5');

//   return (
//     <Flex
//       role="alert"
//       justify="center"
//       align="center"
//       h="90%"
//       sx={{ overflow: 'scroll' }}
//       data-testid="jotai-devtools-error-boundary"
//     >
//       <Box w="100%" maw="80%" mah="80%">
//         <Text size="md" fw="500" color={themedRedColor} sx={textStyles} mb={5}>
//           <Text mr={5} sx={textStyles}>
//             <IconAlertCircle size={16} />
//           </Text>
//           Uh-oh, something went wrong.
//         </Text>

//         <Text size="sm" color={themedRedColor} mb="sm">
//           If you believe this to be a bug, please file an issue on{' '}
//           <Anchor
//             href="https://github.com/jotaijs/jotai-devtools/issues"
//             color={themedRedColor}
//             td="underline"
//             target="_blank"
//             rel="noreferrer noopener"
//           >
//             Jotai DevTool's GitHub repo
//           </Anchor>{' '}
//           with a minimal reproduction and the following error
//         </Text>
//         <CodeSyntaxHighlighter language="javascript">
//           {error.stack?.toString() || error.message}
//         </CodeSyntaxHighlighter>
//       </Box>
//     </Flex>
//   );
// };

// export const ErrorBoundary = ({ children }: React.PropsWithChildren) => {
//   return (
//     <ReactErrorBoundary FallbackComponent={ErrorFallback}>
//       {children}
//     </ReactErrorBoundary>
//   );
// };


import * as React from 'react';
import { IconAlertCircle } from '@tabler/icons-react';
import {
  FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
} from 'react-error-boundary';
import { ErrorCodeSyntaxHighlighter } from './CodeSyntaxHighlighter';


const ErrorFallback = ({ error }: FallbackProps) => {
  if (Error?.stackTraceLimit) {
    Error.stackTraceLimit = 5;
  }

  Error?.captureStackTrace?.(error);


  return (
    <div className='flex justify-center items-center h-[90%] overflow-scroll' role='alert' data-testid='jotai-devtools-error-boundary'>
      <div className='w-full max-w-[80%] max-h-[80%]'>
        <div className='flex items-center text-red-600 dark:text-amber-400'>
          <IconAlertCircle size={16} />
          <h2 className='font-medium'>Uh-oh, something went wrong.</h2>
        </div>
        <p className="text-sm text-red-600 dark:text-amber-400 mb-4">
          If you believe this to be a bug, please file an issue on{' '}
          <a
            href="https://github.com/jotaijs/jotai-devtools/issues"
            className="text-red-600  dark:text-amber-400 underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            Jotai DevTool's GitHub repo
          </a>{' '}
          with a minimal reproduction and the following error
        </p>
        
        <ErrorCodeSyntaxHighlighter language="javascript">
          {error.stack?.toString() || error.message}
        </ErrorCodeSyntaxHighlighter>

      </div>

    </div>
  );
};

export const ErrorBoundary = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
};