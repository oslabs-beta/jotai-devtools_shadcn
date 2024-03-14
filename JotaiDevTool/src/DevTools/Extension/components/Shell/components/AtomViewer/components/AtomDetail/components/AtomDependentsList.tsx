import * as React from 'react';
import { AnyAtom } from 'src/types';
import { useAtomsSnapshots } from '../../../../../../../../hooks/useAtomsSnapshots';
import { atomToPrintable } from '../../../../../../../../utils/';
import { cn } from '../../../../../../../../../../lib/utils';


type AtomDependentsListProps = {
  atom: AnyAtom;
};

export const AtomDependentsList = ({
  atom,
}: AtomDependentsListProps): JSX.Element => {
  const { dependents } = useAtomsSnapshots();

  const depsForAtom = React.useMemo(() => {
    const arr = Array.from(dependents.get(atom) || []);
    const filteredCurrentAtom = arr.filter(
      (a) => a.toString() !== atom.toString(),
    );

    return filteredCurrentAtom;
  }, [dependents, atom]);

  const listOfDependents = React.useMemo(
    () =>
      depsForAtom.map((atom, i) => {
        const parsedDebugLabel = atomToPrintable(atom);
        return (
          <li 
            key={`${i}-${atom.toString()}-dependents-list`}
            className="mb-2 last:mb-0"
          >
            <code 
            data-testid={`dependents-list-item-${parsedDebugLabel}-${i}`}
            className={cn('text-sm font-mono text-foreground bg-gray-100 dark:bg-slate-600 px-2 py-1 rounded')}
            >
              {parsedDebugLabel}
            </code>
          </li>
        );
      }),
    [depsForAtom],
  );

  return (
    <div className='space-y-4 m-4 md:m-6'>
      <h2 className='font-bold font-inter text-grey-900 dark:text-gray-200'>
        Dependents
      </h2>
      {listOfDependents.length ? (
        <ol className='list-decimal pl-4 space-y-2 text-gray-400 dark:text-gray-200'>
          {listOfDependents}
        </ol>
      ) : (
        <p className='text-sm font-inter text-grey-900 dark:text-gray-200'>
          No dependents
        </p>
      )}
    </div>
  );
};
