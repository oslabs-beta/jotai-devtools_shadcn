// tabs.tsx
import React from 'react';
import { AtomViewer } from './components/AtomViewer';
import { TimeTravel } from './components/TimeTravel';
import  ReactFlow  from './components/AtomGraph/Graph';

export const tabs = [
  {
    value: 'atom-viewer',
    label: 'Atom Viewer',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-2 stroke-current text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    ),
    content: <AtomViewer />,
  },
  {
    value: 'time-travel',
    label: 'Time Travel',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-2 stroke-current text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16l6 -7l5 5l5 -6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
        />
      </svg>
    ),
    content: <TimeTravel />,
  },
  {
    value: 'atom-graph',
    label: 'Atom Graph',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-2 fill-current text-gray-500"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
        />
      </svg>
    ),
    content: <ReactFlow />,
  },
];