const hostname = window && window.location && window.location.hostname

let API_HOST

if(hostname === "noahtemplet.dev")
  API_HOST = "https://api.noahtemplet.dev"
else
  API_HOST = "http://localhost:8000"

export { API_HOST }