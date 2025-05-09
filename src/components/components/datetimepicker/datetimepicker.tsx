"use client"

import { SetStateAction, useState } from "react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function DayTimePicker( { setReservationTime, setReservationDate } ) {
  const today = new Date()
  const [date, setDate] = useState<Date>(today)
  const [time, setTime] = useState<string | null>(null)

  const timeSlots = [
    // { time: "15:00", available: false },
    // { time: "15:30", available: false },
    // { time: "16:00", available: false },
    // { time: "16:30", available: false },
    { time: "17:00", available: true },
    { time: "17:30", available: true },
    { time: "18:00", available: true },
    { time: "18:30", available: true },
    { time: "19:00", available: true },
    { time: "19:30", available: true },
    { time: "20:00", available: true },
    { time: "20:30", available: true },
    { time: "21:00", available: true },
    { time: "21:30", available: true },
    { time: "22:00", available: true },
    { time: "22:30", available: true },
    // { time: "23:00", available: false },
    // { time: "23:30", available: false },
  ]


  const handleTimeSelect = (time: string) => {
    setReservationTime(time)
    setTime(time)
  }
  
  const handleDateSelect = (date: any) => {
    setReservationDate(date)
  }

  return (
    <div>
      <div className="rounded-md border">
        <div className="flex max-sm:flex-col">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate: SetStateAction<Date>) => {
              if (newDate) {
                setDate(newDate)
                setTime(null)
                handleDateSelect(newDate)
              }
            } }
            className="p-2 sm:pe-5"
            disabled={[
              { before: today }, // Dates before today
            ]} 
            classNames={undefined}
            />
          <div className="relative w-full max-sm:h-48 sm:w-40">
            <div className="absolute inset-0 py-4 max-sm:border-t">
              <ScrollArea className="h-full sm:border-s">
                <div className="space-y-3">
                  <div className="flex h-5 shrink-0 items-center px-5">
                    <p className="text-sm font-medium">
                      {format(date, "EEEE, d")}
                    </p>
                  </div>
                  <div className="grid gap-1.5 px-5 max-sm:grid-cols-2">
                    {timeSlots.map(({ time: timeSlot, available }) => (
                      <Button
                        key={timeSlot}
                        variant={time === timeSlot ? "primary" : "outline"}
                        size="sm"
                        className="w-full flex"
                        onClick={() => handleTimeSelect(timeSlot)}
                        disabled={!available}
                      >
                        {timeSlot}
                      </Button>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
