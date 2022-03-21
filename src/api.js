export const get = ( {args2, args1} ) => {
  return fetch(`https://api.nasa.gov/planetary/${args1}?api_key=${process.env.REACT_APP_NASA_KEY}&count=${args2}`)
      .then(response => response.json())
      .then(data => {
        return data;
      })

}

export const getWrapper = () => {

}

