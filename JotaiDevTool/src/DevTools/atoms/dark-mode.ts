// dark-mode.ts
import { useAtomValue, useSetAtom } from 'jotai/react';
import { atom } from 'jotai/vanilla';

const darkModeAtom = atom<boolean>(false);

export const useDarkModeValue = () => useAtomValue(darkModeAtom);

export const useSetDarkMode = () => useSetAtom(darkModeAtom);