import React, { useState } from 'react';
import { IconCircleCheck, IconRotate2 } from '@tabler/icons-react';
import { AtomsSnapshot } from '../../../../../../../../../../../types';
import { useGotoAtomsSnapshot } from '../../../../../../../../../../../utils';
import { useUserStoreOptions } from '../../../../../../../../../../hooks/useUserStore';
import { useIsTimeTravelingValue } from '../../../../../atoms';

type SnapshotActionsProps = {
  snapshotToGoTo: AtomsSnapshot;
  isRestorable: boolean;
};

export const SnapshotActions = (props: SnapshotActionsProps) => {
  const [justRestored, setJustRestored] = useState(false);
  const gotoSnapshot = useGotoAtomsSnapshot(useUserStoreOptions());
  const isTimeTraveling = useIsTimeTravelingValue();

  const handleOnRestoreClick = () => {
    setJustRestored(true);
    gotoSnapshot(props.snapshotToGoTo);
  };

  return (
    <div className="space-y-4">
      <h2 className="flex justify-center text-l font-bold font-inter text-grey-900 dark:text-gray-200 leading-6">
        Actions
      </h2>
      <button
        title="Restore this state"
        onClick={handleOnRestoreClick}
        disabled={!props.isRestorable || isTimeTraveling || justRestored}
        className={`flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium ${
          justRestored
            ? 'bg-gray-300 text-grey-900 dark:bg-grey-600 dark:text-grey-100'
            : 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600'
        } ${!props.isRestorable || isTimeTraveling || justRestored ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {justRestored ? (
          <IconCircleCheck size={16} />
        ) : (
          <IconRotate2 size={16} className="rotate-[130deg]" />
        )}
        <span>{justRestored ? 'Restored' : 'Restore'}</span>
      </button>
    </div>
  );
};