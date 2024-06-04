import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, Input } from '@material-tailwind/react'
import * as Yup from 'yup'
import { useCustomerCreateMutation, useCustomerUpdateMutation } from '../../../store/apiSlice.js'
import { useCustomersActions } from '../../../hooks/useCustomersActions.js'

export function CustomersFormik ({ setOpen, action, customerToEdit }) {
  const [customerCreate] = useCustomerCreateMutation()
  const [customerUpdate] = useCustomerUpdateMutation()

  const INPUT_BG = '#FFF8F8'

  const { useAddCustomer } = useCustomersActions()

  const customerSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    personalCode: Yup.string().required('Code is required'),
    customerType: Yup.string().required('Customer type is required')
  })

  const initialValues = {
    name: customerToEdit?.name ?? '',
    personalCode: customerToEdit?.personalCode ?? '',
    customerType: customerToEdit?.customerType ?? ''
  }

  const createCustomer = async (values) => {
    await customerCreate(values).unwrap()
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          useAddCustomer(res.data)
        }
      }).catch((error) => console.log(error))
  }

  const editCustomer = async (values) => {
    await customerUpdate(values).unwrap()
      .then((res) => {
        console.log(res)
        if (res.status === 201) {
          useAddCustomer(res.data)
        }
      }).catch((error) => console.log(error))
  }

  const handleSubmit = async (values) => {
    console.log(values)
    action === 'create' && await createCustomer(values)
    action === 'edit' && await editCustomer(values)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={customerSchema} onSubmit={handleSubmit}>

      {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
        <Form className='flex flex-col gap-2'>
          <fieldset className='flex flex-col gap-2'>
            {/* name */}
            <div className='flex flex-col gap-[2px]'>
              <Field name='name'>
                {({ field /* { name, value, onChange, onBlur } */ }) => (
                  <Input {...field} type='text' placeholder='Name' label='Name' size='lg' className='bg-primary' style={{ backgroundColor: INPUT_BG }} />
                )}
              </Field>
              {errors.name && touched.name
                ? (<ErrorMessage className='ml-2 text-red-600 text-xs' name='name' component='div' />)
                : <div className='h-4' />}
            </div>
            {/* personalCode */}
            <div className='flex flex-col gap-[2px]'>
              <Field name='personalCode'>
                {({ field /* { name, value, onChange, onBlur } */ }) => (
                  <Input {...field} type='text' placeholder='Code' label='Code' size='lg' className='bg-primary' style={{ backgroundColor: INPUT_BG }} />
                )}
              </Field>
              {errors.personalCode && touched.personalCode
                ? (<ErrorMessage className='ml-2 text-red-500 text-xs' name='personalCode' component='div' />)
                : <div className='h-4' />}
            </div>
            {/* customerType */}
            <div className='flex flex-col gap-[2px]'>
              <Field name='customerType'>
                {({ field /* { name, value, onChange, onBlur } */ }) => (
                  <Input {...field} type='text' placeholder='Customer Type' label='Customer Type' size='lg' className='bg-primary' style={{ backgroundColor: INPUT_BG }} />
                )}
              </Field>
              {errors.customerType && touched.customerType
                ? (<ErrorMessage className='ml-2 text-red-500 text-xs' name='customerType' component='div' />)
                : <div className='h-4' />}
            </div>
          </fieldset>
          <div className='flex justify-evenly gap-2'>
            <Button type='submit' className='bg-[#D1D4FA] text-gray-900'>
              Save
            </Button>
            <Button onClick={() => setOpen(false)} color='black'>
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
