import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

interface Props {
  dark:boolean
}

function createData(
  invoice: string,
  date: number | string,
  status: string,
  plan: string,
  amount: number,
) {
  return { invoice, date, status, plan, amount }
}

const rows = [
  createData('Invoice #001', 'June 1,2022', 'Paid', 'Pro Plan', 25.0),
  createData('Invoice #002', 'June 1,2022', 'Paid', 'Pro Plan', 25.0),
]

function Tables(props: Props) {
  const {dark} = props

  return (
    <div className="w-full px-16 py-5">
      <TableContainer>
        <Table
          sx={{ minWidth: 650 }}
          className={`${props.dark == true ? "bg-gray-white" : "bg-zinc-900"} `}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell className="!text-gray-400 !text-[11px]  ">
                INVOICE
              </TableCell>
              <TableCell className="!text-gray-400 !text-[11px]  " align="right">
                BILLING DATE
              </TableCell>
              <TableCell className="!text-gray-400 !text-[11px]  " align="right">
                STATUS
              </TableCell>
              <TableCell className="!text-gray-400 !text-[11px]  " align="right">
                PLAN
              </TableCell>
              <TableCell className="!text-gray-400 !text-[11px]  " align="right">
                AMOUNT
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.invoice}
                className=" !border-t border-zinc-700 "
                sx={{ '&:last-child td  , &:last-child th': { border: 0 } }}
              >
                <TableCell
                  className={`!text-xs ${props.dark == true ? "!text-black !font-medium" : "!text-white"}  `}
                  component="th"
                  scope="row"
                >
                  {row.invoice}
                </TableCell>
                <TableCell className={`!text-xs ${props.dark == true ? "!text-black !font-medium" : "!text-white"}  `} align="right">
                  {row.date}
                </TableCell>
                <TableCell className={`!text-xs ${props.dark == true ? "!text-black !font-medium" : "!text-white"}  `} align="right">
                  {row.status}
                </TableCell>
                <TableCell className={`!text-xs ${props.dark == true ? "!text-black !font-medium" : "!text-white"}  `} align="right">
                  {row.plan}
                </TableCell>
                <TableCell className={`!text-xs ${props.dark == true ? "!text-black !font-medium" : "!text-white"}  `} align="right">
                  {row.amount}
                </TableCell>
                <TableCell className='flex items-center justify-end' >
                  <button className="bg-gray-700 hover:bg-transparent border  border-gray-700 px-3 pt-2 pb-1 rounded-md text-white text-[10px]">
                    DOWNLOAD
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* ========================== */}
      {/* <table className="text-white flex flex-col ">
        <thead>
          <tr className="text-xs text-gray-500 ">
            <th className="font-medium"></th>
            <th className="font-medium"></th>
            <th className="font-medium"></th>
            <th className="font-medium"></th>
            <th className="font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => (
            <tr className="border-t border-zinc-700">
              <td>{el.invoice}</td>
              <td>{el.date}</td>
              <td>{el.status}</td>
              <td>{el.plan}</td>
              <td>{el.amount}</td>
              <button>DOWNLOAD</button>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}

export default Tables
