const carMakers = ['ford', 'toyota', 'chevy']

const dates: Date[] = [new Date(), new Date()]

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// Help with inference whn extracting values:
const car = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values:
carMakers.push(100)

// Help with map/forEach/reduce:
carMakers.map((car: string): string => {
  return car
})

// Flexible types:
const importantDates: (string | Date)[] = [new Date(), '2030-10-10']
importantDates.push(100)