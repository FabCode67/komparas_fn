
const UpperProduct = () => {
  const productRating = 4.5;
  const renderRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= productRating) {
        // Render a filled star for each full rating
        stars.push(<span className='text-2xl text-blue-700' key={i}>&#9733;</span>);
      } else if (i - 0.5 <= productRating) {
        // Render a half-filled star for half rating
        stars.push(<span className='text-2xl text-blue-700' key={i}>&#9734;&#9733;</span>);
      } else {
        // Render an empty star for no rating
        stars.push(<span className='text-2xl text-blue-700' key={i}>&#9734;</span>);
      }
    }
    return stars;
  };

  return (
    <div className='laptop:w-[70%] desktop:w-[70%] tablet:w-[70%] w-full  flex-col space-y-8  h-fit'>
      <div className='w-full bg-white rounded-md flex flex-col h-fit'>
        <div className='image flex w-full h-[25rem] p-2 rounded-sm'>
          <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-starlight-sport-band-starlight-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693282285539' alt='product' className='w-full h-full rounded-sm object-cover' />
        </div>
        <div className='description flex h-[60%] flex-col w-full'>
          <div className='w-full flex flex-col  h-fit p-5 space-y-4'>
            <h1 className='text-4xl font-bold'>Apple Smart Watch Sport Edition</h1>
            <div className='productRating flex space-x-2 justify-start my-auto items-center'>
              {renderRatingStars()}
              <span className='text-lg text-gray-400'>(4.5)</span>
            </div>
            <div className='line w-full h-[1px] bg-blue-700' />
          </div>
          <div className='w-full h-fit'>
            <div className='w-full flex flex-col h-fit p-5 space-y-4'>
              <h1 className='text-2xl font-bold'>Exquisitely Crafted, Captivatingly Brilliant</h1>
              <p className='text-lg font-medium'>
                Inspired by the works of glassblowers and artisan metalsmiths, the Samsung Galaxy S6 represents a seamless fusion of glass and metal. Make a breathtaking design statement with its beautiful curves and radiant glass surfaces that reflect a wide spectrum of dazzling colours.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col h-fit'>
        <table className="rounded shadow w-full">
          <thead>
            <tr className="gap-1 px-2 py-6 text-black-1000 font-[400] bg-blue-200">
              <th className="p-2 py-3 font-[400] text-left">Shop Logo</th>
              <th className="p-2 py-3 font-[400] text-left">Date</th>
              <th className="p-2 py-3 font-[400] text-left">Price</th>
              <th className="p-2 py-3 font-[400] text-left">Address</th>
              <th className="p-2 py-3 font-[400] text-left">Links</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr
              className="border-b shadow border-grey-800 hover:bg-green-100 hover:cursor-pointer"
            >
              <td className="md:py-4 xs:py-2 whitespace-nowrap capitalize text-sm font-normal px-2 text-gray-800">
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-starlight-sport-band-starlight-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693282285539" alt="product" className="w-24 h-12 rounded-sm object-cover" />
              </td>
              <td className="md:py-4 xs:py-2 whitespace-nowrap capitalize text-sm font-normal px-2 text-gray-800">
                <p className="text-sm font-normal text-gray-800">
                  Date: 12/12/2021
                </p>
              </td>
              <td className="md:py-4 xs:py-2 whitespace-nowrap capitalize text-sm font-normal px-2 text-gray-800">
                <p className="text-sm font-normal text-gray-800">
                  Price: 250$
                </p>
              </td>
              <td className="md:py-4 xs:py-2 whitespace-nowrap capitalize text-sm font-normal px-2 text-gray-800">
                <p className="text-sm font-normal text-gray-800">
                  Location: Simba super market
                </p>
                <p className="text-sm font-normal text-gray-800">
                  phone: 0788888888
                </p>
                <p className="text-sm font-normal text-gray-800">
                  email:
                </p>
              </td>
              <td className="md:py-4 xs:py-2 whitespace-nowrap capitalize text-sm font-normal px-2 text-gray-800">
                <a href="#" className="text-sm font-normal text-gray-800">
                  View
                </a>
              </td>
            </tr>
            <tr
              className="border-b shadow border-grey-800 hover:bg-green-100 hover:cursor-pointer"
            >
              <td className="md:py-4 xs:py-2 whitespace-nowrap capitalize text-sm font-normal px-2 text-gray-800">
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-starlight-sport-band-starlight-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693282285539" alt="product" className="w-24 h-12 rounded-sm object-cover" />
              </td>
              <td className="md:py-4 xs:py-2 whitespace-nowrap capitalize text-sm font-normal px-2 text-gray-800">
                <p className="text-sm font-normal text-gray-800">
                  Date: 12/12/2021
                </p>
              </td>
              <td className="md:py-4 xs:py-2 whitespace-nowrap capitalize text-sm font-normal px-2 text-gray-800">
                <p className="text-sm font-normal text-gray-800">
                  Price: 250$
                </p>
              </td>
              <td className="md:py-4 xs:py-2 whitespace-nowrap capitalize text-sm font-normal px-2 text-gray-800">
                <p className="text-sm font-normal text-gray-800">
                  Location: Simba super market
                </p>
                <p className="text-sm font-normal text-gray-800">
                  phone: 0788888888
                </p>
                <p className="text-sm font-normal text-gray-800">
                  email:
                </p>
              </td>
              <td className="md:py-4 xs:py-2 whitespace-nowrap capitalize text-sm font-normal px-2 text-gray-800">
                <a href="#" className="text-sm font-normal text-gray-800">
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UpperProduct