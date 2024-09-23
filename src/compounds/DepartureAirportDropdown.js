import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { BRAND } from '../environment/environment'

export const DepartureAirportDropdown = ({airports, handleDeparture}) => {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected) {
      handleDeparture(selected.iatacode);
    }
  }, [selected])
  return (
    <div className="w-full max-w-56 px-2">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            'relative flex truncate justify-between items-center w-full rounded-lg bg-white py-1.5 text-left text-sm/6 text-brand',
            'focus:outline-none'
          )}
        >
          {selected != null ? selected.name : "Pick one airport"}
          <FontAwesomeIcon icon={faChevronDown} color={BRAND} />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'rounded-xl border border-brand bg-white p-1 my-2 focus:outline-none',
            'transition duration-100 ease-in'
          )}
        >
          {airports.map((airport) => (
            <ListboxOption
              key={airport.id}
              value={airport}
              className="group flex cursor-pointer items-center rounded-lg py-1.5 px-3 my-1 select-none"
            >
              <div className="text-sm/6 text-brand">{airport.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
};