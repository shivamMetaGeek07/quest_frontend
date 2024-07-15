// pages/login.tsx
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import PhoneInput from 'react-phone-number-input/input';
import { isPossiblePhoneNumber } from 'react-phone-number-input';

const LoginPage: React.FC = () =>
{
    const [ name, setName ] = useState( '' );
    const [ phoneNumber, setPhoneNumber ] = useState( '' );
    const [ nameError, setNameError ] = useState( '' );
    const [ phoneError, setPhoneError ] = useState( '' );
    const [ logo, setLogo ] = useState<string | null>( null );
    const fileInputRef = useRef<HTMLInputElement>( null );
    const isDisabled = !!nameError || !!phoneError;

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
            const reader = new FileReader();
            reader.onload = ( e ) =>
            {
                setLogo( e.target?.result as string );
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

    const signup = async () =>{
         window.location.href = `${ process.env.NEXT_PUBLIC_SERVER_URL }/auth/google/kol`;
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-[#15151557] glass_effect">
            <div className="rounded-lg shadow-xl w-full max-w-[492px] border border-gray-700 overflow-hidden bg-gray-900">
                <div className="h-full flex flex-col p-6">
                    <h1 className="text-2xl font-bold text-center text-white mb-6 font-[Qanelas-SemiBold, Helvetica]">LOGIN</h1>
                    <form onSubmit={ handleLogin } className="flex-grow flex flex-col justify-between space-y-6">
                        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
                            <div className="w-full sm:w-1/3 flex justify-center sm:block">
                                <div
                                    className="bg-black border border-gray-600 h-28 w-28 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-300 hover:border-blue-500"
                                    onClick={ handleLogoClick }
                                >
                                    { logo ? (
                                        <img src={ logo } alt="Uploaded logo" className="w-full h-full object-cover" />
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
                            <div className="w-full sm:w-2/3 space-y-3">
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
                                        className="mt-1 p-1.5 block w-full rounded-md bg-black border border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500 text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-300 font-[Helvetica]">MOBILE NUMBER *</label>
                                        { phoneError && <p className="text-xs text-red-500">Enter a valid Number</p> }
                                    </div>
                                    <div className="mt-1 flex rounded-md shadow-sm gap-1">
                                        <span className="inline-flex items-center px-2 rounded-l-md border border-r-0 border-gray-600 bg-black text-gray-300 text-sm">
                                            +91
                                        </span>
                                        <PhoneInput
                                            country="IN"
                                            value={ phoneNumber }
                                            onChange={ ( value ) => setPhoneNumber( value || '' ) }
                                            className="flex-1 block w-full px-2 py-1.5 rounded-r-md bg-black border border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500 text-sm"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button
                                type="submit"
                                className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                            >
                                Login
                            </button>
                            <button type="button" className="w-full flex items-center justify-center py-3 bg-white hover:bg-gray-100 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-all duration-300" onClick={ signup }>
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
                                <span className="text-black font-medium">Sign in with Google</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;