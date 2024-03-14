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
      <SelectTrigger className="h-8 w-14 dark:bg-slate-300">
        <SelectValue placeholder="Speed"/>
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-gray-800"
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





{/* <button type="button" role="combobox" aria-controls="radix-:rp:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 w-20"><span style="pointer-events: none;">2</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button> */}

{/* <div data-radix-popper-content-wrapper="" dir="ltr" style="position: fixed; left: 0px; top: 0px; transform: translate(601px, 508.5px); min-width: max-content; will-change: transform; z-index: 50; --radix-popper-available-width: 128px; --radix-popper-available-height: 658.5px; --radix-popper-anchor-width: 64.984375px; --radix-popper-anchor-height: 40px; --radix-popper-transform-origin: 0% 160px;"><div data-side="top" data-align="start" role="listbox" id="radix-:rp:" data-state="open" dir="ltr" class="relative z-50 min-w-[8rem] overflow-hidden rounded-md border text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 bg-white dark:bg-gray-800 max-h-40 overflow-y-auto" tabindex="-1" style="box-sizing: border-box; display: flex; flex-direction: column; outline: none; --radix-select-content-transform-origin: var(--radix-popper-transform-origin); --radix-select-content-available-width: var(--radix-popper-available-width); --radix-select-content-available-height: var(--radix-popper-available-height); --radix-select-trigger-width: var(--radix-popper-anchor-width); --radix-select-trigger-height: var(--radix-popper-anchor-height); pointer-events: auto;"><style>[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}</style><div data-radix-select-viewport="" role="presentation" class="p-1 h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]" style="position: relative; flex: 1 1 0%; overflow: auto;"><div role="option" aria-labelledby="radix-:r2n:" aria-selected="false" data-state="unchecked" tabindex="-1" class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" data-radix-collection-item=""><span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"></span><span id="radix-:r2n:">0.5</span></div><div role="option" aria-labelledby="radix-:r2p:" aria-selected="false" data-state="checked" tabindex="-1" class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" data-radix-collection-item=""><span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"><span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-4 w-4"><path d="M20 6 9 17l-5-5"></path></svg></span></span><span id="radix-:r2p:">1</span></div><div role="option" aria-labelledby="radix-:r2r:" aria-selected="false" data-state="unchecked" tabindex="-1" class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" data-radix-collection-item=""><span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"></span><span id="radix-:r2r:">1.5</span></div><div role="option" aria-labelledby="radix-:r2t:" aria-selected="false" data-state="unchecked" tabindex="-1" class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" data-radix-collection-item=""><span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"></span><span id="radix-:r2t:">1.75</span></div><div role="option" aria-labelledby="radix-:r2v:" aria-selected="false" data-state="unchecked" tabindex="-1" class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" data-radix-collection-item=""><span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"></span><span id="radix-:r2v:">2</span></div></div><div aria-hidden="true" class="flex cursor-default items-center justify-center py-1" style="flex-shrink: 0;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4"><path d="m6 9 6 6 6-6"></path></svg></div></div></div>
 */}
