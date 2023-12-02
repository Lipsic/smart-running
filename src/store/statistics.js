import { atom } from "jotai";

export const statistics = atom({
    distance: 0,
    start: {},
    end: {},
    duration: 0,
    rithm: 0,
    cal: 0,
    mode: 'walking'
})

export const readOnlyStatistics = atom((get) => get(statistics))

export const writeOnlyStatistics = atom(
  null,
  (get, set, update) => {
    set(statistics, {...structuredClone(get(statistics)),...update})
  },
)