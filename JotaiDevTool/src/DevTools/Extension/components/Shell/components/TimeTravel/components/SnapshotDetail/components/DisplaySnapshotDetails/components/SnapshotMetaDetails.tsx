import React from 'react';
import { MetaInfo } from '../../../../../../MetaInfo';



type SnapshotMetaDetailsProps = {
  timestamp: string;
};

export const SnapshotMetaDetails = (props: SnapshotMetaDetailsProps) => {
  return (
    <div className="space-y-4">
      <h2 className="flex justify-center text-l font-bold font-inter text-grey-900 dark:text-gray-200 leading-6">
        Meta
      </h2>
      <MetaInfo label="Timestamp" value={props.timestamp} />
    </div>
  );
};
