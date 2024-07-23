// pages/login.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { BsFillShieldLockFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { toast, Toaster } from "react-hot-toast";
import Cookies from 'js-cookie';
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import 'react-phone-input-2/lib/style.css';
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber, User } from "firebase/auth";
import { auth } from '../../../firebase';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchUserData } from '@/redux/reducer/authSlice';
import axios from 'axios';
import { notify } from '@/utils/notify';

interface LoginPageProps {
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage : React.FC<LoginPageProps> = ({setNav}) =>
{
    const [ name, setName ] = useState( '' );
    const [ phoneNumber, setPhoneNumber ] = useState( '' );
    const [ nameError, setNameError ] = useState( '' );
    const [ phoneError, setPhoneError ] = useState( '' );
    const fileInputRef = useRef<HTMLInputElement>( null );
    const isDisabled = !!nameError || !!phoneError;
    const [ otp, setOtp ] = useState( "" );
    const [ ph, setPh ] = useState( "" );
    const [ confirmationResult, setConfirmationResult ] = useState<ConfirmationResult | null>( null );
    const [ loading, setLoading ] = useState( false );
    const [ showOTP, setShowOTP ] = useState( false );
    const [ user, setuser ] = useState<User | null>( null );
    const [ logoPreview, setLogoPreview ] = useState<string | null>( null );
    const [ logo, setLogo ] = useState<any>( null );
    const [ profilePic, setProfilePic ] = useState( '' );
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const data = useSelector( ( state: RootState ) => state.login?.user );


    const validateName = ( value: string ) =>
    {
        if ( value.trim().length < 2 )
        {
            setNameError( 'Please enter your name' );
        } else if ( !/^[a-zA-Z\s]+$/.test( value ) )
        {
            setNameError( 'Name should only contain letters and spaces' );
        } else
        {
            setNameError( '' );
        }
    };


    const validatePhoneNumber = ( value: string ) =>
    {
        console.log( value.length );
        if ( !value )
        {
            setPhoneError( 'Phone number is required' );
        } else if ( !isPossiblePhoneNumber( value ) )
        {
            setPhoneError( 'Please enter a valid phone number' );
        } else if ( value.length !== 13 )
        {
            setPhoneError( 'Phone number should be 10 digits long' );
        }
        else
        {
            setPhoneError( '' );
        }
    };

    function onCaptchVerify ()
    {
        if ( !window.recaptchaVerifier )
        {
            window.recaptchaVerifier = new RecaptchaVerifier( auth,
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: ( response: any ) =>
                    {
                        // reCAPTCHA solved, proceed with sign-up
                    },
                    "expired-callback": () =>
                    {
                        // Handle expired reCAPTCHA
                    },
                }
            );
        }
    }
    const getUploadUrl = async ( fileName: string ): Promise<string> =>
    {
        try
        {
            const response = await axios.post<{ url: string; }>( `${ process.env.NEXT_PUBLIC_SERVER_URL }/aws/generate-upload-url`, {
                folder: 'userProfile',
                fileName,
            } );
            return response.data.url;
        } catch ( error )
        {
            console.error( 'Error getting upload URL:', error );
            throw error;
        }
    };


