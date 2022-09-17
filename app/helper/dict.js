const reducerWithDictionary = (arrayOne, arrayTwo) => {
    const reducedArray = []
    const dictionary = {}
  
    arrayOne.forEach(object => {
      if(dictionary[object.id]) return
      dictionary[object.id] = true
      reducedArray.push(object)
    })
  
    arrayTwo.forEach(object => {
      if(dictionary[object.id]) return
      dictionary[object.id] = true
      reducedArray.push(object)
    })
  
    return reducedArray
  }

  export default reducerWithDictionary