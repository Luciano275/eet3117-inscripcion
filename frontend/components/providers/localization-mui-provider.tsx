'use client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { es } from 'date-fns/locale'

export default function LocalizationMUIProvider (
  {children}
  : {
    children: React.ReactNode
  }
) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
      {children}
    </LocalizationProvider>
  )
}