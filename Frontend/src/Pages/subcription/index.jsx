const Subscription = () => {

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-2xl font-bold text-black content-center mb-8">
        <h1 className="mb-4">Get started with subscription</h1>
      </div>

      <div className="flex justify-around w-3/4">
        <div className="w-1/4 h-48 border border-blue-500 p-4 rounded-lg text-black hover:bg-blue-500 cursor-pointer">
          <h2 className="text-lg font-semibold mb-2">Basic</h2>
          <p>Free 5 image tests per month</p>
          <p>100 API calls per month</p>
        </div>
        <div className="w-1/4 h-48 border border-blue-500 p-4 rounded-lg text-black hover:bg-blue-500 cursor-pointer">
          <h2 className="text-lg font-semibold mb-2">Premium</h2>
          <p>10,000 API calls per month</p>
        </div>
        <div className="w-1/4 h-48 border border-blue-500 p-4 rounded-lg text-black hover:bg-blue-500 cursor-pointer">
          <h2 className="text-lg font-semibold mb-2">Advance</h2>
          <p>Customized options available</p>
        </div>
      </div>
    </div>
  )

}
export default Subscription;