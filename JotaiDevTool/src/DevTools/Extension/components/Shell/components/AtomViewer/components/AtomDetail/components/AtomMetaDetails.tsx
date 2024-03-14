import * as React from 'react';
import { AtomValueType } from '../../../../../../../../utils/get-type-of-atom-value';
import { MetaInfo } from '../../../../MetaInfo';

type AtomMetaDetailsProps = {
  debugLabel: string;
  atomValueType: AtomValueType;
  isAtomPrivate?: boolean | undefined;
};

export const AtomMetaDetails = React.memo(
  ({
    debugLabel,
    atomValueType,
    isAtomPrivate,
  }: AtomMetaDetailsProps): JSX.Element => {
    return (
      <div className='space-y-4 dark:text-gray-200'>
        <h2 className='font-bold font-inter text-grey-900 dark:text-gray-200'>
          Meta
        </h2>
        <MetaInfo label="Debug Label" value={debugLabel}/>
        <MetaInfo label="Value type" value={atomValueType} />
        {isAtomPrivate && (
          <MetaInfo label="Private" value={'Yes'} color={'red'} />
        )}
      </div>
    );
  },
);

AtomMetaDetails.displayName = 'AtomMetaDetails';
