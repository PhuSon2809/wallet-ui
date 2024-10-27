import { useState } from 'react'
import './App.css'
import { images } from './assets'
import { ProviderItem } from './components'

const listProviders = [
  {
    id: 1,
    icon: images.images.internationnal_card,
    title: 'International Card',
    subTitle: 'Top up from your VISA/MasterCard'
  },
  { id: 2, icon: images.images.transak, title: 'Transak', subTitle: 'Buy with Visa/Master cards and more' },
  { id: 3, icon: images.images.bep20, title: 'BEP20', subTitle: 'Transfer from your BEP20 wallet' },
  { id: 4, icon: images.images.erc20, title: 'ERC20', subTitle: 'Top up from your VISA/MasterCard' },
  { id: 5, icon: images.images.tron, title: 'TRON', subTitle: 'Transfer from your Tron wallet' }
]

const listCardyTypes = [
  { id: 1, icon: images.images.atm, title: 'Enable NFC on your device' },
  {
    id: 2,
    icon: images.images.credit_cardback,
    title: 'Hold your card near the reader'
  },
  { id: 3, icon: images.images.coins, title: 'Wait for confirmation to complete the transaction' }
]

function App() {
  const [errMessage, setErrMessage] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('')
  const [accepted, setAccepted] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <main className='mx-auto text-left w-full bg-main bg-no-repeat bg-center bg-cover min-h-screen pb-40'>
      <section className='p-5 py-8 bg-white/[.45] backdrop-blur-[55px] shadow-s-2'>
        <p className='text-[#3C3C43] text-[16px]/[22px] font-bold'>Select provider to get a quote</p>

        <div className='mt-5 space-y-[10px] w-full'>
          {listProviders.map((provider) => (
            <ProviderItem key={provider.id} provider={provider} />
          ))}
        </div>

        <div className='flex items-start gap-2 mt-2'>
          <img src={images.icons.info} alt='icon-info' className='size-3 mt-1' />
          <p className='text-[13px]/[18px] text-[#808080]'>
            Fees availability and purchase limits vary between providers you can check their quotes and select one that
            works best for you.
          </p>
        </div>
      </section>

      {/* Top Up */}
      <section className='mt-5 px-5'>
        <h5 className='text-white text-[22px]/[22px] font-bold'>Top Up</h5>
        <div className='mt-4'>
          <p className='text-white font-bold text-[15px]/[]'>Transfer from</p>

          <div className='mt-2 bg-white/[.75] p-[15px] flex items-center gap-4 rounded-xl'>
            <img src={images.images.cards} alt='cards' className='size-[25px]' />
            <p className='text-[#3C3C43] text-[15px]/[15px] font-bold'>International Card</p>
            <div className='flex items-center gap-2'>
              <img src={images.images.visa} alt='visa' className='w-6' />
              <img src={images.images.credit} alt='credit' className='w-6' />
              <img src={images.images.jcb} alt='jcb' className='w-6' />
              <img src={images.images.amex} alt='amex' className='w-6' />
            </div>
          </div>
        </div>

        <div className='my-8 flex items-start justify-center gap-5'>
          <img src={images.icons.icon_topup} alt='icon-topup' className='szie-9 shrink-0 mt-[14px]' />
          <div className='flex flex-col items-center'>
            <input
              type='text'
              value={inputValue}
              onChange={handleChange}
              className='max-w-[160px] text-[40px] font-semibold text-white text-center bg-transparent'
            />
            <p className='text-[14px]/[17px] text-white font-medium'>to Wallet fc0de...geh78</p>
          </div>
        </div>

        <div className='bg-white/[.22] backdrop-blur-[80px] h-[64px] px-4 shadow-s-3 flex items-center rounded-2xl justify-between'>
          <p className='text-[14px]/[17px] font-medium text-white'>Fee</p>
          <p className='text-[18px]/[22px] font-bold text-white'>11 USDT</p>
        </div>
      </section>

      <section className='mt-5 px-5'>
        <div className='flex items-center justify-between w-full'>
          <h5 className='text-white text-[22px]/[22px] font-bold capitalize'>top Up Preview</h5>

          <div className='flex items-center p-2 bg-white/[.45] backdrop-blur-[80px] shadow-s-1 rounded-lg'>
            <img src={images.images.wallet} alt='wallet' className='mr-[5px]' />
            <div className='space-y-1'>
              <p className='line-clamp-1 text-[11px]/[11px] font-bold text-[#3C3C43]'>Cristofer ...</p>
              <p className='text-[#636369] text-[11px]/[11px]'>fc0d1...hx78</p>
            </div>
            <img src={images.icons.arrow_bottom} alt='arrow-bottom' />
          </div>
        </div>

        <div className='mt-[100px] bg-white/[.75] backdrop-blur-[80px] rounded-xl px-4 py-3'>
          <div className='flex items-center justify-between pb-[10px] border-0 border-b w-full border-solid border-white'>
            <p className='text-[15px]/[15px] text-[#636369]'>Top up amount</p>
            <div className='flex  items-center gap-2'>
              <p className='text-[15px]/[17px] text-[#3C3C43] font-semibold'>100 USDT</p>
              <button>
                <img src={images.icons.copy} alt='copy' />
              </button>
            </div>
          </div>

          <div className='flex items-start justify-between py-[10px] border-0 border-b w-full border-solid border-white'>
            <p className='text-[15px]/[15px] text-[#636369]'>Fee</p>
            <div className=' flex flex-col items-end'>
              <p className='text-[15px]/[17px] text-[#3C3C43] font-medium'>4%</p>
              <p className='text-[15px]/[17px] text-[#3C3C43] font-medium'>3.996 USD</p>
            </div>
          </div>

          <div className='flex items-start justify-between py-[10px] border-0 border-b w-full border-solid border-white'>
            <p className='text-[15px]/[15px] text-[#636369] text-nowrap flex-shrink-0'>Receiving address</p>
            <div className=' flex flex-col items-end'>
              <p className='text-[15px]/[18px] text-[#3C3C43] font-medium'>Cristofer Washley</p>
              <p className='text-[15px]/[18px] text-[#636369] font-medium break-words'>fc0d1a050a04e6400hx78</p>
            </div>
          </div>

          <div className='flex items-start justify-between pt-[10px]  w-full'>
            <p className='text-[15px]/[15px] text-[#636369] text-nowrap flex-shrink-0'>Total amount</p>
            <div className=' flex flex-col items-end'>
              <p className='text-[15px]/[18px] text-[#3C3C43] font-medium'>103.996 USD</p>
              <p className='text-[15px]/[18px] text-[#636369] font-medium break-words'>
                one hundred and three point nine nine six USD
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-5 px-5'>
        <img
          src={images.images.three_card}
          alt='three-card'
          className='w-full sm:max-w-[300px] md:max-w-[410px] mx-auto'
        />

        <div className='relative mt-10 bg-white/[.75] backdrop-blur-[80px] rounded-xl md:rounded-2xl px-5 py-[14px] md:px-6 md:py-4 space-y-[18px] md:space-y-6'>
          {listCardyTypes.map((type) => (
            <div className='flex items-center gap-4'>
              <div className='rounded-full size-10 md:size-[53px] flex-shrink-0 bg-white/[.45] backdrop-blur-[20px] flex items-center justify-center overflow-hidden'>
                <img src={type.icon} alt={type.title} className='size-auto md:size-[30px]' />
              </div>
              <p className='sm:text-[13px]/[18px] md:text-[18px]/[18px] text-[#636369]'>{type.title}</p>
            </div>
          ))}

          <img
            src={images.icons.arrow_dash_1}
            alt='arrow_dash_1'
            className='absolute top-[30px] left-[14px] md:top-[40px] md:left-[20px] scale-100 md:scale-110'
          />
          <img
            src={images.icons.arrow_dash_2}
            alt='arrow_dash_2'
            className='absolute top-[88px] left-[54px] md:top-[118px] md:left-[70px] scale-100 md:scale-110'
          />
        </div>
      </section>

      <section className='mt-5 px-5'>
        <p className='text-white text-[15px]/[15px]'>Transaction details</p>

        <div className='mt-[10px] bg-white/[.75] backdrop-blur-[80px] rounded-xl px-4 py-3'>
          <div className='flex items-center justify-between gap-5 pb-[10px] border-0 border-b w-full border-solid border-white'>
            <p className='text-[15px]/[15px] text-[#636369]'>Hash</p>
            <div className='flex items-center gap-2'>
              <p className='text-[15px]/[17px] text-[#3C3C43] font-semibold'>0xb082dbdb7645082dbdb7645</p>
              <button>
                <img src={images.icons.copy} alt='copy' />
              </button>
            </div>
          </div>

          <div className='flex items-center justify-between gap-5 py-[10px] border-0 border-b w-full border-solid border-white'>
            <p className='text-[15px]/[15px] text-[#636369]'>Hash</p>
            <div className='flex items-center gap-[6px]'>
              <img src={images.icons.success} alt='success' className='size-[15px]' />
              <p className='text-[15px]/[21px] text-[#219653] font-medium'>SUCCESS</p>
            </div>
          </div>

          <div className='flex items-center justify-between gap-5 py-[10px] border-0 border-b w-full border-solid border-white'>
            <p className='text-[15px]/[15px] text-[#636369]'>Number of confirmations</p>
            <p className='text-[15px]/[17px] text-[#3C3C43] font-medium break-words'>#894</p>
          </div>

          <div className='flex items-center justify-between gap-5 py-[10px] border-0 border-b w-full border-solid border-white'>
            <p className='text-[15px]/[15px] text-[#636369]'>Timestamp</p>
            <p className='text-[15px]/[17px] text-[#3C3C43] font-medium'>12 Jan 2022, 07:19:09</p>
          </div>

          <div className='flex items-start justify-between py-[10px] border-0 border-b w-full border-solid border-white'>
            <p className='text-[15px]/[15px] text-[#636369] text-nowrap flex-shrink-0'>Receiving address</p>
            <div className=' flex flex-col items-end'>
              <p className='text-[15px]/[18px] text-[#3C3C43] font-medium'>Cristofer Washley</p>
              <p className='text-[15px]/[18px] text-[#636369] font-medium break-words'>fc0d1a050a04e6400hx78</p>
            </div>
          </div>

          <div className='flex items-start justify-between pt-[10px]  w-full'>
            <p className='text-[15px]/[15px] text-[#636369] text-nowrap flex-shrink-0'>Total amount</p>
            <div className=' flex flex-col items-end'>
              <p className='text-[15px]/[18px] text-[#3C3C43] font-medium'>103.996 USD</p>
              <p className='text-[15px]/[18px] text-[#636369] font-medium break-words'>
                one hundred and three point nine nine six USD
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='flex items-center flex-col'>
        <h1 className='text-[40px] font-bold text-[#4A4A4A]'>Welcome to PAY</h1>

        <div>
          <div className='flex items-center gap-2'>
            <div className='relative h-5'>
              <input
                readOnly
                type='checkbox'
                checked={accepted}
                onClick={() => {
                  setAccepted(!accepted)
                  if (errMessage !== '') {
                    setErrMessage('')
                  }
                }}
                className='checked:after:content-[" "] hover:shadow-avatar size-5 shrink-0 appearance-none rounded-[4px] bg-white transition-colors duration-200 ease-in-out checked:after:absolute checked:after:left-[7.5px] checked:after:top-[4.45px] checked:after:block checked:after:h-[10px] checked:after:w-[5.2px] checked:after:rotate-[45deg] checked:after:border-b-[2px] checked:after:border-r-[2px] checked:after:border-solid checked:after:border-[#FF8A64] focus:outline-none'
              />
            </div>
            <p className='text-[16px]/[26px] text-[#020D19]'>I agree with PAY terms and conditions</p>
          </div>
          <p className='ml-[26px] mt-1 h-[18px] text-[14px] text-red-500'>{errMessage && errMessage}</p>
        </div>

        <button className='btn-shadow uppercase bg-[#FF8A64] font-bold text-white w-full h-[56px] flex items-center justify-center rounded-[30px]'>
          next
        </button>
      </section>
    </main>
  )
}

export default App
