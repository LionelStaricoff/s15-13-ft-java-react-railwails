import {
  Card,
  CardHeader,
  CardBody,
  Typography
} from '@material-tailwind/react'
import LogoMedium from '../../assets/logo-md.svg'

export default function ShowUserData () {
  return (
    <Card className='w-[45%] h-[20%] flex flex-row justify-items-center mt-3'>
      <CardHeader className='h-full rounded-full'> </CardHeader>
      <img src={LogoMedium} alt='profile-picture' className='bg-black size-30 rounded-full h-full' />
      <CardBody className='text-center justify-items-center content-center ml-5'>
        <Typography variant='h4' color='blue-gray' className='mb-2'>
          Welcome,  User
        </Typography>
      </CardBody>
    </Card>
  )
}