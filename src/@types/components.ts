import { ReactElement } from 'react';

export interface ColumnsTable {
  title: string
}

export interface StatusFilter {
  label: string
  check: boolean
}

export type GuardProps = {
  children: ReactElement | null
}
