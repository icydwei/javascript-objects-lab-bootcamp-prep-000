var recipes = {}

function updateObjectWithKeyAndValue (object, key, value) {
  return object
  var newobject = {Object.assign( {}, object, { [key]: value })}
  return newobject
}