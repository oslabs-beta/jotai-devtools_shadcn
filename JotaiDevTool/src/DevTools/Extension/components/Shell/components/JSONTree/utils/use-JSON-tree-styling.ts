// import { MantineTheme, useMantineTheme } from '@mantine/core';
// import type { Base16Theme } from 'base16';
// import { StylingFunction, createStyling } from 'react-base16-styling';
// import { getJsonTreeTheme } from './get-json-tree-theme';

// /**
//  *  Guide on what each color code means:
//  *
//  * base00 - Default Background
//  * base01 - Lighter Background (Used for status bars, line number and folding marks)
//  * base02 - Selection Background
//  * base03 - Comments, Invisibles, Line Highlighting
//  * base04 - Dark Foreground (Used for status bars)
//  * base05 - Default Foreground, Caret, Delimiters, Operators
//  * base06 - Light Foreground (Not often used)
//  * base07 - Light Background (Not often used)
//  * base08 - Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
//  * base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url
//  * base0A - Classes, Markup Bold, Search Text Background
//  * base0B - Strings, Inherited Class, Markup Code, Diff Inserted
//  * base0C - Support, Regular Expressions, Escape Characters, Markup Quotes
//  * base0D - Functions, Methods, Attribute IDs, Headings
//  * base0E - Keywords, Storage, Selector, Markup Italic, Diff Changed
//  * base0F - Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
//  */

// const createJSONTreeTheme = (
//   theme: MantineTheme,
// ): { light: Base16Theme; dark: Base16Theme } => {
//   const light = {
//     scheme: 'Jotai DevTools Light',
//     author: 'Jotai DevTools',
//     base00: theme.fn.rgba(theme.colors.gray[0], 0.65),
//     base01: '#ffffff', // ?? unused
//     base02: '#ffffff', // ?? unused
//     base03: theme.colors.dark[2], // expanded string
//     base04: '#ffffff', // ?? unused
//     base05: '#ffffff', // ?? unused
//     base06: theme.fn.rgba(theme.colors.green[8], 0.65), // reserved for diff add
//     base07: theme.fn.rgba(theme.colors.red[8], 0.65), // reserved for diff remove
//     base08: '#ffffff', // ?? unused
//     base09: theme.colors.blue[8], // boolean, symbol, numbers, constants
//     base0A: theme.colors.violet[9], // function
//     base0B: theme.colors.teal[8], // string, date
//     base0C: '#ffffff', // ?? unused
//     base0D: theme.colors.gray[8], // label and arrow color
//     base0E: '#ffffff', // ?? unused
//     base0F: '#ffffff', // ?? unused
//   };

//   const dark = {
//     scheme: 'Jotai DevTools Dark',
//     author: 'Jotai DevTools',
//     base00: theme.colors.dark[8],
//     base01: '#ffffff', // ?? unused
//     base02: '#ffffff', // ?? unused
//     base03: theme.colors.dark[3], // expanded string
//     base04: '#ffffff', // ?? unused
//     base05: '#ffffff', // ?? unused
//     base06: theme.fn.rgba(theme.colors.green[7], 0.65), // reserved for diff add
//     base07: theme.fn.rgba(theme.colors.red[7], 0.65), // reserved for diff remove
//     base08: '#ffffff', // ?? unused
//     base09: theme.colors.blue[4], // boolean, symbol, numbers, constants
//     base0A: theme.colors.violet[4], // function
//     base0B: theme.colors.teal[4], // string, date
//     base0C: '#ffffff', // ?? unused
//     base0D: theme.colors.gray[4], // label and arrow color
//     base0E: '#ffffff', // ?? unused
//     base0F: '#ffffff', // ?? unused
//   };

//   return { light, dark };
// };

// const useCreateJSONTreeBase16Theme = () => {
//   const theme = useMantineTheme();
//   const base16Theme = createJSONTreeTheme(theme)[theme.colorScheme];
//   return base16Theme;
// };

