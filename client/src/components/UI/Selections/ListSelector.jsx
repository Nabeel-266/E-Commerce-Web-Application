import { Fragment } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

const ListSelector = ({ value, setValue, width, options }) => {
  const handleChange = (selectOption) => {
    setValue(selectOption);
  };

  return (
    <div style={{ width: `${width}` }}>
      <Listbox value={value} onChange={handleChange}>
        <div className="relative">
          <ListboxButton className="relative w-full cursor-default rounded-lg bg-light py-[0.2rem] px-[1rem] text-left focus:outline-none border-secondary-02 border-[0.1rem]">
            <span className="truncate text-[1.5rem] leading-[2.5rem] font-medium text-darker">
              {value}
            </span>

            <ChevronDown
              size={22}
              color="#303030"
              className="mt-[0.35rem] pointer-events-none absolute inset-y-0 right-0 pr-[0.5rem]"
              aria-hidden="true"
            />
          </ListboxButton>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions
              modal={false}
              className="w-full max-h-[16rem] absolute z-[10] bg-light rounded-lg mt-[0.2rem] py-[0.2rem] shadow-lg shadow-black/10 ring-1 ring-black/5 overflow-auto scrollbar-dropdown-dark *:cursor-pointer"
            >
              {options.map((option, index) => (
                <ListboxOption
                  key={index}
                  value={option}
                  className="select-none relative py-[0.6rem] pl-[3.2rem] pr-[0.8rem] text-[1.4rem] leading-[1.6rem] text-darker hover:text-light hover:bg-dark transition-all"
                >
                  <>
                    <span
                      className={`truncate ${
                        value === option ? "font-semibold" : "font-medium"
                      }`}
                    >
                      {option}
                    </span>

                    <span
                      className={`absolute inset-y-0 left-0 flex items-center ml-[0.8rem] ${
                        value === option ? "block" : "hidden"
                      }`}
                    >
                      <Check size={20} />
                    </span>
                  </>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ListSelector;
