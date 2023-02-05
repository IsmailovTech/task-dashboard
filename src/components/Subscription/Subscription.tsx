import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import visa from '../../Assets/Images/visa.png'
import Tables from '../BaseComponents/Tables'

interface Props {
  dark: boolean
}

function Subscription(props: Props) {
  const { dark } = props

  return (
    <div className="w-full">
      <div className="w-full px-16 py-5">
        <h1
          className={` ${
            props.dark == true ? 'text-zinc-900' : 'text-gray-200'
          } text-xl font-semibold`}
        >
          Subscription
        </h1>
        <p className="text-gray-500 text-sm font-medium mt-2">
          Manage your billing information and invoices
        </p>
        <div className="flex gap-5 h-cardHeight mt-8">
          <div
            className={`border   ${
              props.dark == true
                ? 'bg-gray-300 border-zinc-400'
                : 'bg-cardbg text-gray-300 border-zinc-700'
            } rounded-md w-full  px-4   py-4`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3>
                  Pro
                  <span
                    className={`text-[#4BAAC9] border border-[#4BAAC9] ${
                      props.dark === true ? 'bg-white' : 'bg-slate-700'
                    } ml-3 text-[13px] px-2 rounded-md pb-1`}
                  >
                    Current plan
                  </span>
                </h3>
                <p
                  className={`mt-3 text-xs ${
                    props.dark == true ? 'text-gray-700' : 'text-gray-500'
                  } font-medium`}
                >
                  You are currently on the pro plan
                </p>
              </div>
              <p
                className={`text-2xl ${
                  props.dark == true ? 'text-black' : 'text-white'
                } `}
              >
                $25<span className="text-xs text-gray-500">/month</span>
              </p>
            </div>
            <hr className="border-zinc-700 my-5"></hr>

            <button className="flex items-center gap-1 hover:gap-2 transition-all duration-300 text-orange-500 text-xs font-medium">
              UPGRADE PLANS
              <ArrowForwardOutlinedIcon sx={{ fontSize: 18 }} />
            </button>
          </div>

          <div
            className={`border   ${
              props.dark == true
                ? 'bg-gray-300 border-zinc-400'
                : 'bg-cardbg text-gray-300 border-zinc-700'
            } rounded-md w-full  px-4   py-4`}
          >
            <h3>Payment method</h3>
            <div
              className={`flex justify-between items-center ${
                props.dark == true ? 'bg-gray-300 border border-gray-600' : 'bg-gray-800'
              }  h-[70px] mt-3 rounded-xl px-3 `}
            >
              <div className=" flex items-center gap-1">
                <img src={visa} alt="photo" className=" w-[70px] h-[37px]" />
                <p className="flex flex-col  text-sm font-semibold">
                  Visa **** 6546
                  <span className="text-gray-400 ">Expiry 03/25</span>
                </p>
              </div>

              <button className="border hover:bg-zinc-900  border-zinc-700 bg-transparent text-[11px] px-4 py-1 rounded-lg ">
                EDIT
              </button>
            </div>
          </div>
        </div>

        <div className={`flex flex-col gap-2 h-contentHeight border border-zinc-700 rounded-md w-full ${props.dark == true ? " bg-gray-300 text-black":"bg-cardbg text-gray-300"}  px-4  py-4 mt-4`}>
          <p className="text-xs font-medium">Subscription Usage</p>
          <p className="text-xs font-medium text-gray-500">
            Total logs ingested:{' '}
            <span className={`${props.dark == true ? "text-black" :"text-gray-100"}`}>32917.63MB</span>
          </p>
          <p className="text-xs font-medium text-gray-500">
            Total Lambda executions:{' '}
            <span className={`${props.dark == true ? "text-black" :"text-gray-100"}`}>1.3ml</span>
          </p>
        </div>
      </div>
      <hr className="mt-10 mb-4 border-zinc-700" />
      <Tables dark={props.dark} />
    </div>
  )
}

export default Subscription
