import lion from '../../assets/lion govt.png'
import india_head from '../../assets/front_india_head.png'
import india_back from '../../assets/back_india_head.png'
import aadhar_hindi from '../../assets/aadharHindi.png'
import aadhar_eng from '../../assets/aadhar_eng_rm.png'
import dnkn from '../../assets/dnkn real.jpg'
import QR from '../../assets/QRONE.png'
import old_phone from '../../assets/old_phone.png'
import { TfiEmail } from 'react-icons/tfi'
import { TfiWorld } from 'react-icons/tfi'
const AadharCard = () => {
  return (
    <div className='flex  justify-center items-center min-h-screen'>
      <div className=' flex space-x-10'>
        {/* Front side of the aadhar */}
        <div className='flex justify-center items-center'>
          <div className='bg-white  rounded-lg shadow-md w-[400px] h-[300px]'>
            {/* Header */}
            <div className='flex justify-between items-center p-4  '>
              <img className='h-10 ' src={lion} alt='lion' />
              <div className='flex'>
                <img className='h-9 ' src={india_head} alt='head' />
                <img
                  className='h-10 '
                  src={aadhar_hindi}
                  alt='aadhar_hindi_logo'
                />
              </div>
            </div>
            {/* Body */}
            <div className='space-y-5'>
              <div className='flex space-x-2 '>
                <p className='text-[10px] transform origin-center -rotate-90 translate-x-[-58px] translate-y-16 absolute font-bold'>
                  {' '}
                  Aadhar no. issued: 03/05/2016
                </p>

                <img className='h-24 pl-4' src={dnkn} alt='' />
                <div className='flex flex-col space-y-1'>
                  <div className='text-[10px]'>
                    <p>नीतीश कुमार</p>
                    <p>Nitish kumar</p>
                    <p>जन्म तिथि / DOB : 22/11/2002</p>
                    <p>पुरुष / Male</p>
                  </div>
                  <div className=' border-2 border-red-500 w-[264px]'>
                    <p className='text-[9px]'>
                      <span className='font-bold'>
                        आधार पहचान का प्रमाण है, नागरिकता या जन्मतिथि का नहीं ।
                        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                      </span>{' '}
                      इसका उपयोग सत्यापन (ऑनलाइन प्रमाणीकरण, या क्यूआर कोड /
                      ऑफ़लाइन एक्सएमएल की स्कैनिंग ) के साथ किया जाना चाहिए।
                    </p>
                    <p className='text-[10px]'>
                      {' '}
                      <span className='font-bold'>
                        Aadhaar is proof of identity, not of citizenship <br />
                        or date of birth.
                      </span>{' '}
                      It should be used with verification (online
                      authentication, or scanning of QR code / offline XML).
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className='text-center mt-2'>
                <p className='font-bold'>7842 0372 3629</p>
                <hr className='border-t-2 border-red-600 w-full ' />
                <p className='mt-1'>
                  मेरा <span className='text-red-600'>आधार</span>, मेरी पहचान
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back side of the aadhar */}
        <div className='flex justify-center items-center'>
          <div className='bg-white  rounded-lg shadow-md w-[400px]'>
            {/* Header */}
            <div className='flex justify-between items-center p-4  '>
              <img className='h-10 ' src={lion} alt='lion' />
              <div className='flex'>
                <img className='h-9 ' src={india_back} alt='head' />
                <img
                  className='h-10 '
                  src={aadhar_eng}
                  alt='aadhar_hindi_logo'
                />
              </div>
            </div>
            {/* Body */}
            <div className='space-y-5'>
              <div className='flex w-[100%] text-[10px] px-6 -space-y-1 '>
                <p className='text-[10px] transform origin-center -rotate-90 translate-x-[-70px] translate-y-16 absolute font-bold'>
                  {' '}
                  Details as on: 02/04/2024
                </p>
                <div className='w-[60%] space-y-3 font-bold'>
                  <p>
                    पता: <br /> आत्मज: बिन्देश्वरी प्रसाद सिंह, ग्राम-नरौन,
                    पोस्ट-नरौन, थाना-शंभूगंज, नरौन, बांका, बिहार, 813207
                  </p>
                  <p>
                    Address: <br />
                    S/O: Bindeshwari Prasad Singh, Gram-Naroun, Post-Naroun,
                    Thana-Shambhuganj, Naroun, Banka, Bihar, 813207
                  </p>
                </div>
                <img className='h-40 w-40' src={QR} alt='QR CODE' />
              </div>

              {/* Footer */}
              <div className='text-center'>
                <p className='font-bold'>7842 0372 3629</p>
                <hr className='border-t-2 border-red-600 w-full ' />

                <div className='mt-1 flex  justify-between px-4 pb-2'>
                  <div className='flex justify-center items-center text-center '>
                    <img className='h-4' src={old_phone} alt='phone' />
                    <p className='text-[12px] font-bold'>1947</p>
                    <hr className='border border-solid border-black h-3 mx-3' />
                  </div>
                  <div className='flex justify-center items-center'>
                    <div className='space-x-1 flex ml-3'>
                    <TfiEmail className='h-3/5' />
                    <p className='text-[12px] font-bold'>help@uidai.gov.in</p>
                    </div>
                    <hr className='border border-solid border-black h-3 mx-5' />
                  </div>
                  <div className='flex justify-center items-center space-x-1'>
                    <TfiWorld className='h-4' />
                    <p className='text-[12px] font-bold'>www.uidai.gov.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AadharCard
