import { Radio, RadioGroup } from '@headlessui/react';
import { useEffect, useState } from 'react';

const plans = [
  { id:1, name: '00:00 AM - 11:59 AM'},
  { id:2, name: '12:00 PM - 23:59 PM'},
]

export const ArrivalTimeRadioGroup = ({handleTime}) => {
  const [selected, setSelected] = useState(null)

    useEffect(() => {
        if(selected) {
            if(selected.id === 1) handleTime({
                startTime: "00:00",
                endTime: "11:59"
            })
            if(selected.id === 2) handleTime({
                startTime: "12:00",
                endTime: "23:59"
            })
        }
    }, [selected])

  return (
    <div className="w-full">
      <div className="w-full">
        <RadioGroup by="name" value={selected} onChange={setSelected} className="gap-y-2">
          {plans.map((plan) => (
            <Radio
              key={plan.name}
              value={plan}
              className="group relative flex cursor-pointer rounded-lg bg-white py-2 my-4 px-5 text-brand shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-brand data-[checked]:bg-brand/10"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold text-brand">{plan.name}</p>
                </div>
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
};