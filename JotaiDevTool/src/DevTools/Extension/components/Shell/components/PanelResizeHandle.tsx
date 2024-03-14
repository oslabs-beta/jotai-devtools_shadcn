import React from 'react';
import { cn } from '../../../../../../lib/utils';
import { PanelResizeHandle as ReactPanelResizeHandle } from 'react-resizable-panels';
import { useThemeMode } from '../../../../hooks/useThemeMode';

const reactPanelResizeHandleStyles = cn(
  'flex items-center',
  '[&_.jotai-devtools-internal-panel-resize-handle]:transition-[max-height,min-height,height] [&_.jotai-devtools-internal-panel-resize-handle]:duration-200 [&_.jotai-devtools-internal-panel-resize-handle]:ease-out',
  '[&[data-resize-handle-active]_.jotai-devtools-internal-panel-resize-handle]:h-[90%] [&[data-resize-handle-active]_.jotai-devtools-internal-panel-resize-handle]:min-h-[90%] [&[data-resize-handle-active]_.jotai-devtools-internal-panel-resize-handle]:max-h-[90%]',
  '[&:hover_.jotai-devtools-internal-panel-resize-handle]:h-[90%] [&:hover_.jotai-devtools-internal-panel-resize-handle]:min-h-[90%] [&:hover_.jotai-devtools-internal-panel-resize-handle]:max-h-[90%]'
);

const innerContainerStyles = cn('rounded-[2rem] align-middle');

export const PanelResizeHandle = () => {
  return (
    <ReactPanelResizeHandle id="jotai-devtools-panel-resize-handle">
      <div className={cn(' h-full', reactPanelResizeHandleStyles)}>
        <div
          className={cn(
            'jotai-devtools-internal-panel-resize-handle max-h-25 min-h-12 h-[20%] w-1.5 m-1 dark:bg-gray-400',
            useThemeMode('bg-gray-200', 'bg-gray-700'),
            innerContainerStyles
          )}
        />
      </div>
    </ReactPanelResizeHandle>
  );
};