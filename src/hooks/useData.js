import { useEffect, useState } from 'react'
import { getDollar } from '../api/dollar'

export const useData = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getDollar()
      .then((res) => {
        const dataFiltered = res
          .filter((price) =>
            [
              'Dolar Oficial',
              'Dolar Blue',
              'Dolar Contado con Liqui',
              'Dolar Bolsa',
            ].includes(price.casa.nombre)
          )
          .map((price) => ({
            nombre: price.casa.nombre,
            compra: price.casa.compra,
            venta: price.casa.venta,
          }))
        setData(dataFiltered)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading }
}
