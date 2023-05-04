const ENDPOINT_DOLLAR_URL =
  'https://www.dolarsi.com/api/api.php?type=valoresprincipales'

export const getDollar = async () => {
  try {
    const response = await fetch(ENDPOINT_DOLLAR_URL)
    const json = response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}
