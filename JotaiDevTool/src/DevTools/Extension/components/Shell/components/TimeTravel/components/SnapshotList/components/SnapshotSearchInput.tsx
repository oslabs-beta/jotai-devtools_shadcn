// import React, { memo } from 'react';
// import { TextInput } from '@mantine/core';
// import { useSnapshotSearchInput } from '../../../atoms';

// export const SnapshotSearchInput = memo(() => {
//   const [userInput, setUserInput] = useSnapshotSearchInput();

//   const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
//     event,
//   ) => {
//     const {
//       target: { value },
//     } = event;
//     setUserInput(value);
//   };

//   return (
//     <TextInput
//       placeholder="Search"
//       value={userInput}
//       onChange={handleOnChange}
//       id="jotai-devtools-search-input"
//     />
//   );
// });

import React, { memo } from 'react';
import { Input } from '../../../../../../../../../../components/ui/input';
import { useSnapshotSearchInput } from '../../../atoms';

export const SnapshotSearchInput = memo(() => {
  const [userInput, setUserInput] = useSnapshotSearchInput();

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const {
      target: { value },
    } = event;
    setUserInput(value);
  };

  return (
    <Input
      type="text"
      placeholder="Search"
      value={userInput}
      onChange={handleOnChange}
      id="jotai-devtools-search-input"
      className=" dark:bg-slate-500 dark:focus:border-white dark:focus:text-gray-100 dark:text-white"
    />
  );
});
