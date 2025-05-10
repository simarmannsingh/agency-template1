'use client'

import React from 'react';

import { format } from "date-fns"

import Header from '@/components/components/header/header'
import Footer from '@/components/components/footer/footer'
import { Button } from '@/components/ui/button'
import { Label } from "@/components/ui/label"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import DayTimePicker from "@/components/components/datetimepicker/datetimepicker"

export default function Home() {
  const [reservationTime, setReservationTime] = React.useState(null)
  const [reservationDate, setReservationDate] = React.useState(null)

  return (
    <div className='w-full flex flex-col'>

    <Header/>

    <div className='w-full h-full flex flex-col items-center justify-center gap-6 p-6 md:p-10'>

      <Card className='w-3/4 h-full m-2 bg-gray-800/70' >
        <CardHeader>
            <CardTitle className='text-3xl text-center'>Set Appointment</CardTitle>
        </CardHeader>

        <CardContent>
          <div className='block w-full h-full my-4 items-center justify-center'>
            <div className='flex my-4 items-center justify-evenly w-full h-full'>
              {reservationDate !== null ? (<p> Selected Date: {reservationDate.toLocaleDateString()}</p>) : ''}
              {reservationTime !== null ?  (<p> Selected Time: {reservationTime}</p>): ''}
            </div>
        
            <div className='flex items-left justify-start w-full h-full'>
              <div className='w-1/2 h-1/2 text-center'>
                <Popover>
                  <div className="block">
                    <Label className='font-semibold text-lg' htmlFor="setTimeButton">Select the Date and Time</Label>
                    <div className="flex mt-4 items-center justify-center">
                      <PopoverTrigger id='setTimeButton' className='border border-gray-400 p-2 hover:bg-gray-600'> Select Time</PopoverTrigger>
                      <PopoverContent className="w-full">
                        <DayTimePicker setReservationTime={setReservationTime} setReservationDate={setReservationDate} />
                      </PopoverContent>
                    </div>
                  </div>
                </Popover>

              </div>
            
              <div className='w-1/2 h-1/2 text-center'>
                <RadioGroup defaultValue="inside">
                  <p className='text-center font-semibold text-lg'> Select Venue</p>
                  <div className="flex w-1/4 m-auto p-2 items-center">
                    <RadioGroupItem value="inside" id="inside" />
                    <Label className='px-2' htmlFor="inside">Office</Label>
                  </div>
                  <div className="flex w-1/4 m-auto p-2 items-center">
                    <RadioGroupItem value="terrace" id="terrace" />
                    <Label className='px-2' htmlFor="terrace">Cafe</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </CardContent>


        <CardContent>
          <div className='flex w-full items-center justify-center'>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal flex",
                    !reservationDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {reservationDate ? format(reservationDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={reservationDate}
                  onSelect={setReservationDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

        </CardContent>



        <CardContent>
          <div className='flex w-full items-center justify-center'>
            <Button variant='primary' className='flex align-center'>Set Appointment</Button>
          </div>
        </CardContent>

      </Card>
    </div>

    <Footer/>

    </div>
  )
}
