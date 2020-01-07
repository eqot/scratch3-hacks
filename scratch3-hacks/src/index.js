import queryString from 'query-string'

const loadProjectByUrl = props => {
  console.log(props)

  const queryParams = queryString.parse(location.search)
  const { url } = queryParams
  console.log(url)
  if (!url) {
    return
  }

  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.responseType = 'arraybuffer'
  xhr.onload = () => {
    const filename = url.split('/').slice(-1)[0]
    console.log(filename)
    console.log(xhr.response)

    props.vm.loadProject(xhr.response).then(() => {
      props.onUpdateProjectTitle(filename)
    })
  }
  xhr.send()
}

export { loadProjectByUrl }
