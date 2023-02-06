import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import visa from '../../Assets/Images/visa.png'
import Tables from '../BaseComponents/Tables'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import { Button } from '@mui/material'

interface Props {
  dark: boolean
}

function Subscription(props: Props) {
  const { dark } = props

  return (
    <>
      <Box sx={{ flexGrow: 1, paddingX: 8, paddingY: 2 }}>
        <Typography
          variant="h5"
          className={` ${
            props.dark == true ? 'text-zinc-900' : 'text-gray-200'
          } text-xl font-semibold`}
        >
          Subscription
        </Typography>

        <Typography
          variant="subtitle2"
          gutterBottom
          className="text-gray-500 font-medium "
        >
          Manage your billing information and invoices
        </Typography>

        <Grid container spacing={2} columns={16} sx={{ marginTop: 1 }}>
          <Grid item xs={8}>
            <Box
              className={`border h-cardHeight  ${
                props.dark == true
                  ? 'bg-gray-300 border-zinc-400'
                  : 'bg-cardbg text-gray-300 border-zinc-700'
              } rounded-md w-full  px-4   py-4`}
            >
              <Grid container spacing={2} columns={16}>
                <Grid item xs={13}>
                  <Typography variant="subtitle2" gutterBottom>
                    Pro
                    <Chip
                      label="Current plan"
                      variant="outlined"
                      sx={{ borderRadius: '5px', height: 20 }}
                      className={`!text-[#4BAAC9] border !border-[#4BAAC9] ${
                        props.dark === true ? '!bg-white' : '!bg-slate-700'
                      } ml-3 text-[13px] `}
                    />
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{ marginTop: 2 }}
                    className={`mt-5 text-xs ${
                      props.dark == true ? 'text-gray-700' : 'text-gray-500'
                    } font-medium`}
                  >
                    You are currently on the pro plan
                  </Typography>
                </Grid>
                <Grid item xs={3} sx={{ marginTop: 2 }}>
                  <Typography
                    variant="h6"
                    className="flex items-end justify-center "
                    gutterBottom
                  >
                    $25
                    <Typography
                      variant="subtitle2"
                      className="text-xs text-gray-500"
                    >
                      /months
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ borderColor: 'gray', marginTop: 2 }} />

              <Button
                sx={{ color: 'orange', fontSize: 12, marginTop: 1 }}
                className="flex items-center gap-1 hover:gap-2 "
              >
                UPGRADE PLANS
                <ArrowForwardOutlinedIcon sx={{ fontSize: 18 }} />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box
              className={`border h-cardHeight  ${
                props.dark == true
                  ? 'bg-gray-300 border-zinc-400'
                  : 'bg-cardbg text-gray-300 border-zinc-700'
              } rounded-md w-full  px-4   py-4`}
            >
              <h3>Payment method</h3>
              <div
                className={`flex justify-between items-center ${
                  props.dark == true
                    ? 'bg-gray-300 border border-gray-600'
                    : 'bg-gray-800'
                }  h-[70px] mt-3 rounded-xl px-3 `}
              >
                <div className=" flex items-center gap-1">
                  <img src={visa} alt="photo" className=" w-[70px] h-[37px]" />
                  <p className="flex flex-col  text-sm font-semibold">
                    Visa **** 6546
                    <span className="text-gray-400 ">Expiry 03/25</span>
                  </p>
                </div>

                <Button
                  sx={{
                    fontSize: 12,
                    borderRadius: 2,
                    padding: 0,
                    borderColor: 'gray',
                    color: 'white',
                  }}
                  variant="outlined"
                >
                  EDIT
                </Button>
              </div>
            </Box>
          </Grid>
          <Grid item xs={16}>
            <div
              className={`flex flex-col gap-2 h-contentHeight border border-zinc-700 rounded-md w-full ${
                props.dark == true
                  ? ' bg-gray-300 text-black'
                  : 'bg-cardbg text-gray-300'
              }  px-4  py-4 mt-4`}
            >
              <p className="text-xs font-medium">Subscription Usage</p>
              <p className="text-xs font-medium text-gray-500">
                Total logs ingested:{' '}
                <span
                  className={`${
                    props.dark == true ? 'text-black' : 'text-gray-100'
                  }`}
                >
                  32917.63MB
                </span>
              </p>
              <p className="text-xs font-medium text-gray-500">
                Total Lambda executions:{' '}
                <span
                  className={`${
                    props.dark == true ? 'text-black' : 'text-gray-100'
                  }`}
                >
                  1.3ml
                </span>
              </p>
            </div>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: 'gray', marginTop: 8 }} />
        <Tables dark={props.dark} />
      </Box>
    </>
  )
}

export default Subscription
