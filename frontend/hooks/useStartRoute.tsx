import { useLocationContext } from "../context/Location";
import { useCallback, useRef } from "react";

type ILocation = {
  latitude: number;
  longitude: number;
};

interface IUseStartRoute {
  startRoute: (latitude: ILocation['latitude'], longitude: ILocation['longitude']) => Promise<void>;
  markerRef: React.MutableRefObject<any>;
}

function useStartRoute(): IUseStartRoute {
  const { setLocation, setCamera } = useLocationContext();
  const markerRef = useRef<any>(null);

  const startRoute = useCallback(async (latitude: ILocation['latitude'], longitude: ILocation['longitude']) => {
    setLocation({ latitude, longitude });
    await markerRef.current?.hideCallout();
    setCamera((prev) => !prev);
  }, [setLocation, setCamera]);

  return { startRoute, markerRef };
}

export default useStartRoute;
