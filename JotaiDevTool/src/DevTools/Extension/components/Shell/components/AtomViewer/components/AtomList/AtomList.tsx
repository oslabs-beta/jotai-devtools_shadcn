// ----- ORGINAL CODE -----

// import * as React from 'react';
// import { Box, Group, Sx, Text, TextInput } from '@mantine/core';
// import { IconAlertCircle } from '@tabler/icons-react';
// import { useAtom, useAtomValue } from 'jotai/react';
// import { useSyncSnapshotValuesToAtom } from '../../../../../../../hooks/useAtomsSnapshots';
// import { useDevtoolsJotaiStoreOptions } from '../../../../../../../internal-jotai-store';
// import { atomToPrintable } from '../../../../../../../utils';
// import { ActionListItem } from '../../../ActionListItem';
// import {
//   filteredValuesAtom,
//   searchInputAtom,
//   selectedAtomAtom,
// } from '../../atoms';

// const textStyles: Sx = {
//   position: 'sticky',
//   top: 0,
// };

// const SearchAtoms = React.memo(() => {
//   const [userInput, setUserInput] = useAtom(
//     searchInputAtom,
//     useDevtoolsJotaiStoreOptions(),
//   );

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
//       label="Search"
//       placeholder="atom debug label"
//       pt={10}
//       pb={10}
//       sx={textStyles}
//       value={userInput}
//       onChange={handleOnChange}
//       id="jotai-devtools-atom-debug-search-input"
//     />
//   );
// });

// const atomItemsWrapperStyle = { overflow: 'auto' };

// export const AtomList = () => {
//   useSyncSnapshotValuesToAtom();

//   const values = useAtomValue(
//     filteredValuesAtom,
//     useDevtoolsJotaiStoreOptions(),
//   );
//   const [selectedAtomData, setSelectedAtomAtom] = useAtom(
//     selectedAtomAtom,
//     useDevtoolsJotaiStoreOptions(),
//   );

//   const valuesRef = React.useRef(values);

//   React.useEffect(() => {
//     valuesRef.current = values;
//   }, [values]);

//   const handleOnClick = React.useCallback(
//     (pos: string | number) => {
//       if (typeof pos === 'string') {
//         throw new Error('Invalid atom position, must be a number');
//       }

//       if (!valuesRef.current[pos]) {
//         // This should almost never occur
//         // Atom pos and valuesRef.current are out-of-sync if it occurs
//         throw new Error(`Unable to find atom at ${pos} index`);
//       }

//       setSelectedAtomAtom((currValue) => {
//         // TODO Should we find this by atom key instead?
//         const foundAtom = valuesRef.current[pos]?.[0];

//         if (!foundAtom || currValue?.atomKey === foundAtom?.toString()) {
//           return undefined;
//         }

//         return { atomKey: foundAtom?.toString(), atom: foundAtom };
//       });
//     },
//     [setSelectedAtomAtom],
//   );

//   const atomItems = React.useMemo(
//     () =>
//       values.map(([atom], i) => {
//         const atomKey = atom.toString();
//         return (
//           <ActionListItem
//             key={`atom-list-item-${atomKey + i}`}
//             label={atomToPrintable(atom)}
//             onClick={handleOnClick}
//             id={i}
//             isActive={selectedAtomData?.atomKey === atomKey}
//           />
//         );
//       }),
//     [values, selectedAtomData, handleOnClick],
//   );

//   const noResultsFound = !values.length;

//   return (
//     <>
//       <SearchAtoms />
//       <Box sx={atomItemsWrapperStyle}>{atomItems}</Box>
//       {noResultsFound && (
//         <Group mt={20} position="center">
//           <IconAlertCircle size={16} />
//           <Text fz="sm" ml={0} data-testid="atom-list-no-atoms-found-message">
//             No Atoms found!
//           </Text>
//         </Group>
//       )}
//     </>
//   );
// };


