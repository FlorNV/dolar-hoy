import { DollarType, DollarTypeSkeleton, Form } from './components/index'
import { useData } from './hooks/useData'
import { useForm } from './hooks/useForm'

function App() {
  const { data, loading } = useData()
  const { amount, handleChange, handleSubmit } = useForm()

  return (
    <main className="bg-teal-800/10 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-teal-800 mb-6">DOLAR HOY</h1>
      <div className="bg-white p-8 rounded-2xl shadow-xl md:w-[700px] lg:w-[850px]">
        <section className="mb-6">
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            amount={amount}
          />
        </section>
        <section className="flex flex-col gap-6 bg-teal-800 rounded-xl p-6">
          {loading
            ? [1, 2, 3, 4].map((item) => <DollarTypeSkeleton key={item} />)
            : data.map((item) => (
                <DollarType key={item.nombre} item={item} amount={amount} />
              ))}
        </section>
      </div>
    </main>
  )
}

export default App
