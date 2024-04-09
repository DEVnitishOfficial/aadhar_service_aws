
const AadharForm = () => {
  return (
    <div className='w-auto p-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 m-4 '>
      <h5 className='text-xl font-medium text-gray-900 dark:text-white flex justify-center'>
        Fill Form To Get Aadhar
      </h5>

      <div className='flex space-x-32 mt-10 max-[400px]:flex-col  max-[400px]:space-x-0 px-10 max-[400px]:px-0 '>

        {/* Aadhar front info */}
        <div>
          
          <h6 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>
             Aadhar Front
            </h6>

            {/* your name in hindi  */}
            <div className='mb-6'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                नाम
              </label>
              <input
                type='text'
                id=''
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                placeholder='user name'
                required
                // value={userData.fullName}
                // onChange={e =>
                //   setUserData({ ...userData, fullName: e.target.value })
                // }
              />
            </div>

            {/* your name in english  */}
            <div className='mb-6'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
              Name
              </label>
              <input
                type='text'
                id=''
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                placeholder='user name'
                required
                // value={userData.fullName}
                // onChange={e =>
                //   setUserData({ ...userData, fullName: e.target.value })
                // }
              />
            </div>

            {/* DOB  */}
            <div className='mb-6'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
               जन्म तिथि / DOB :
              </label>
              <input
                type='text'
                id=''
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                placeholder='user name'
                required
                // value={userData.fullName}
                // onChange={e =>
                //   setUserData({ ...userData, fullName: e.target.value })
                // }
              />
            </div>

            {/* Gender */}
            <div className='mb-6'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
               Gender
              </label>
              <input
                type='text'
                id=''
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                placeholder='पुरुष / Male'
                required
                // value={userData.fullName}
                // onChange={e =>
                //   setUserData({ ...userData, fullName: e.target.value })
                // }
              />
            </div>

            

        </div>

       {/* Aadhar back info */}
        <div>
        <h6 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>
             Aadhar Back
            </h6>

            {/* your address  */}
            <div className='mb-6'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Address
              </label>
              <input
                type='text'
                id=''
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                placeholder='user name'
                required
                // value={userData.fullName}
                // onChange={e =>
                //   setUserData({ ...userData, fullName: e.target.value })
                // }
              />
            </div>

            {/* your aadhar no.  */}
            <div className='mb-6'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Aadhar No.
              </label>
              <input
                type='text'
                id=''
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                placeholder='user name'
                required
                // value={userData.fullName}
                // onChange={e =>
                //   setUserData({ ...userData, fullName: e.target.value })
                // }
              />
            </div>
        </div>

      </div>

    </div>
  )
}

export default AadharForm