// ----- Half Migrated code -----
// import '../../../../../../../../../app/globals.css';
// import * as React from 'react';
// // import { Box, Group, Sx, Text, TextInput } from '@mantine/core';
// import { IconAlertCircle } from '@tabler/icons-react';
// import { useAtom, useAtomValue } from 'jotai/react';
// import { useSyncSnapshotValuesToAtom } from '../../../../../../../hooks/useAtomsSnapshots';
// import { useDevtoolsJotaiStoreOptions } from '../../../../../../../internal-jotai-store';
// import { atomToPrintable } from '../../../../../../../utils';
// import { ActionListItem } from '../../../ActionListItem';
// import { filteredValuesAtom, searchInputAtom, selectedAtomAtom } from '../../atoms';
// import { Label } from '../../../../../../../../../components/ui/label'
// import { Input } from '../../../../../../../../../components/ui/input'

// // const searchInputWrapperStyles: Sx = {
// //   position: 'sticky',
// //   top: 0,
// //   zIndex: 10,
// //   background: 'white',
// //   paddingTop: 10,
// //   paddingBottom: 10,
// // };

// const SearchAtoms = React.memo(() => {
//   const [userInput, setUserInput] = useAtom(
//     searchInputAtom,
//     useDevtoolsJotaiStoreOptions(),
//   );

//   const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setUserInput(value);
//   };

//   return (
//     // <Box sx={searchInputWrapperStyles}>
//     //   <TextInput
//     //     label="Search"
//     //     placeholder="atom debug label"
//     //     value={userInput}
//     //     onChange={handleOnChange}
//     //     id="jotai-devtools-atom-debug-search-input"
//     //   />
//     // </Box>
//   <div className="sticky top-0 z-10 bg-white py-4 ">
//     <Label htmlFor="search" >Search</Label>
//     <Input
//   id="search"
//   placeholder="atom debug label"
//   value={userInput}
//   onChange={handleOnChange}
//   className='focus:border'
// />
//   </div>
//   );
// });

// // const atomItemsWrapperStyle = { 
// //   overflow: 'auto', 
// //   boxSizing: 'border-box',
// // };

// const atomItemsWrapperStyle = "overflow-auto box-border";

// export const AtomList = () => {
//   useSyncSnapshotValuesToAtom();
//   const values = useAtomValue(filteredValuesAtom, useDevtoolsJotaiStoreOptions());
//   const [selectedAtomData, setSelectedAtomAtom] = useAtom(
//     selectedAtomAtom,
//     useDevtoolsJotaiStoreOptions(),
//   );

//   const valuesRef = React.useRef(values);
//   React.useEffect(() => {
//     valuesRef.current = values;
//   }, [values]);

//   const handleOnClick = React.useCallback(
//     (pos: string | number) => {
//       if (typeof pos === 'string') {
//         throw new Error('Invalid atom position, must be a number');
//       }
//       if (!valuesRef.current[pos]) {
//         // This should almost never occur
//         // Atom pos and valuesRef.current are out-of-sync if it occurs
//         throw new Error(`Unable to find atom at ${pos} index`);
//       }
//       setSelectedAtomAtom((currValue) => {
//         // TODO Should we find this by atom key instead?
//         const foundAtom = valuesRef.current[pos]?.[0];
//         if (!foundAtom || currValue?.atomKey === foundAtom?.toString()) {
//           return undefined;
//         }
//         return { atomKey: foundAtom?.toString(), atom: foundAtom };
//       });
//     },
//     [setSelectedAtomAtom],
//   );

//   const atomItems = React.useMemo(
//     () =>
//       values.map(([atom], i) => {
//         const atomKey = atom.toString();
//         return (
//           <ActionListItem
//             key={`atom-list-item-${atomKey + i}`}
//             label={atomToPrintable(atom)}
//             onClick={handleOnClick}
//             id={i}
//             isActive={selectedAtomData?.atomKey === atomKey}
//           />
//         );
//       }),
//     [values, selectedAtomData, handleOnClick],
//   );

//   const noResultsFound = !values.length;

//   // return (
//   //   <>
//   //     <SearchAtoms />
//   //     <Box sx={atomItemsWrapperStyle}>{atomItems}</Box>
//   //     {noResultsFound && (
//   //       <Group mt={20} position="center">
//   //         <IconAlertCircle size={16} />
//   //         <Text fz="sm" ml={0} data-testid="atom-list-no-atoms-found-message">
//   //           No Atoms found!
//   //         </Text>
//   //       </Group>
//   //     )}
//   //   </>
//   // );

