// pages/login.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { BsFillShieldLockFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { toast, Toaster } from "react-hot-toast";
import Cookies from 'js-cookie';
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import 'react-phone-input-2/lib/style.css';
import {  ConfirmationResult, User } from "firebase/auth";
import { auth } from '../../../firebase';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchUserData } from '@/redux/reducer/authSlice';
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import axios from 'axios';
import { notify } from '@/utils/notify';

const LoginPage: React.FC = () =>
{
    const [ name, setName ] = useState( '' );
    const [ phoneNumber, setPhoneNumber ] = useState( '' );
    const [ nameError, setNameError ] = useState( '' );
    const [ phoneError, setPhoneError ] = useState( '' );
    const [ logoPreview, setLogoPreview ] = useState<string | null>( null );
    const [ logo, setLogo ] = useState<File | null>( null );
    const [ profilePic, setProfilePic ] = useState( '' );
    const fileInputRef = useRef<HTMLInputElement>( null );
    const isDisabled = !!nameError || !!phoneError;
    const [ otp, setOtp ] = useState( "" );
    const [ ph, setPh ] = useState( "" );
    const [ confirmationResult, setConfirmationResult ] = useState<ConfirmationResult | null>( null );
    const [ loading, setLoading ] = useState( false );
    const [ showOTP, setShowOTP ] = useState( false );
    const [ user, setuser ] = useState<User | null>( null );
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
                },
                
            );
        }
    }

    const getUploadUrl = async ( fileName: string ): Promise<string> =>
    {
        try
        {
            const response = await axios.post<{ url: string; }>( `${ process.env.NEXT_PUBLIC_SERVER_URL }/aws/generate-upload-url`, {
                folder: 'userprofile',
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

            const path = `https://${ process.env.NEXT_PUBLIC_S3_BUCKET_NAME }.s3.amazonaws.com/userprofile/${ logo.name }`;

            setProfilePic( path );
            console.log("Profile path",path)
            await onCaptchVerify();
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
    };

    const handleVerifyCode = async () =>
    {
        if ( confirmationResult && otp )
        {
            try
            {
                const result = await confirmationResult.confirm( otp );
                const idToken = result.user?.getIdToken();  // Get the ID token
                console.log(idToken)
                setuser( result?.user );
                setLoading( false );
                toast.success( "OTP verified successfully!" );
                //   Send user data to the backend
                const response = await fetch( 'http://localhost:8080/api/verify-phone', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify( { users: result, idToken, name: name, img: profilePic } ),
                } );
                console.log(response)
                if ( response.ok )
                {
                    const data = await response.json();
                    Cookies.set( 'authToken', data.token, { expires: 7 } );
                    dispatch( fetchUserData() );
                    router.push( '/user/profile' );
                }
            } catch ( error )
            {
                console.error( 'Error during code verification:', error );
            }
        }
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
        if ( file )
        {
            setLogo( file );
            const reader = new FileReader();
            reader.onload = ( e ) =>
            {
                // This is just for preview purposes
                setLogoPreview( e.target?.result as string );
            };
            reader.readAsDataURL( file );
        }
    };

    const handleLogoClick = () =>
    {
        fileInputRef.current?.click();
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
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="rounded-lg shadow-xl w-full max-w-[492px] border border-gray-700 overflow-hidden">
                <div className="h-full flex flex-col p-6">
                    <h1 className="text-2xl font-bold text-center text-white mb-6 font-[Qanelas-SemiBold, Helvetica]">LOGIN</h1>
                    <form className="flex-grow flex flex-col justify-between space-y-6">                        <Toaster toastOptions={ { duration: 4000 } } />
                        <div id="recaptcha-container"></div>
                        { user ? (
                            <h2 className="text-center text-white font-medium text-2xl">
                                👍 Login Success
                            </h2>
                        ) : (
                            <div className="w-full h-full flex flex-col gap-4 rounded-lg p-4">

                                { showOTP ? (
                                    <>
                                        <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                            <BsFillShieldLockFill size={ 30 } />
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
                                            value={ otp }
                                            onChange={ ( e ) => setOtp( e.target.value ) }
                                            className="border-2 border-white rounded px-3 py-2 text-black mb-4 w-full"
                                        />
                                        <button
                                            onClick={ handleVerifyCode }
                                            // onClick={onOTPVerify}

                                            className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                        >
                                            { loading && (
                                                <CgSpinner size={ 20 } className="mt-1 animate-spin" />
                                            ) }
                                            <span>Verify OTP</span>
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex   flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
                                            <div className="w-full   sm:w-1/3 flex justify-center sm:block">
                                                <div
                                                    className="bg-gray-700 border border-gray-600 h-28 w-28 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-300 hover:border-blue-500"
                                                    onClick={ handleLogoClick }
                                                >
                                                    { logoPreview ? (
                                                        <img src={ logoPreview } alt="Uploaded logo" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="text-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                            <p className="text-xs text-gray-400 mt-2">Upload Logo</p>
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
                                                        { nameError && <p className="text-xs text-red-500">{ nameError }</p> }
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        value={ name }
                                                        onChange={ ( e ) => setName( e.target.value ) }
                                                        className="mt-1 p-1.5 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500 text-sm"
                                                        required
                                                    />
                                                </div>



                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    value={ ph }
                                                    onChange={ ( e ) => setPh( e.target.value ) }
                                                    placeholder="Enter your phone number"
                                                    className="border-2 border-white rounded px-3 py-2 text-black mb-4 w-full"
                                                />

                                            </div>
                                        </div>
                                        <div className='w-full flex flex-row justify-center items-center m-auto'>
                                            <button
                                                onClick={ onSignup }
                                                className="bg-emerald-600 w-full mx-5 flex  items-center justify-center py-1 text-white rounded"
                                            >
                                                { loading && (
                                                    <CgSpinner size={ 20 } className="mt-1 animate-spin" />
                                                ) }
                                                <span>Send code via SMS</span>
                                            </button>
                                        </div>
                                    </>
                                    ) }
                                    <div className='flex space-x-3'>

                                        <button type="button" className="w-full flex items-center justify-center py-3 bg-white hover:bg-gray-100 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-all duration-300" onClick={ () => signup( "user" ) }>
                                            <svg className="h-6 w-6 mr-2" viewBox="0 0 40 40">
                                                <svg className="h-6 w-6" viewBox="0 0 40 40">
                                                    <path
                                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                                        fill="#FFC107"
                                                    />
                                                    <path
                                                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                                        fill="#FF3D00"
                                                    />
                                                    <path
                                                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                                        fill="#4CAF50"
                                                    />
                                                    <path
                                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                                        fill="#1976D2"
                                                    />
                                                </svg>
                                            </svg>
                                            <span className="text-black font-medium">Sign in as user</span>
                                        </button>
                                        <button type="button" className="w-full flex items-center justify-center py-3 bg-white hover:bg-gray-100 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-all duration-300" onClick={ () => signup( "kols" ) }>
                                            <svg className="h-6 w-6 mr-2" viewBox="0 0 40 40">
                                                <svg className="h-6 w-6" viewBox="0 0 40 40">
                                                    <path
                                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                                        fill="#FFC107"
                                                    />
                                                    <path
                                                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                                        fill="#FF3D00"
                                                    />
                                                    <path
                                                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                                        fill="#4CAF50"
                                                    />
                                                    <path
                                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                                        fill="#1976D2"
                                                    />
                                                </svg>
                                            </svg>
                                            <span className="text-black font-medium">Sign in as Kol</span>
                                        </button>
                                    </div>
                            </div>
                        ) }
                    </form>
                </div>

            </div>


        </div>
    );
};

export default LoginPage;