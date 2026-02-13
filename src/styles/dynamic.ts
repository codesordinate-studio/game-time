import { StyleSheet } from "react-native";

const cache = new Map<string, any>();

function getStyle(key: string, style: object) {
  if (!cache.has(key)) {
    cache.set(key, StyleSheet.create({ style }).style);
  }
  return cache.get(key);
}

export const dynamicStyles = {
  // Spacing
  p: (val: number) => getStyle(`p-${val}`, { padding: val }),
  px: (val: number) => getStyle(`px-${val}`, { paddingHorizontal: val }),
  py: (val: number) => getStyle(`py-${val}`, { paddingVertical: val }),
  pt: (val: number) => getStyle(`pt-${val}`, { paddingTop: val }),
  pb: (val: number) => getStyle(`pb-${val}`, { paddingBottom: val }),
  pl: (val: number) => getStyle(`pl-${val}`, { paddingLeft: val }),
  pr: (val: number) => getStyle(`pr-${val}`, { paddingRight: val }),

  m: (val: number) => getStyle(`m-${val}`, { margin: val }),
  mx: (val: number) => getStyle(`mx-${val}`, { marginHorizontal: val }),
  my: (val: number) => getStyle(`my-${val}`, { marginVertical: val }),
  mt: (val: number) => getStyle(`mt-${val}`, { marginTop: val }),
  mb: (val: number) => getStyle(`mb-${val}`, { marginBottom: val }),
  ml: (val: number) => getStyle(`ml-${val}`, { marginLeft: val }),
  mr: (val: number) => getStyle(`mr-${val}`, { marginRight: val }),

  // Sizing
  w: (val: number | string) => getStyle(`w-${val}`, { width: val }),
  h: (val: number | string) => getStyle(`h-${val}`, { height: val }),
  size: (val: number) => getStyle(`size-${val}`, { width: val, height: val }),
  aspect_ratio: (val: number) => getStyle(`aspect-${val}`, { aspectRatio: val }),

  // Colors
  bg: (val: string) => getStyle(`bg-${val}`, { backgroundColor: val }),
  color: (val: string) => getStyle(`text-${val}`, { color: val }),
  borderColor: (val: string) => getStyle(`border-${val}`, { borderColor: val }),

  // Radius
  rounded: (val: number) => getStyle(`rounded-${val}`, { borderRadius: val }),

  //font Family
  font: (val: "bold" | "semibold" | "medium" | "regular" | "light") => getStyle(`font-${val}`, { fontFamily: val }),
};
