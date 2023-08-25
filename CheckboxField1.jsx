import { Checkbox, FormControlLabel } from '@mui/material'
import { Controller } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'

const CheckboxField1 = ({ name, errors, control }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel control={<Checkbox {...field} required />} label="Save Beneficiary" />
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </>
  )
}
export default CheckboxField1