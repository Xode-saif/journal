'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { Input } from './ui/input'

interface Props {
    visible: boolean;
    onCancel: () => void;
}
const AddTrade = ({ visible, onCancel }: Props) => {
    return (
        <Dialog
            open={visible}
            onOpenChange={(open) => {
                if (!open) onCancel()
            }}>
            {/* <DialogTrigger asChild>
                <Button variant="outline">Scrollable Content</Button>
            </DialogTrigger> */}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Trade</DialogTitle>
                    <DialogDescription>
                        Please fill all the details.
                    </DialogDescription>
                </DialogHeader>
                <div className="scrollbar max-h-[50vh] overflow-y-auto  w-full">
                    <FieldGroup className="gap-3">
                        <Field>
                            <FieldLabel htmlFor="block-end-input">Time</FieldLabel>
                            <InputGroup className="h-auto w-full">
                                <InputGroupInput id="block-end-input" placeholder="Enter Time" />
                            </InputGroup>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="block-end-input">Pair</FieldLabel>
                            <InputGroup className="h-auto">
                                <InputGroupInput id="block-end-input" placeholder="Enter Pair" />
                            </InputGroup>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="block-end-input">Price</FieldLabel>
                            <InputGroup className="h-auto">
                                <InputGroupInput id="block-end-input" placeholder="Enter Price" />
                            </InputGroup>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="block-end-input">SL</FieldLabel>
                            <InputGroup className="h-auto">
                                <InputGroupInput id="block-end-input" placeholder="Enter SL" />
                            </InputGroup>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="block-end-input">Profit</FieldLabel>
                            <InputGroup className="h-auto">
                                <InputGroupInput id="block-end-input" placeholder="Enter Profit" />
                            </InputGroup>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="block-end-input">SL Pips</FieldLabel>
                            <InputGroup className="h-auto">
                                <InputGroupInput id="block-end-input" placeholder="Enter SL Pips" />
                            </InputGroup>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="block-end-input">RR</FieldLabel>
                            <InputGroup className="h-auto">
                                <InputGroupInput id="block-end-input" placeholder="Enter RR" />
                            </InputGroup>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="block-end-input">SL Money</FieldLabel>
                            <InputGroup className="h-auto">
                                <InputGroupInput id="block-end-input" placeholder="Enter SL Money" />
                            </InputGroup>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="block-end-input">Result</FieldLabel>
                            <InputGroup className="h-auto">
                                <InputGroupInput id="block-end-input" placeholder="Enter Resuld" />
                            </InputGroup>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="block-end-input">RR Achieved</FieldLabel>
                            <InputGroup className="h-auto">
                                <InputGroupInput id="block-end-input" placeholder="Enter RR Achieved" />
                            </InputGroup>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="block-end-textarea">Reason for trade</FieldLabel>
                            <InputGroup>
                                <InputGroupTextarea
                                    id="block-end-textarea"
                                    placeholder="Write a reason..."
                                />
                            </InputGroup>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="picture">Chart&apos;s Screeshot</FieldLabel>
                            <Input id="picture" type="file" 
                                className="
                                    file:bg-black
                                    file:text-white
                                   file:rounded-md
                                   file:p-1
                                "
                            />
                            {/* <FieldDescription>Select a picture to upload.</FieldDescription> */}
                        </Field>
                    </FieldGroup>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save</Button>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    )
}

export default AddTrade