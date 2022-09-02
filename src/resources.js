import { ref, readonly } from 'vue'

export function useAddPoint() {
  const point = ref(0)
  const addPoint = () => {
    point.value += 1
  }
  return {
    point: readonly(point),
    addPoint
  }
}

export function useMinusPoint() {
  const point2 = ref(100)
  const minusPoint = () => {
    point2.value -= 1
  }
  return {
    point2: readonly(point2),
    minusPoint
  }
}