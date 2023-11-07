"use client";

import {ThemeProvider as NextThemeProvider} from "next-themes"


import React, { ReactNode } from 'react'



export const ThemeProvider = ({children}:{children:ReactNode}) => {
  return (
    <NextThemeProvider attribute="class" enableSystem>
    {children}
    </NextThemeProvider>
  )
}
