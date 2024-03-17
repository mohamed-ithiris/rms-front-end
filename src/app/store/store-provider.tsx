'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { type StoreApi, useStore } from 'zustand'

import { type ConfigStore, createZustandStore, initialStoreValue } from '@/app/store/config-store'

export const CounterStoreContext = createContext<StoreApi<ConfigStore> | null>(
  null,
)

export interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({
  children,
}: StoreProviderProps) => {
  const storeRef = useRef<StoreApi<ConfigStore>>()
  if (!storeRef.current) {
    storeRef.current = createZustandStore(initialStoreValue())
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  )
}

export const useZustandStore = <T,>(
  selector: (store: ConfigStore) => T,
): T => {
  const counterStoreContext = useContext(CounterStoreContext)

  if (!counterStoreContext) {
    throw new Error(`useZustandStore must be use within StoreProvider`)
  }

  return useStore(counterStoreContext, selector)
}