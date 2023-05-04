export const DollarType = ({ item, amount }) => {
  const { nombre, compra, venta } = item

  return (
    <div className="flex gap-6 justify-between items-center">
      <p className="text-white text-base">{nombre}</p>
      <div className="flex gap-12">
        <div className="text-center">
          <p className="text-white text-sm">Compra</p>
          <p className="text-teal-400 text-2xl">
            {(Number(amount) * Number(compra.replace(',', '.'))).toLocaleString(
              'es-AR',
              {
                style: 'currency',
                currency: 'ARS',
              }
            )}
          </p>
        </div>
        <div className="text-center">
          <p className="text-white text-sm">Venta</p>
          <p className="text-teal-400 text-2xl">
            {(Number(amount) * Number(venta.replace(',', '.'))).toLocaleString(
              'es-AR',
              {
                style: 'currency',
                currency: 'ARS',
              }
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export const DollarTypeSkeleton = () => {
  return (
    <div className="animate-pulse flex justify-between items-center">
      <div className="bg-teal-400 w-56 h-10 rounded-lg"></div>
      <div className="flex gap-12">
        <div className="flex flex-col gap-2 items-center">
          <div className="bg-teal-400 w-16 h-4 rounded-lg"></div>
          <div className="bg-teal-400 w-32 h-8 rounded-lg"></div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="bg-teal-400 w-16 h-4 rounded-lg"></div>
          <div className="bg-teal-400 w-32 h-8 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}
