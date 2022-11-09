async function getData(url) {
    try {
      const posts = await fetch(url)
      const postData = await posts.json()
      return postData
    } catch (err) {
      console.log(err)
    }
}

export default getData