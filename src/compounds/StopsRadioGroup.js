import { Radio, RadioGroup } from '@headlessui/react'
import { useState } from 'react'

const plans = [
  { name: 'Nonstop'},
  { name: '1 Stop'},
  { name: '2+ Stops'},
]

export const StopsRadioGroup = () => {
  const [selected, setSelected] = useState(null)

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