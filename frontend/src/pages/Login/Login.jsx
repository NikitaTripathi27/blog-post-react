import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../../routes/auth.routes';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';
import './Login.css';

const Login = (props) => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    loginKey: '',
    password: '',
  });
  const [ isLoading, setIsLoading] = useState(false);

  const handleFormChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm((prev) => { return { ...prev, [key]: value } });
  }

  const setLocalStorageData = (data) => {
    localStorage.setItem('username', data?.user?.username);
    localStorage.setItem('email', data?.user?.email);
    localStorage.setItem('accessToken', data?.tokens?.access?.token);
  }

  const handleLogin = async () => {
      setIsLoading(true);

      try {
        const data = await login(form);
        setLocalStorageData(data);
        navigate('/');
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
  }

  const handleregisterClick =()=>{
    navigate('/register')
  }

  return (
    <Box
      className="login-layout"
    >
      <Paper
        className="login-form"
      >
        <Stack
          spacing={2}
        >

          <Typography level="h3">Sign In</Typography>

          <FormControl>
            <Input
              name="loginKey"
              placeholder='Username or Email'
              value={form.loginKey}
              onChange={handleFormChange}
            />
            <FormHelperText>Please Enter Username or Email.</FormHelperText>
          </FormControl>

          <FormControl>
            <Input
              type='password'
              name="password"
              placeholder='Password'
              value={form.password}
              onChange={handleFormChange}
            />
          </FormControl>

          <FormControl>
            <Button
              variant="contained"
              onClick={handleLogin}
            >
              {isLoading ? <CircularProgress size='1.5rem' color='inherit' /> : "Login"}
            </Button>
          </FormControl>
        </Stack>
      </Paper>
      <span className="sub-login">Don't have an account? </span><span onClick ={handleregisterClick} className="reg-click">Register Now</span>
    </Box>
  );
}

export default Login;





// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { login } from '../../routes/auth.routes';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Paper from '@mui/material/Paper';
// import CircularProgress from '@mui/material/CircularProgress';
// import FormControl from '@mui/joy/FormControl';
// import Input from '@mui/joy/Input';
// import Button from '@mui/material/Button';
// import Typography from '@mui/joy/Typography';
// import './Login.css';
// const Login = () => {
//     const navigate = useNavigate()
//     const [form , setform] = useState({
//         loginKey:'',
//         password:''
//     })

//     const [isLoading , setIsloading] = useState(false)

//     const handleFormChange = (e)=>{
//         const key = e.target.name;
//         const value = e.target.value
//         setform((prev)=> {return {...prev ,[key]:value}})
//     }

//     const setLocalStorageData =(data)=>{
//         localStorage.setItem('username',data.user.username);
//         localStorage.setItem('email' , data.user.username);
//         localStorage.setItem('accessToken' , data.token.access.token)
//     }

//     const handleLogin = async ()=>{
//         setIsloading(true);
//         try{
//             const data = await login(form);
//             setLocalStorageData(data);
//             navigate('/')
//         }
//         catch(e){
//             console.log(e)
//         }
//         finally{
//             setIsloading(false)
//         }
//     }

//     return ( 
//     <>
//     <Box className='login-layout'>
//         <Paper className='login-form'>
//             <Stack spacing={2}>
//                 <Typography level='h3'>
//                     Sign In
//                 </Typography>
//                 <FormControl>
//                     <Input
//                     name="loginKey"
//                     placeholder ="Username or Email"
//                     value={FormData.loginKey}
//                     onChange={handleFormChange} />
//                 </FormControl>

//                 <FormControl>
//                     <Input
//                     name="password"
//                     placeholder ="password"
//                     value={FormData.loginKey}
//                     onChange={handleFormChange} />
//                 </FormControl>
//                 <FormControl>
//                     <Button 
//                     variant="contained"
//                     onClick={handleLogin}
//                     >
//                         {isLoading ? <CircularProgress size='1.5rem' color='inherit' />:'Login'}
//                     </Button>
//                 </FormControl>
//             </Stack>
//         </Paper>
//     </Box>
//     </> 
//     );
// }
 
// export default Login;