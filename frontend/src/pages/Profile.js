import { Avatar, Box, Button, Card, CardHeader, Divider, FormControl, Grid, InputLabel, Select, Snackbar, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MuiAlert from '@mui/material/Alert';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";

function Profile(){

    const URL_path = window.location.pathname;
    const userId= URL_path.substring(14);
    console.log("uioo:",userId)

    // const [userId,setUserID]= useState(16);
    const [userData,setUserData]= useState();
    const [firstName,setName] = useState()
    const [lastName,setLastName ] = useState()
    const [email,setEmail ] = useState()
    const [contactPhone,setContactPhone ] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/user/get/${userId}`)
          .then(response => {setUserData(response.data)
            const userData = response.data;
            setName(userData?.firstname || "");
            setLastName(userData?.lastname || "");
            setEmail(userData?.email || "");
            setContactPhone(userData?.mobile_no || "");
        })
          
          .catch(error => console.error(error));
      }, [userId]);

    const [notify, setnotify] = useState(false);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

    const handleEdit = async() => {

        const user ={
            firstname:firstName,
            lastname:lastName,
            email:email,
            mobile_no:contactPhone
        }
        const url = `http://localhost:8080/user/update/${userId}`;
        return axios.put(url, user)
          .then(response => {
            // handle success
            setUserData(response.data);
            setnotify(true)
            return response.data;
            

          })
          .catch(error => {
            // handle error
            console.error(error);
          });
           

    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setnotify(false);
      }; 

      const handleDelete = async () => {
        axios
          .delete(`http://localhost:8080/user/delete/${userId}`)
          .then((response) => {
            // console.log(response.data);
            navigate('/')
          })
          .catch((error) => {
            console.error(error);
            // handle error
          });
      };

    return (
        <>
        
        <Snackbar open={notify} autoHideDuration={2500} onClose={handleClose}>
                <Alert severity="success" onClose={handleClose} sx={{ width: '100%' }}>
                    User details Successfully Updated !
                </Alert>
            </Snackbar>

            <Grid container spacing={3} sx={{ marginLeft: 0, marginTop: 0 }}>
                <Grid item xs={12} sm={12} md={6}>

                    <Card
                        sx={{
                            mt: 3,
                            border: '1px solid',
                            ':hover': {
                                boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                            },
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <CardHeader title="Personal Information" />
                        <Divider />
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                            <Avatar sx={{ height: 100, width: 100 }}>JD</Avatar>
                            <Button><EditIcon/>Change Picture</Button>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '30px',
                            }}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={6}>
                                <InputLabel htmlFor="firstname">First Name</InputLabel>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        value={firstName}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                <InputLabel htmlFor="last-name">Last Name</InputLabel>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '30px',
                                marginBottom: 5,
                            }}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={6}>
                                <InputLabel htmlFor="contact-phone">Contact Phone</InputLabel>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        value={contactPhone}
                                        onChange={(e) => setContactPhone (e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                    <TextField
                                        fullWidth
                                        variant="outlined"  
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)}                                    
                                    />
                                </Grid>
                            </Grid>
                            
                        </Box>
                        <Button variant="contained" color="primary" sx={{  width: '200px',marginBottom:4 }} onClick={handleEdit} >Save details</Button>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <Card sx={{
                        mt: 3,
                        border: 'none',
                        ':hover': {
                            boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                        },
                        marginRight:2,
                       
                        padding:3
                    }} >
                       <div style={{display:"flex", alignItems:"center"}}>
                            <Avatar></Avatar>
                            <Typography sx={{fontWeight:"bold"}}>&nbsp;&nbsp;UserName</Typography>
                       </div>
                       <h3>About Me</h3>
                       <Divider sx={{marginBottom:4}}/>

                       <Typography sx={{fontWeight:"bold",marginBottom:10,fontSize:13}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                    
                    </Card>
                </Grid>
            </Grid>
          
            <Button variant="contained" onClick={handleDelete} sx={{ marginTop: '15px',backgroundColor:"red",':hover': {
                            bgcolor: 'red', 
                            color: 'white',
                            }}}>Delete Account</Button>
        </>

    )
}
export default Profile;