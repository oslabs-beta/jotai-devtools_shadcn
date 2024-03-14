
import '../../../../../../../../../app/globals.css';
import * as React from 'react';
import { IconAlertCircle } from '@tabler/icons-react';
import { useAtom, useAtomValue } from 'jotai/react';
import { useSyncSnapshotValuesToAtom } from '../../../../../../../hooks/useAtomsSnapshots';
import { useDevtoolsJotaiStoreOptions } from '../../../../../../../internal-jotai-store';
import { atomToPrintable } from '../../../../../../../utils';
import { ActionListItem } from '../../../ActionListItem';
import { filteredValuesAtom, searchInputAtom, selectedAtomAtom } from '../../atoms';
import { Label } from '../../../../../../../../../components/ui/label';
import { Input } from '../../../../../../../../../components/ui/input';

const SearchAtoms = React.memo(() => {
  const [userInput, setUserInput] = useAtom(
    searchInputAtom,
    useDevtoolsJotaiStoreOptions(),
  );

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      target: { value },
    } = event;
    setUserInput(value);
  };


  return (
    <div className="sticky top-0 bg-gray-200 dark:bg-slate-700 dark:text-gray-200 rounded rounded-b-none">
      <div className="py-2.5 px-4 pt-5">
        <Label htmlFor="search">Search</Label>
        <Input
          id="search"
          placeholder="atom debug label"
          value={userInput}
          onChange={handleOnChange}
          className="focus:border dark:bg-slate-500 dark:focus:border-white dark:placeholder-gray-300 placeholder-gray-300 "
        />
      </div>
    </div>
  );
});


const atomItemsWrapperStyle = "overflow-auto box-border bg-gray-200 dark:bg-slate-700 dark:text-gray-200 rounded rounded-t-none";

export const AtomList = () => {
  useSyncSnapshotValuesToAtom();
  const values = useAtomValue(filteredValuesAtom, useDevtoolsJotaiStoreOptions());
  const [selectedAtomData, setSelectedAtomAtom] = useAtom(
    selectedAtomAtom,
    useDevtoolsJotaiStoreOptions(),
  );

  const valuesRef = React.useRef(values);
  React.useEffect(() => {
    valuesRef.current = values;
  }, [values]);

  const handleOnClick = React.useCallback(
    (pos: string | number) => {
      if (typeof pos === 'string') {
        throw new Error('Invalid atom position, must be a number');
      }
      if (!valuesRef.current[pos]) {
        // This should almost never occur
        // Atom pos and valuesRef.current are out-of-sync if it occurs
        throw new Error(`Unable to find atom at ${pos} index`);
      }
      setSelectedAtomAtom((currValue) => {
        // TODO Should we find this by atom key instead?
        const foundAtom = valuesRef.current[pos]?.[0];
        if (!foundAtom || currValue?.atomKey === foundAtom?.toString()) {
          return undefined;
        }
        return { atomKey: foundAtom?.toString(), atom: foundAtom };
      });
    },
    [setSelectedAtomAtom],
  );

  const atomItems = React.useMemo(
    () =>
      values.map(([atom], i) => {
        const atomKey = atom.toString();
        return (
          <ActionListItem
            key={`atom-list-item-${atomKey + i}`}
            label={atomToPrintable(atom)}
            onClick={handleOnClick}
            id={i}
            isActive={selectedAtomData?.atomKey === atomKey}
          />
        );
      }),
    [values, selectedAtomData, handleOnClick],
  );

  const noResultsFound = !values.length;

  return (
    <>
      <SearchAtoms />
      <div className={atomItemsWrapperStyle}>{atomItems}</div>
      {noResultsFound && (
        <div className="mt-5 flex items-center justify-center">
          <IconAlertCircle className="w-4 h-4" />
          <span className="ml-2 text-sm" data-testid="atom-list-no-atoms-found-message">
            No Atoms found!
          </span>
        </div>
        
      )}
    </>
  );
};