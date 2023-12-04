import { atom } from "jotai";
//https://cedial.com.br/solutions-view/teste/

//https://marathonhandbook.com/average-running-speed/

//https://www.verywellfit.com/measure-walking-speed-3435745
function updateData (value) {
  const {mode} =   value;
  if(mode === 'running'){
    value.duration = Math.round(value.duration/2)
  }
  if(mode === 'bike'){
    value.duration = Math.round(value.duration/3)
  }
  return value
}

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
    set(statistics, updateData({...structuredClone(get(statistics)),...update}))
  },
)