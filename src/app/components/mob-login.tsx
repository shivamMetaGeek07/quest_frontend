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
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="rounded-lg shadow-xl w-full max-w-[492px] h-auto sm:h-[291px] border overflow-hidden">
                <div className="h-full flex flex-col p-4 sm:p-6">
                    <h1 className="text-xl sm:text-2xl font-bold text-center text-white mb-4 font-[Qanelas-SemiBold, Helvetica]">LOGIN</h1>
                    <form onSubmit={ handleLogin } className="flex-grow flex flex-col justify-between">
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                            <div className="w-full sm:w-1/3 flex justify-center sm:block">
                                <div
                                    className="bg-black border border-gray-600 h-24 w-24 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden"
                                    onClick={ handleLogoClick }
                                >
                                    { logo ? (
                                        <img src={ logo } alt="Uploaded logo" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-xs text-gray-400 mt-1">Upload Logo</p>
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
                        <div className="relative w-full flex justify-center mt-4">
                            <button
                                type="submit"
                                className={ `w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500` }
                            >
                                Login
                            </button>
                            { !isDisabled && (
                                <div className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-2">
                                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                                </div>
                            ) }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;