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
    selectedDate: Date;
}
const AddTrade = ({ visible, onCancel, selectedDate }: Props) => {
    const handleAddTrade = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const time = formData.get('time');
        const pair = formData.get('pair');
        const price = formData.get('price');
        const sl = formData.get('sl');
        const profit = formData.get('profit');
        const slpips = formData.get('slpips');
        const rr = formData.get('rr');
        const slmoney = formData.get('slmoney');
        const result = formData.get('result');
        const rrachieved = formData.get('rrachieved')
        const reason = formData.get('reason')
        const picture = formData.get('picture')
        console.log(time, pair, price, sl, profit, slpips, rr, slmoney, result, rrachieved, reason, picture, selectedDate);


    }
    return (
        <Dialog
            open={visible}
            onOpenChange={(open) => {
                if (!open) onCancel()
            }}>
            {/* <DialogTrigger asChild>
                <Button variant="outline">Scrollable Content</Button>
            </DialogTrigger> */}
            <DialogContent className='pb-2'>
                <form onSubmit={handleAddTrade}>
                    <DialogHeader>
                        <DialogTitle>Add Trade</DialogTitle>
                        <DialogDescription>
                            Please fill all the details.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="scrollbar max-h-[50vh] overflow-y-auto  w-full">
                        <FieldGroup className="gap-3">
                            <Field>
                                <FieldLabel htmlFor="time">Time</FieldLabel>
                                <InputGroup className="h-auto w-full">
                                    <InputGroupInput id="time" name='time' type='time' placeholder="Enter Time" />
                                </InputGroup>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="pair">Pair</FieldLabel>
                                <InputGroup className="h-auto">
                                    <InputGroupInput id="pair" name='pair' placeholder="Enter Pair" onChange={(e) => e.target.value = e.target.value.toUpperCase()} />
                                </InputGroup>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="price">Price</FieldLabel>
                                <InputGroup className="h-auto">
                                    <InputGroupInput id="price" name='price' type='number' placeholder="Enter Price" />
                                </InputGroup>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="sl">SL</FieldLabel>
                                <InputGroup className="h-auto">
                                    <InputGroupInput id="sl" name='sl' type='number' placeholder="Enter SL" />
                                </InputGroup>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="profit">Profit</FieldLabel>
                                <InputGroup className="h-auto">
                                    <InputGroupInput id="profit" type='number' name='profit' placeholder="Enter Profit" />
                                </InputGroup>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="slpips">SL Pips</FieldLabel>
                                <InputGroup className="h-auto">
                                    <InputGroupInput id="slpips" name='slpips' type='number' placeholder="Enter SL Pips" />
                                </InputGroup>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="rr">RR</FieldLabel>
                                <InputGroup className="h-auto">
                                    <InputGroupInput id="rr" name='rr' type='text' placeholder="Enter RR" />
                                </InputGroup>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="slmoney">SL Money</FieldLabel>
                                <InputGroup className="h-auto">
                                    <InputGroupInput id="slmoney" name='slmoney' type='number' placeholder="Enter SL Money" />
                                </InputGroup>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="result">Result</FieldLabel>
                                <InputGroup className="h-auto">
                                    <InputGroupInput id="result" name='result' type='number' placeholder="Enter Resuld" />
                                </InputGroup>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="rrachieved">RR Achieved</FieldLabel>
                                <InputGroup className="h-auto">
                                    <InputGroupInput id="rrachieved" name='rrachieved' type='number' placeholder="Enter RR Achieved" />
                                </InputGroup>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="reason">Reason for trade</FieldLabel>
                                <InputGroup>
                                    <InputGroupTextarea
                                        id="reason"
                                        name='reason'
                                        placeholder="Write a reason..."
                                        className='resize-none max-h-32 overflow-y-auto'
                                    />
                                </InputGroup>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="picture">Chart&apos;s Screeshot</FieldLabel>
                                <Input id="picture" type="file" name='picture'
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
                    <DialogFooter className='pt-4 pb-2'>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>
    )
}

export default AddTrade