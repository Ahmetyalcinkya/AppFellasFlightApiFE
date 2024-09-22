import { Radio, RadioGroup } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAirlines } from '../redux/features/thunk/fetchAirlines';

export const AirlineRadioGroup = ({handleAirline}) => {

  const [selected, setSelected] = useState(null)
  const dispatch = useDispatch();
  const {airlines} = useSelector((state) => state.airline);

  useEffect(() => {
    airlines.length === 0 && dispatch(fetchAllAirlines());
  }, [])

  useEffect(() => {
    if (selected) {
      handleAirline(selected.id);
    }
  }, [selected])

  return (
    <div className="w-full pt-4">
      <div className="w-full max-h-96 overflow-y-scroll">
        <RadioGroup by="name" value={selected} onChange={setSelected} className="gap-y-2">
          {airlines.map((airline) => (
            <Radio
              key={airline.id}
              value={airline}
              className="group relative flex cursor-pointer rounded-lg bg-white py-2 my-4 px-5 text-brand shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-brand data-[checked]:bg-brand/10"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold text-brand">{airline.name}</p>
                </div>
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
};