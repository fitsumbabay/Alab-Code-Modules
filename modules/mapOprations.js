
export function manageMap() {
  const myMap = new Map();
  myMap.set("occupation", myMap.get("job"));
  return myMap.delete("occupation");
}