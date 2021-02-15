const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
}

// Type alias:
type Drink = [string, boolean, number]

/* const pepsi: [string, boolean, number] = ['brown', true, 40]
pepsi[0] = 40
pepsi[1] = 'brown' */
const pepsi: Drink = ['brown', true, 40]


const carSpecs: [number, number] = [400, 3354]