import { Container, Avatar, Box, Button, Typography } from "@mui/material"
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TextFields from "../components/TextFields";
import CheckboxField1 from "../components/CheckboxField1";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { accountRegEx ,TextRegex} from "../utils";
import { BputtonGroup } from "react-bootstrap";


// create schema validation
const schema = yup.object({
  beneficiaryName:yup.string().required('Beneficiary Name is required').matches(TextRegex, 'Beneficiary Name is required'),
  accountNumber: yup.string().required('Valid Account Number is required').matches(accountRegEx, 'Account Number should be of 14 digits'),
  reEnterAccountNumber: yup.string().oneOf([yup.ref('accountNumber'), null], 'Account Number must match'),
  nickName: yup.string().required('Nick Name is required').matches(TextRegex, 'Nick Name is required'),
  saveBeneficiary: yup.bool().oneOf([true], 'Field must be checked')
 
});

const AddNewBeneficiary = () => {
  const { handleSubmit, reset, formState: { errors }, control } = useForm({
    defaultValues: {
     beneficiaryName: '',
     accountNumber: '',
     reEnterAccountNumber: '',
     nickName: '',
     saveBeneficiary : false
      
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <Container maxWidth="xs">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: '4rem',
        alignItems: 'center'
      }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <HowToRegIcon />
        </Avatar>
        <Typography component='h1'>Add new Beneficiary</Typography>

        {/* Form */}
        <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)} sx={{width: '100%', mt: '2rem' }}>
        
          <TextFields errors={errors} control={control} name='beneficiaryName' label='Beneficiary Name' />
          <TextFields errors={errors} control={control} name='beneficiaryAccountNumber' label='Beneficiary Account Number' />
          <TextFields errors={errors} control={control} name='reEnterAccountNumber' label='Re-Enter Account Number' />
          <CheckboxField1 errors={errors} control={control} name='saveBeneficiary' />
          <TextFields errors={errors} control={control} name='nickName' label='Nick Name' />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >Save As Beneficiary</Button>
         
         
          
        </Box>
      </Box>
    </Container>
  )
}

export default AddNewBeneficiary;