import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import type { MenuItem } from '@/types/menuItem';

type SelectProps = {
    items: MenuItem[];
    onValueChange: Select.SelectProps['onValueChange'];
};

const RegionsSelect = ({ items, onValueChange }: SelectProps) => (
    <Select.Root onValueChange={onValueChange}>
        <Select.Trigger
            className="gap-[5px] inline-flex items-center justify-between rounded shadow-black/10 shadow-[0_2px_10px] w-full h-[35px] p-6 leading-none bg-white hover:bg-slate-200 focus:shadow-[0_0_0_2px]  data-[placeholder]:text-slate-400 outline-none"
            aria-label="Region"
        >
            <Select.Value placeholder="Filter by Region" />
            <Select.Icon>
                <ChevronDownIcon />
            </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
            <Select.Content
                className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
                ref={(ref) => ref?.addEventListener('touchend', (e) => e.preventDefault())}
            >
                <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white cursor-default">
                    <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport className="p-1">
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="p-6">
                            {item.label}
                        </SelectItem>
                    ))}
                </Select.Viewport>
                <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white cursor-default">
                    <ChevronDownIcon />
                </Select.ScrollDownButton>
            </Select.Content>
        </Select.Portal>
    </Select.Root>
);

interface SelectItemProps {
    children?: Select.SelectItemProps['children'];
    className?: Select.SelectItemProps['className'];
    value: Select.SelectItemProps['value'];
}
type Ref = HTMLDivElement;

const SelectItem = React.forwardRef<Ref, SelectItemProps>(({ children, className = '', ...props }, forwardedRef) => {
    return (
        <Select.Item
            className={classnames(
                'leading-none rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-slate-200 data-[highlighted]:text-slate-400',
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <CheckIcon />
            </Select.ItemIndicator>
        </Select.Item>
    );
});
SelectItem.displayName = 'SelectItem';

export default RegionsSelect;
