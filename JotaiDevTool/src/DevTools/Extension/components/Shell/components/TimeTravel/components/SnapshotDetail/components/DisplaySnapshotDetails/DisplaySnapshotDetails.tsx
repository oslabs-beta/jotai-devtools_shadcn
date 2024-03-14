// --------- ORIGINAL ---------
// import React from 'react';
// import { Stack, Title } from '@mantine/core';
// import { SelectedSnapshotDetail } from '../../atoms';
// import { SnapshotActions } from './components/SnapshotActions';
// import { SnapshotMetaDetails } from './components/SnapshotMetaDetails';
// import { SnapshotValue } from './components/SnapshotValue';

// type DisplaySnapshotDetailsProps = {
//   details: SelectedSnapshotDetail;
// };

// export const DisplaySnapshotDetails = (props: DisplaySnapshotDetailsProps) => {
//   return (
//     <Stack h="auto" pb="sm">
//       <Title size="h3">Snapshot {props.details.label}</Title>
//       <SnapshotMetaDetails timestamp={props.details.timestamp} />
//       <SnapshotValue state={props.details} />
//       <SnapshotActions
//         snapshotToGoTo={props.details.value}
//         isRestorable={props.details.isRestorable}
//         key={props.details.id}
//       />
//     </Stack>
//   );
// };



//----------- SHADCN -----------
import React from 'react';
import { SelectedSnapshotDetail } from '../../atoms';
import { SnapshotActions } from './components/SnapshotActions';
import { SnapshotMetaDetails } from './components/SnapshotMetaDetails';
import { SnapshotValue } from './components/SnapshotValue';

type DisplaySnapshotDetailsProps = {
  details: SelectedSnapshotDetail;
};

export const DisplaySnapshotDetails = (props: DisplaySnapshotDetailsProps) => {
  return (
    <div className="column h-auto space-y-4 dark:text-gray-300">
      <h3 className='flex justify-center font-bold text-2xl mb-8'>
        Snapshot {props.details.label}
      </h3>
        <SnapshotMetaDetails timestamp={props.details.timestamp} />
        <SnapshotValue state={props.details} />
        <SnapshotActions
          snapshotToGoTo={props.details.value}
          isRestorable={props.details.isRestorable}
          key={props.details.id}
        />
    </div>
  );
};