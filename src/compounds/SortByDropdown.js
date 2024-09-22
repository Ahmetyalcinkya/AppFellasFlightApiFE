import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'
import { BRAND } from '../environment/environment'

const sort = [
  { id: 1, name: 'Default' },
  { id: 2, name: 'Highest' },
  { id: 3, name: 'Lowest' },
]

export const SortByDropdown = () => {
  const [selected, setSelected] = useState(sort[0])

  return (
    <div className="w-full py-4">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            'relative flex justify-between items-center w-full rounded-lg bg-white py-1.5 pr-8 pl-3 text-left text-sm/6 text-brand',
            'focus:outline-none'
          )}
        >
          {selected.name}
          <FontAwesomeIcon icon={faChevronDown} color={BRAND} />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--button-width)] rounded-xl border border-brand bg-white p-1 my-2 focus:outline-none',
            'transition duration-100 ease-in'
          )}
        >
          {sort.map((sort) => (
            <ListboxOption
              key={sort.name}
              value={sort}
              className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 my-1 select-none"
            >
              <FontAwesomeIcon icon={faCheck} color={BRAND} />
              <div className="text-sm/6 text-brand">{sort.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
};