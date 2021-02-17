function dataTransform (obj) {
  const returnArr = Object.keys(obj).map((id) => {
    return {
      id,
      opentm: obj[id].opentm,
      vol: obj[id].vol,
      price: obj[id].descr.price,
      pair: obj[id].descr.pair,
      type: obj[id].descr.type
    }
  })
  return returnArr
}

module.exports = {
  dataTransform
}
