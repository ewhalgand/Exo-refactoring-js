function calculate(arr) {
  let n = 0;

  if (!Array.isArray(arr)) {
    console.log("Erreur: Vous devez passer un tableau de nombres");
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      n += arr[i];
    }
  }
  return n;
}

console.log(calculate([1, 2, 3, 4])); // Devrait retourner 10
console.log(calculate([1, 2])); // Devrait retourner 3
console.log(calculate([0])); // Devrait retourner 0
console.log(calculate([1, 0])); // Devrait retourner 1

console.log(calculate([1, "Haha"])); // Devrait retourner 1
console.log(calculate()); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
console.log(calculate("Huhu")); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
