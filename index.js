var recipes = {
  spanish: "tacos",
  korean: "bulgogi"
}

function updateObjectWithKeyAndValue (object, key, value) {
  var newobject = Object.assign(object, {[key]: value})
  return object
  return newobject
}