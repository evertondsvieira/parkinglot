import React, { ReactNode } from "react"
import { ILocation } from "../@types"

interface ILocationContextTypes {
  location: ILocation
  setLocation: React.Dispatch<React.SetStateAction<ILocation>>
  camera: Boolean
  setCamera: React.Dispatch<React.SetStateAction<Boolean>>
  totalValue: number
  setTotalValue: React.Dispatch<React.SetStateAction<number>>
}

const LocationContext = React.createContext({} as ILocationContextTypes)

export const useLocationContext = () => {
  if (!LocationContext) {
    throw new Error('useLocationContext deve ser usado dentro do escopo')
  }

  return React.useContext(LocationContext)
}

export const LocationContextProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = React.useState<ILocation>({
    latitude: 0,
    longitude: 0,
  })

  const [totalValue, setTotalValue] = React.useState<number>(0)

  const [camera, setCamera] =  React.useState<Boolean>(false)

  const value = {
    location,
    setLocation,
    camera,
    setCamera,
    totalValue,
    setTotalValue,
  }

  return(
    <LocationContext.Provider value={value}>
      { children }
    </LocationContext.Provider>
  )
}