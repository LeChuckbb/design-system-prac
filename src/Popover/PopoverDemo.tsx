import * as Popover from "@radix-ui/react-popover";
import './style.css';

function PopoverDemo() {
    return (
        <Popover.Root>
            <Popover.Trigger>More info</Popover.Trigger>
            <Popover.Portal>
                <Popover.Content>
                    Some more info...
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}

export default PopoverDemo