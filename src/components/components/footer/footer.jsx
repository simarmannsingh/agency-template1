'use client'

import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

function Footer() {
  return (
    <div className="text-lg flex flex-col items-center justify-center w-full mt-8 p-4">
      <div className="bg-gray-300 dark:bg-gray-900 text-slate-500 dark:text-slate-300 w-full justify-center text-center  pt-4">
        <div className="container mx-auto px-4 pt-6 md:p-6">
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="w-full md:w-1/3 xl:w-1/3 p-6 text-center md:text-left">
              <h5 className="uppercase font-bold mb-0">Links</h5>
              <ul>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-slate-400 hover:text-slate-400">FAQs</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-slate-400 hover:text-slate-400">Privacy policy</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-slate-400 hover:text-slate-400">Imprint</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/3 p-6 text-center md:text-left">
              <h5 className="uppercase font-bold">Contact</h5>
              <ul>
                <li className="mt-2">
                  <Mail size={20} className="inline mr-4" />
                  <a href="mailto:user@example.com?&subject=SetAppointment&body=I want to ask..." className="hover:underline text-slate-400 hover:text-slate-400">user@example.com</a>
                </li>
                <li className="mt-2">
                  <Phone size={20} className="inline mr-4" />
                  <a href="tel:+91XXXXXXXXXXX" className="hover:underline text-slate-400 hover:text-slate-400">+91 XXXX XXXXXX</a>
                </li>
                <li className="mt-2">
                  <MapPin size={20} className="inline mr-4" />
                  <a href="#" target='_blank' className="hover:underline text-slate-400 hover:text-slate-400">Street ABCD, New Delhi, India</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/3 p-6 text-center md:text-left">
              <h5 className="uppercase font-bold">Opening Hours</h5>
              <ul>
                <li className="mt-2 text-slate-400">
                Tuesday - Sunday
                </li>
                <li className="mt-2 text-slate-400">
                From 17:00 - till 23:00 hrs
                </li>
                <li className="mt-2 text-slate-400">
                Closed on Monday
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-600 p-4 hover:text-slate-500 hover:cursor-pointer">
          Copyright &copy; {new Date().getFullYear()} | <a href="#" className='cursor-pointer' target="_blank" rel="noopener noreferrer">Agency Name</a>
        </div>
      </div>

    </div>
  )
}

export default Footer