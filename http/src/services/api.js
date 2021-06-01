const URL_API = "https://sujeitoprogramador.com"

export function FILMES_GET() {
  return {
    url: URL_API + "/r-api/?api=filmes",
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }
}