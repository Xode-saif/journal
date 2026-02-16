'use client'
import React, { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { enUS } from "date-fns/locale"
import { Card } from "@/components/ui/card"
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import AddTrade from './AddTrade'
import { format } from 'date-fns'
const Cal = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [addTradePopup, setAddTradePopup] = useState<boolean>(false);
    const handlePopupToogle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setAddTradePopup(true)
    }
    return (
        <div className='flex flex-col sm:flex-row justify-center items-center gap-5 md:gap-50 w-full'>
            <Calendar
                locale={enUS}
                formatters={{
                    formatMonthDropdown: (date) =>
                        format(date, "MMM", { locale: enUS }),
                }}
                className="rounded-lg border md:h-lg md:w-lg"
                mode="single"
                selected={date}
                onSelect={setDate}
                captionLayout="dropdown"
            />
            <div className='w-[80%] md:h-lg md:w-md'>
                <Card className="mx-auto w-full max-w-sm p-2">
                    <Button variant="outline" className="w-full" onClick={handlePopupToogle}>
                        <Plus />Add
                    </Button>
                    {
                        addTradePopup && <AddTrade visible={addTradePopup} onCancel={() => setAddTradePopup(false)} selectedDate={date} />
                    }
                </Card>
            </div>
        </div>
    )
}

export default Cal