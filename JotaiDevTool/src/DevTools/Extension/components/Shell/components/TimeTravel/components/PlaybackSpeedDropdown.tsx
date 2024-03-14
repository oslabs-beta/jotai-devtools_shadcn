//----- Original Code --------
// import React from 'react';
// import { Select } from '@mantine/core';
// import { defaultPlaybackOptions, usePlaybackSpeedOption } from '../atoms';

// const options = Object.keys(
//   defaultPlaybackOptions,
// ) as (keyof typeof defaultPlaybackOptions)[];

// const isValidPlaybackOption = (
//   value: string | null,
// ): value is keyof typeof defaultPlaybackOptions => {
//   return options.includes(value as keyof typeof defaultPlaybackOptions);
// };

// export const PlaybackSpeedDropdown = () => {
//   const [value, setOption] = usePlaybackSpeedOption();

//   const handleOnChange = (value: string | null) => {
//     if (isValidPlaybackOption(value)) {
//       return setOption(value);
//     }
//     throw new Error(`[jotai-devtools]: invalid playback option: ${value}`);
//   };

//   return (
//     <Select
//       value={value}
//       dropdownPosition="top"
//       data={options}
//       onChange={handleOnChange}
//       size="xs"
//       maw={80}
//       color="dark"
//       id="jotai-devtools-playback-speed-dropdown"
//       data-testid="jotai-devtools-playback-speed-dropdown"
//     />
//   );
// };


//----Shadcn----

// import React from 'react';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../../../../../../../components/ui/select"
// import { defaultPlaybackOptions, usePlaybackSpeedOption } from '../atoms';

// const options = Object.keys(
//   defaultPlaybackOptions,
// ) as (keyof typeof defaultPlaybackOptions)[];

// const isValidPlaybackOption = (
//   value: string | null,
// ): value is keyof typeof defaultPlaybackOptions => {
//   return options.includes(value as keyof typeof defaultPlaybackOptions);
// };

// export const PlaybackSpeedDropdown = () => {
//   const [value, setOption] = usePlaybackSpeedOption();

//   const handleOnChange = (value: string | null) => {
//     if (isValidPlaybackOption(value)) {
//       return setOption(value);
//     }
//     throw new Error(`[jotai-devtools]: invalid playback option: ${value}`);
//   };

//   return (
//     <Select
//     value={value}
//     onValueChange={handleOnChange}
//     name="jotai-devtools-playback-speed-dropdown"
//     data-testid="jotai-devtools-playback-speed-dropdown"
//   >
//     <SelectTrigger className="w-20">
//       <SelectValue placeholder="Speed" />
//     </SelectTrigger>
//     <SelectContent>
//       {options.map((option) => (
//         <SelectItem key={option} value={option}>
//           {defaultPlaybackOptions[option]}
//         </SelectItem>
//       ))}
//     </SelectContent>
//   </Select>
//   );
// };



import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../../../components/ui/select"
import { defaultPlaybackOptions, usePlaybackSpeedOption } from '../atoms';

const options = Object.keys(defaultPlaybackOptions) as (keyof typeof defaultPlaybackOptions)[];

const isValidPlaybackOption = (
  value: string | null,
): value is keyof typeof defaultPlaybackOptions => {
  return options.includes(value as keyof typeof defaultPlaybackOptions);
};

export const PlaybackSpeedDropdown = () => {
  const [value, setOption] = usePlaybackSpeedOption();

  const handleOnValueChange = (value: string) => {
    if (isValidPlaybackOption(value)) {
      setOption(value);
    } else {
      throw new Error(`[jotai-devtools]: invalid playback option: ${value}`);
    }
  };

  return (
    <Select
      value={value}
      onValueChange={handleOnValueChange}
      name="playback-speed"
      data-testid="jotai-devtools-playback-speed-dropdown"
      
    >
      <SelectTrigger className="h-8 w-14 dark:bg-slate-400">
        <SelectValue placeholder="Speed"/>
      </SelectTrigger>
      <SelectContent className="bg-white"
        alignOffset={-15}>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {defaultPlaybackOptions[option]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
        }


