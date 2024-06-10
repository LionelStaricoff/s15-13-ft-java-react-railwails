import { Checkbox, Typography } from '@material-tailwind/react'
import { LuChevronsUpDown } from 'react-icons/lu'
import MenuActionsTableSupplier from '../suppliers/MenuActionsTableSupplier'

export default function TaxesTable ({ TABLE_DATA, TABLE_HEAD, checkedItems, setCheckedItems, handleSort, handleOpen }) {
  const handleCheckAll = () => {
    const allChecked = checkedItems.every((item) => item)
    setCheckedItems(new Array(TABLE_DATA.length).fill(!allChecked))
  }

  const handleCheckItem = (index) => {
    const newCheckedItems = [...checkedItems]
    newCheckedItems[index] = !newCheckedItems[index]
    setCheckedItems(newCheckedItems)
  }

  return (
    <table className='w-full min-w-max table-auto text-left'>
      <thead>
        <tr>
          {TABLE_HEAD.map(({ head, row }, index) =>
            <th
              key={head}
              className='first:flex items-center h-12 first:cursor-default cursor-pointer bg-[#F1F3F9] p-4 transition-colors hover:bg-[#e4e7ee] first:hover:bg-[#F1F3F9]'
              onClick={() => index !== 0 && handleSort(row)}
            >
              {head === 'checkbox'
                ? (
                  <Checkbox
                    ripple={false}
                    className='hover:before:opacity-0'
                    containerProps={{
                      className: 'p-0'
                    }}
                    checked={checkedItems.every((item) => item)}
                    onChange={handleCheckAll}
                  />)
                : (
                  <Typography
                    variant='small'
                    className='flex text-[#1D2433] font-semibold items-center gap-2 leading-none'
                  >
                    {head}{' '}
                    {(index !== 0 && index !== TABLE_HEAD.length - 1) && (
                      <LuChevronsUpDown strokeWidth={2} className='h-3 w-4' />
                    )}
                  </Typography>)}
            </th>)}
        </tr>
      </thead>
      <tbody>
        {TABLE_DATA.map(
          ({ id, name, percentage }, index) => {
            const classes = 'first:flex items-center h-12 px-4 text-[#1D2433]'
            return (
              <tr key={index} className='even:bg-[#F8F9FC] odd:bg-white'>
                {/* checked */}
                <td className={classes}>
                  <Checkbox
                    id={id}
                    ripple={false}
                    className='hover:before:opacity-0'
                    containerProps={{
                      className: 'p-0'
                    }}
                    checked={checkedItems[index]}
                    onChange={() => handleCheckItem(index)}
                  />
                </td>
                {/* name */}
                <td className={classes}>
                  <Typography
                    variant='small'
                    className='font-normal'
                  >
                    {name}
                  </Typography>
                </td>
                {/* percentage */}
                <td className={classes}>
                  <Typography
                    variant='small'
                    className='font-normal'
                  >
                    {percentage}%
                  </Typography>
                </td>
                {/* actions */}
                <td className={classes}>
                  <MenuActionsTableSupplier handleOpen={handleOpen} />
                </td>
              </tr>
            )
          }
        )}
      </tbody>
    </table>
  )
}