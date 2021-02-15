interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Is this ${this.year} ${this.name} broken? ${this.broken}`
  }
}

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string { 
    return `This ${drink.carbonated} ${drink.color} drink has ${drink.sugar} grams of sugar`
  }
}

/* const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken: ${vehicle.broken}`)
} */
const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(oldCivic)
printSummary(drink)