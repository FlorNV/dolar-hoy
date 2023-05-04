import { CgDollar } from 'react-icons/cg'

export const Form = ({ handleSubmit, handleChange, amount }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount" className="block mb-2 text-teal-800">
        Cantidad en dólares
      </label>
      <div className="relative text-teal-800/40">
        <CgDollar className="absolute left-4 text-2xl h-full" />

        <input
          type="number"
          name="amount"
          id="amount"
          value={Number(amount).toLocaleString('es-AR')}
          onChange={handleChange}
          className="relative bg-teal-800/10 px-4 py-2 w-full rounded-xl text-end font-semibold text-xl focus:outline-teal-400 focus:text-teal-800"
        />
      </div>
    </form>
  )
}