// export const useJSONTreeStyling = () => {
//   const base16Theme = useCreateJSONTreeBase16Theme();
//   const createStylingFromTheme = createStyling(getJsonTreeTheme, {
//     defaultBase16: base16Theme,
//   });

//   const styling: StylingFunction = createStylingFromTheme(base16Theme);
//   return { theme: getJsonTreeTheme(base16Theme), styling } as const;
// };


// use-JSON-tree-styling.ts

import type { Base16Theme } from 'base16';
import { StylingFunction, createStyling } from 'react-base16-styling';
import { getJsonTreeTheme } from './get-json-tree-theme';
import { useDarkModeValue } from '../../../../../../atoms/dark-mode';
// /JotaiDevTool/src/DevTools/Extension/components/Shell/components/JSONTree/utils/use-JSON-tree-styling.ts
// /JotaiDevTool/src/DevTools/atoms/dark-mode.ts

const createJSONTreeTheme = (): { light: Base16Theme; dark: Base16Theme } => {
  const light = {
    scheme: 'Jotai DevTools Light',
    author: 'Jotai DevTools',
    base00: '#F1F3F5', // theme.fn.rgba(theme.colors.gray[0], 0.65)
    base01: '#ffffff', // ?? unused
    base02: '#ffffff', // ?? unused
    base03: '#C1C2C5', // theme.colors.dark[2]
    base04: '#ffffff', // ?? unused
    base05: '#ffffff', // ?? unused
    base06: '#2F9E44', // theme.fn.rgba(theme.colors.green[8], 0.65)
    base07: '#E03131', // theme.fn.rgba(theme.colors.red[8], 0.65)
    base08: '#ffffff', // ?? unused
    base09: '#1971C2', // theme.colors.blue[8]
    base0A: '#7048E8', // theme.colors.violet[9]
    base0B: '#087F5B', // theme.colors.teal[8]
    base0C: '#ffffff', // ?? unused
    base0D: '#343A40', // theme.colors.gray[8]
    base0E: '#ffffff', // ?? unused
    base0F: '#ffffff', // ?? unused
  };
  
  const dark = {
    scheme: 'Jotai DevTools Dark',
    author: 'Jotai DevTools',
    base00: '#1D2125', // theme.colors.dark[8]
    base01: '#ffffff', // ?? unused
    base02: '#ffffff', // ?? unused
    base03: '#4C4F52', // theme.colors.dark[3]
    base04: '#ffffff', // ?? unused
    base05: '#ffffff', // ?? unused
    base06: '#708090', // theme.fn.rgba(theme.colors.green[7], 0.65)
    base07: '#FA5252', // theme.fn.rgba(theme.colors.red[7], 0.65)
    base08: '#ffffff', // ?? unused
    base09: '#74B9FF', // theme.colors.blue[4]
    base0A: '#A29BFE', // theme.colors.violet[4]
    base0B: '#38D9A9', // theme.colors.teal[4]
    base0C: '#ffffff', // ?? unused
    base0D: '#CED4DA', // theme.colors.gray[4]
    base0E: '#ffffff', // ?? unused
    base0F: '#ffffff', // ?? unused
  };
  return { light, dark };
};

const useCreateJSONTreeBase16Theme = () => {
  const darkMode = useDarkModeValue();
  const colorScheme = darkMode ? 'dark' : 'light';

  const base16Theme = createJSONTreeTheme()[colorScheme];
  return base16Theme;
};

export const useJSONTreeStyling = () => {
  const base16Theme = useCreateJSONTreeBase16Theme();
  const createStylingFromTheme = createStyling(getJsonTreeTheme, {
    defaultBase16: base16Theme,
  });
  const styling: StylingFunction = createStylingFromTheme(base16Theme);

  return {
    theme: getJsonTreeTheme(base16Theme),
    styling,
  } as const;
};