import React from 'react';
import { AnyAtom } from 'src/types';
import {
  atomToPrintable,
  getTypeOfAtomValue,
} from '../../../../../../../../utils';
import { useInternalAtomValue } from '../../../hooks/useInternalAtomValue';
import { AtomDependentsList } from './AtomDependentsList';
import { AtomMetaDetails } from './AtomMetaDetails';
import { AtomValue } from './AtomValue';

type DisplayAtomDetailsProps = {
  atom: AnyAtom;
};

export const DisplayAtomDetails = ({ atom }: DisplayAtomDetailsProps) => {
  const atomValue = useInternalAtomValue(atom);
  const atomValueType = getTypeOfAtomValue(atomValue);

  return (
    <div className='column h-auto dark:text-gray-300'>
      <h3 className='flex justify-center font-bold text-2xl mb-8'>Atom Details</h3>
      <AtomMetaDetails
        debugLabel={atomToPrintable(atom)}
        atomValueType={atomValueType}
        isAtomPrivate={atom?.debugPrivate}
      />

      <AtomValue atomValue={atomValue} />

      {/* TODO add dependencies list */}

      <AtomDependentsList atom={atom} />
    </div>
  );
};