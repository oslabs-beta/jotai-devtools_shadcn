import '../../../../../app/globals.css';
import React, { useRef, useState } from 'react';
import { useAtomValue } from 'jotai/react';
import { shellStylesAtom } from '../../../atoms/shell-styles';
import { shellStyleDefaults } from '../../../constants';
import { useDevtoolsJotaiStoreOptions } from '../../../internal-jotai-store';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/Header';
import { ShellResizeBar } from './components/ShellResizeBar';
import {Tabs,TabsContent,TabsList,TabsTrigger,} from '../../../../../components/ui/tabs';
import { Button } from '../../../../../components/ui/button';
import { cn } from '../../../../../lib/utils';
import { tabs } from './Tab-Content';
import { useToggleDarkMode } from '../../../hooks/useDarkMode'


export const Shell = () => {
  const [selectedTab, setSelectedTab] = useState('atom-viewer');
  const [darkMode, toggleDarkMode] = useToggleDarkMode(false);

  const shellRef = useRef<HTMLDivElement>(null);

  // TODO move this to a custom hook
  const { height } = useAtomValue(
    shellStylesAtom,
    useDevtoolsJotaiStoreOptions(),
  );

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Button
      className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white"
      onClick={() => {toggleDarkMode()}}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </Button>
    <Tabs
      defaultValue={selectedTab}
      className="flex w-full flex-col"
      style={{
        height: height,
        maxHeight: shellStyleDefaults.maxHeight,
      }}
      ref={shellRef}
      data-testid="jotai-devtools-shell"
      id="jotai-devtools-shell"
    >
      <ShellResizeBar shellRef={shellRef} />
      <Header />
      <ErrorBoundary>
        
        <TabsList className=' flex justify-start !bg-white border-b-2 border-gray-300 rounded-t-md rounded-b-none dark:bg-slate-800 dark:border-gray-400'>
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              onClick={() => setSelectedTab(tab.value)}
              className={cn(
                'flex items-center px-4 py-2 text-sm font-medium focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2 border-gray-400',
                selectedTab === tab.value
                  ? 'text-black dark:text-gray-100 border-b-2 border-black dark:border-white'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-white',
                  'rounded-t-md rounded-b-none -mb-1',
              )}
            >
              {tab.icon}
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div
          style={{
            height: '100%',
            overflow: 'hidden',
          }}
        >
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="h-full">
              {tab.content}
            </TabsContent>
          ))}
        </div>
      </ErrorBoundary>
    </Tabs>
    </div>
  );
};
