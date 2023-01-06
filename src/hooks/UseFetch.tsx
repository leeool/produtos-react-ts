import React from "react"

function UseFetch<T>(url: string) {
  const [data, setData] = React.useState<T | null>(null)
  const [error, setError] = React.useState<string | null>(null)

  const fetchData = async () => {
    let erro = null
    let json = null

    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error("Erro: " + response.status)
      json = await response.json()
    } catch (e) {
      json = null
      if (e instanceof Error) {
        erro = e.message
      }
    } finally {
      setData(json)
      setError(erro)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return { data, error }
}

export default UseFetch
