// Configure URL here for all AJAX fetch requests //
const baseURL = "http://localhost:3001"

class AjaxCall {

  constructor(url) {
    this.url = url
  }

  async postData(body, errorCallback = _=>{}, method = "POST") {
    const config = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    }
    this.submittedObject = body

    return fetch(`${baseURL}${this.url}`, config).then(resp => {
      if (resp.status !== 200) {
        errorCallback()
      }
      return resp.json()
    }).then(response => {
      this.returnedObject = response
      return this.returnedObject
    })
  }

  async getData() {
    return fetch(`${baseURL}${this.url}`).then(resp => resp.json()).then(json => this.returnedObject = json)
  }

}

export default AjaxCall