    const handleUpload = async (): Promise<boolean> =>
    {
        if ( !logo ) return false;


        try
        {
            const uploadUrl = await getUploadUrl( logo.name );
            if ( !uploadUrl ) return false;


            const res = await axios.put( uploadUrl, logo, {
                headers: { 'Content-Type': logo.type },
            } );


            return res.status === 200;
        } catch ( error )
        {
            console.error( 'Error uploading file:', error );
            return false;
        }
    };
    const onSignup = async () =>
    {
        setLoading( true );

        if ( !logo )
        {
            setLoading( false );
            return notify( "warn", "Please upload Your profile" );
        }


        // Check if logo is a File object
        if ( !( logo instanceof File ) )
        {
            setLoading( false );
            return notify( "warn", "Invalid file type" );
        }


        if ( ![ 'image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml' ].includes( logo.type ) )
        {
            setLoading( false );
            return notify( "warn", "Only JPEG, PNG, WEBP, GIF, SVG images are allowed" );
        }
        try
        {


            const uploadSuccess = await handleUpload();
            if ( !uploadSuccess )
            {
                setLoading( false );
                return notify( "error", "Failed to upload image" );
            }


            const path = `https://${ process.env.NEXT_PUBLIC_S3_BUCKET_NAME }.s3.amazonaws.com/userProfile/${ logo.name }`;


            setProfilePic( path );
            console.log( "Profile path", path );


            await onCaptchVerify(); // Wait for reCAPTCHA initialization

            const appVerifier = window.recaptchaVerifier;
            const formatPh = "+91" + ph;

            const result = await signInWithPhoneNumber( auth, formatPh, appVerifier );
            setConfirmationResult( result );
            setLoading( false );
            setShowOTP( true );
            toast.success( "OTP sent successfully!" );
        } catch ( error: any )
        {
            console.log( error );
            setLoading( false );
            if ( error.code === 'auth/too-many-requests' )
            {
                toast.error( "Too many requests. Please try again later." );
            } else
            {
                console.log( error );
                toast.error( "Failed to send OTP. Please try again." );
            }
        }
      }
      const handleVerifyCode = async () => {
        if (confirmationResult && otp) {
            try {
            const result = await confirmationResult.confirm(otp);
            const users = result.user as User; // Type assertion
            const idToken = await users.getIdToken();
             
            const number=users?.phoneNumber
            setuser(users); 
            setLoading(false);
            toast.success("OTP verified successfully!");
        //   Send user data to the backend
          const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/verify-phone`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ users:result,idToken ,name:name,number:number,img:profilePic}),
            credentials: 'include' 
          });
          if(response.ok){
          const data = await response.json();
        //   Cookies.set('authToken', data.token, { expires: 7 });
        console.log(data)
          dispatch(fetchUserData());
            setNav( true );
            router.push('/');
          }
           } catch (error) {
          console.error('Error during code verification:', error);
        }}
      };
    useEffect( () =>
    {
        validateName( name );
    }, [ name ] );


    useEffect( () =>
    {
        validatePhoneNumber( phoneNumber );
    }, [ phoneNumber ] );


    const handleLogoUpload = ( event: React.ChangeEvent<HTMLInputElement> ) =>
    {
        const file = event.target.files?.[ 0 ];
        console.log( "file", file );
        if ( file )
        {
            setLogo( file );
            const reader = new FileReader();
            reader.onload = ( e ) =>
            {
                setLogoPreview( e.target?.result as string );
                // setLogo( file );
            };
            reader.readAsDataURL( file );
        }
    };


    const handleLogoClick = () =>
    {
        fileInputRef.current?.click();
    };


    const handleLogin = ( e: React.FormEvent ) =>
    {
        e.preventDefault();
        if ( !nameError && !phoneError )
        {
            console.log( 'Login attempted with:', { name, phoneNumber, logo } );
            // Add your login logic here
        }
    };


    const signup = async ( user: string ) =>
    {
        if ( user == 'user' )
        {
            window.location.href = `${ process.env.NEXT_PUBLIC_SERVER_URL }/auth/google/user`;
        } else
        {
            window.location.href = `${ process.env.NEXT_PUBLIC_SERVER_URL }/auth/google/kol`;
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center p-4 box1">
            <div className="rounded-lg shadow-xl w-full max-w-[492px] bg-[#00000066] border border-gray-700 overflow-hidden">
                <div className="h-full flex flex-col p-6">
                    <h1 className="text-2xl font-bold text-center text-white mb-2 mt-2 font-[Qanelas-SemiBold, Helvetica]">LOGIN</h1>
                    <form onSubmit={handleLogin} className="flex-grow flex flex-col justify-between space-y-6">                      
                    <Toaster toastOptions={{ duration: 4000 }} />
                        <div id="recaptcha-container"></div>
                        {user ? (
                        <h2 className="text-center text-white font-medium text-2xl">
                            Login Successfull 
                        </h2>
                        ) : (
                        <div className="w-full h-full flex flex-col gap-4 rounded-lg p-4">
                            
                            {showOTP ? (
                            <>
                                <div className="bg-white text-[#5538CE] w-fit mx-auto p-4 rounded-full">
                                <BsFillShieldLockFill  size={30} />
                                </div>
                                <label
                                htmlFor="otp"
                                className="font-bold text-xl text-white text-center"
                                >
                                Enter your OTP
                                </label>
                                <input
                                type="text"
                                id="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="border-1 border-gray-600 bg-gray-950 rounded px-3 py-2 text-white mb-4 w-full"
                                />
                                <button
                                onClick={handleVerifyCode}
                                // onClick={onOTPVerify}

                                className="bg-[#5538CE] w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                >
                                {loading && (
                                    <CgSpinner size={20} className="mt-1 animate-spin" />
                                )}
                                <span>Verify OTP</span>
                                </button>
                            </>
                            ) : (
                            <>   
                        <div className="flex   flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
                            <div className="w-full   sm:w-1/3 flex justify-center sm:block">
                                <div
                                    className="bg-gray-950 border border-gray-600 h-28 w-28 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-300 hover:border-blue-500"
                                    onClick={ handleLogoClick }
                                >
                                   { logoPreview ? (
                                        <img src={ logoPreview } alt="Uploaded logo" className="w-full h-full object-cover" />
                                        ):
                                        (
                                        <div className="text-center">
                                           <img src="https://clusterprotocol2024.s3.amazonaws.com/others/gallery-add.png" alt="upload image" />
                                        </div>
                                    ) }
                                </div>
                                <input
                                    type="file"
                                    ref={ fileInputRef }
                                    onChange={ handleLogoUpload }
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>
                            <div className="w-full  sm:w-2/3 space-y-3">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-300 font-[Helvetica]">NAME *</label>
                                        { nameError && <p className="text-xs text-red-500 uppercase font-serif ">{ nameError }</p> }
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        value={ name }
                                        onChange={ ( e ) => setName( e.target.value ) }
                                        className="mt-1 p-1.5 block w-full rounded-md bg-gray-950 border border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500 text-sm"
                                        required
                                    />
                                </div>
                                <input
                                type="tel"
                                id="phone"
                                value={ph}
                                onChange={(e) => setPh(e.target.value)}
                                placeholder="Enter your phone number"
                                className="border-1 border-gray-600 bg-gray-950 rounded px-3 py-2 text-white mb-4 w-full"
                                />
                            
                                </div>
                                </div>
                                <div className='w-full flex flex-row justify-center mt-4 items-center m-auto'>
                                <button
                            onClick={onSignup}
                                className="bg-[#5538CE] w-full flex  items-center justify-center py-1 text-white rounded"
                                >
                                {loading && (
                                    <CgSpinner size={20} className="mt-1 animate-spin" />
                                )}
                                <div>
                                </div>
                                <span>Login</span>
                                </button>
                                </div>
                            </>
                            )}
                        </div>
                        )}
                 </form>
                </div>
                
            </div>
        </div>
    );
};


export default LoginPage;
