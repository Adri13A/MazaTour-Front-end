import type { LatLng } from "leaflet";

export type LatLngNested = LatLng | LatLng[] | LatLng[][] | LatLng[][][];

export const flattenLatLngs = (latlngs: LatLngNested): LatLng[] => {
  const result: LatLng[] = [];

  const flatten = (arr: LatLngNested): void => {
    if (Array.isArray(arr)) {
      for (const item of arr) {
        flatten(item as LatLngNested);
      }
    } else {
      result.push(arr);
    }
  };

  if (!Array.isArray(latlngs)) {
    return [latlngs];
  }

  flatten(latlngs);
  return result;
};