//   return (
//     <>
//       <SearchAtoms />
//       <div className="overflow-auto box-border">{atomItems}</div>
//       {noResultsFound && (
//         <div className="mt-5 flex items-center justify-center">
//           <IconAlertCircle className="w-4 h-4" />
//           <span className="ml-2 text-sm" data-testid="atom-list-no-atoms-found-message">
//             No Atoms found!
//           </span>
//         </div>
//       )}
//     </>
//   );
// };


//---- full migration -----

import '../../../../../../../../../app/globals.css';
import * as React from 'react';
import { IconAlertCircle } from '@tabler/icons-react';
import { useAtom, useAtomValue } from 'jotai/react';
import { useSyncSnapshotValuesToAtom } from '../../../../../../../hooks/useAtomsSnapshots';
import { useDevtoolsJotaiStoreOptions } from '../../../../../../../internal-jotai-store';
import { atomToPrintable } from '../../../../../../../utils';
import { ActionListItem } from '../../../ActionListItem';
import { filteredValuesAtom, searchInputAtom, selectedAtomAtom } from '../../atoms';
import { Label } from '../../../../../../../../../components/ui/label';
import { Input } from '../../../../../../../../../components/ui/input';
import { useToggleDarkMode } from '../../../../../../../hooks/useDarkMode'

const SearchAtoms = React.memo(() => {
  const [userInput, setUserInput] = useAtom(
    searchInputAtom,
    useDevtoolsJotaiStoreOptions(),
  );

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      target: { value },
    } = event;
    setUserInput(value);
  };
  const [darkMode, toggleDarkMode] = useToggleDarkMode(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
    <div className="sticky top-0 z-10 bg-white dark:bg-slate-700 dark:text-gray-200 py-4">
      <Label htmlFor="search">Search</Label>
      <Input
        id="search"
        placeholder="atom debug label"
        value={userInput}
        onChange={handleOnChange}
        className="focus:border dark:bg-slate-500 dark:text-gray-300 dark:focus:border-white"
      />
    </div>
    </div>
  );
});

const atomItemsWrapperStyle = "overflow-auto box-border dark:bg-slate-700 dark:text-gray-200";

export const AtomList = () => {
  useSyncSnapshotValuesToAtom();
  const values = useAtomValue(filteredValuesAtom, useDevtoolsJotaiStoreOptions());
  const [selectedAtomData, setSelectedAtomAtom] = useAtom(
    selectedAtomAtom,
    useDevtoolsJotaiStoreOptions(),
  );

  const valuesRef = React.useRef(values);
  React.useEffect(() => {
    valuesRef.current = values;
  }, [values]);

  const handleOnClick = React.useCallback(
    (pos: string | number) => {
      if (typeof pos === 'string') {
        throw new Error('Invalid atom position, must be a number');
      }
      if (!valuesRef.current[pos]) {
        // This should almost never occur
        // Atom pos and valuesRef.current are out-of-sync if it occurs
        throw new Error(`Unable to find atom at ${pos} index`);
      }
      setSelectedAtomAtom((currValue) => {
        // TODO Should we find this by atom key instead?
        const foundAtom = valuesRef.current[pos]?.[0];
        if (!foundAtom || currValue?.atomKey === foundAtom?.toString()) {
          return undefined;
        }
        return { atomKey: foundAtom?.toString(), atom: foundAtom };
      });
    },
    [setSelectedAtomAtom],
  );

  const atomItems = React.useMemo(
    () =>
      values.map(([atom], i) => {
        const atomKey = atom.toString();
        return (
          <ActionListItem
            key={`atom-list-item-${atomKey + i}`}
            label={atomToPrintable(atom)}
            onClick={handleOnClick}
            id={i}
            isActive={selectedAtomData?.atomKey === atomKey}
          />
        );
      }),
    [values, selectedAtomData, handleOnClick],
  );

  const noResultsFound = !values.length;
  const [darkMode, toggleDarkMode] = useToggleDarkMode(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
    <>
      <SearchAtoms />
      <div className={atomItemsWrapperStyle}>{atomItems}</div>
      {noResultsFound && (
        <div className="mt-5 flex items-center justify-center">
          <IconAlertCircle className="w-4 h-4" />
          <span className="ml-2 text-sm" data-testid="atom-list-no-atoms-found-message">
            No Atoms found!
          </span>
        </div>
        
      )}
    </>
    </div>
  );
};