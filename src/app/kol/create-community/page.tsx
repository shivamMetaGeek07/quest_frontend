"use client";
import React, { useEffect, useState, useCallback } from "react";
import { createCommunity } from "@/redux/reducer/communitySlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { RootState } from "../../../redux/store";
import { getCommunitySuccess } from "@/redux/reducer/adminCommunitySlice";
import { useRouter } from "next/navigation";
import { useDropzone } from 'react-dropzone';
import { BallTriangle } from "react-loader-spinner";
import axios from "axios";
import { Select, SelectItem } from "@nextui-org/react";

const CreateCommunity = () =>
{

  const router = useRouter();
  const [ title, setTitle ] = useState<string>( "" );
  const [ description, setDescription ] = useState<string>( "" );
  const [ categories, setCategories ] = useState<string[]>( [] );
  const [ ecosystems, setEcosystems ] = useState<string>( "" );
  const [ catisOpen, setCatisOpen ] = useState<boolean>( false );
  const [ file, setFile ] = useState<File | null>( null );
  const [ loader, setLoader ] = useState<boolean>( false );
  const [ isClient, setIsClient ] = useState( false );
  const [ isBlockchainRelated, setIsBlockchainRelated ] = useState( false );


  // Dropzone for file uploading
  const onDrop = useCallback( ( acceptedFiles: File[] ) =>
  {
    setFile( acceptedFiles[ 0 ] );
  }, [] );
  const { getRootProps, getInputProps, isDragActive } = useDropzone( { onDrop } );

  // const [ canProceed, setCanProceed ] = useState<boolean>( false );
  const dispatch = useDispatch<AppDispatch>();
  const communityData = useSelector( ( state: RootState ) => state.adminCommunity );
  const KolId = useSelector( ( state: any ) => state?.login?.user?._id );
  // console.log( communityData );


  const getUploadUrl = async ( fileName: string ) =>
  {
    // console.log("getUploadUrl called",fileName);
    try
    {
      const response = await axios.post( `${ process.env.NEXT_PUBLIC_SERVER_URL }/aws/generate-upload-url`, {
        folder: 'CommunityLogo',
        fileName,
      } );
      // console.log('Upload URL:', response.data.url);
      return response.data.url;
    } catch ( error )
    {
      console.error( 'Error getting upload URL:', error );
      throw error;
    }
  };

  const handleUpload = async () =>
  {

    if ( !file ) return false;

    try
    {
      const uploadUrl = await getUploadUrl( file.name );  // presigned url from server
      // console.log('Upload URL:', uploadUrl);

      if ( !uploadUrl ) return false;

      const res = await axios.put( uploadUrl, file, {
        headers: {
          'Content-Type': file.type,
        },
      } );

      if ( res.status === 200 )
      {
        console.log( 'File uploaded successfully', res );
        return true;
      }
      else
      {
        console.log( 'File upload failed', res );
        return false;
      }
    }
    catch ( error )
    {
      console.log( 'Error uploading file:', error );
      return false;
    };
  };

  const handleSubmit = async ( e: React.FormEvent ) =>
  {
    e.preventDefault();
    setLoader( true );

    if ( !file )
    {
      setLoader( false );
      return alert( "Please upload a community logo" );
    }

    if ( file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/webp' && file.type !== 'image/gif' && file.type !== 'image/svg' )
    {
      setLoader( false );
      return alert( "Only JPEG, PNG, WEBP, GIF, SVG images are allowed" );
    }

    try
    {
      const res = await handleUpload();     //for handling image upload action on aws
      if ( !res ) return;

      //path for image on aws
      const path = `https://${ process.env.NEXT_PUBLIC_S3_BUCKET_NAME }.s3.amazonaws.com/CommunityLogo/${ file.name }`;

      const newCommunity = { title, description, logo: path, category: categories, ecosystem: ecosystems, creator: KolId };
      // console.log("newCommunity",newCommunity);

      const resultAction = await dispatch( createCommunity( newCommunity ) );
      if ( createCommunity.fulfilled.match( resultAction ) )
      {
        alert( 'Community created successfully' );

        // Clear form
        setTitle( "" );
        setDescription( "" );
        setCategories( [] );
        setEcosystems( "" );
        setFile( null );
        setLoader( false );

        router.push( '/kol/my-community' );
      } else
      {
        alert( 'Failed to create community' );
      }
    }
    catch ( err )
    {
      console.log( "err", err );
    }
  };

  const toggleCategory = ( category: any ) =>
  {
    setCategories( prevCategories =>
      prevCategories.includes( category )
        ? prevCategories.filter( c => c !== category )
        : [ ...prevCategories, category ]
    );
  };

  useEffect( () =>
  {
    setIsClient( true );
    dispatch( getCommunitySuccess() );
  }, [ dispatch ] );

  if ( !isClient ) return (
    <div className="flex justify-center h-screen items-center">
      <BallTriangle />
    </div>
  );

  console.log( categories )


  // return (
  //   <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 font-[ProFontWindow]">
  //     <div className="bg-black border rounded-lg shadow-xl w-full max-w-2xl p-6 md:p-8">
  //       <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">LET'S CREATE YOUR COMMUNITY</h1>
  //       <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">Our users like to know more about a community before they get involved. Please include any information they may need.</p>

  //       <form onSubmit={ handleSubmit } className="space-y-4 md:space-y-6">
  //         <div className="flex flex-col md:flex-row md:space-x-4">
  //           <div className="w-full md:w-1/5 mb-4 md:mb-0">
  //             <div className="bg-black border h-28 w-28 rounded-lg flex items-center justify-center cursor-pointer mx-auto md:mx-0">
  //               <div { ...getRootProps() } className="text-center">
  //                 <input { ...getInputProps() } />
  //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  //                 </svg>
  //                 <p className="text-xs text-gray-400 mt-2">Upload Logo</p>
  //               </div>
  //             </div>
  //             <div className='mt-2 text-white text-center md:text-left'>
  //               <h2 className="font-bold text-blue-500 py-1 text-sm">{ file?.name }</h2>
  //             </div>
  //           </div>

  //           <div className="w-full md:w-4/5">
  //             <label className="block text-white font-semibold mb-1 text-sm">DESCRIPTION</label>
  //             <textarea
  //               placeholder="DESC..."
  //               value={ description }
  //               onChange={ ( e ) => setDescription( e.target.value ) }
  //               className="w-full px-3 py-2 bg-black border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
  //               rows={ 3 }
  //             />
  //           </div>
  //         </div>

  //         <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
  //           <div className="mb-4 md:mb-0 md:w-1/3">
  //             <h1 className="text-white font-normal mb-1 text-sm">NAME</h1>
  //             <input
  //               type="text"
  //               value={ title }
  //               onChange={ ( e ) => setTitle( e.target.value ) }
  //               className="px-3 py-2 bg-black border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-28 text-sm"
  //               required
  //             />
  //           </div>

  //           <div className="flex items-center justify-between md:justify-end md:flex-1">
  //             <span className="text-white text-xs uppercase mr-2 md:mr-4">Is your project blockchain related?</span>
  //             <div className="flex">
  //               <button
  //                 type="button"
  //                 onClick={ () => setIsBlockchainRelated( true ) }
  //                 className="relative w-16 h-10 group"
  //               >
  //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 45" className="w-full h-full">
  //                   <path d="M23 22.5L0.5 45H45.5L68 22.5V0H45.5H23V22.5Z" fill={ isBlockchainRelated ? "url(#paint0_linear_204_5276)" : "#111111" } />
  //                   <path d="M23.3536 22.8536L23.5 22.7071V22.5V0.5H45.5H67.5V22.2929L45.2929 44.5H1.70711L23.3536 22.8536Z" stroke="white" strokeOpacity="0.1" />
  //                   <defs>
  //                     <linearGradient id="paint0_linear_204_5276" x1="65" y1="-5.04653e-06" x2="26" y2="34.5" gradientUnits="userSpaceOnUse">
  //                       <stop stopColor="#FA00FF" />
  //                       <stop offset="1" stopColor="#960099" stopOpacity="0" />
  //                     </linearGradient>
  //                   </defs>
  //                 </svg>
  //                 <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
  //                   YES
  //                 </span>
  //               </button>

  //               <button
  //                 type="button"
  //                 onClick={ () => setIsBlockchainRelated( false ) }
  //                 className="relative w-16 h-10 group -ml-1"
  //               >
  //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 45" className="w-full h-full">
  //                   <path d="M23 22.5L0.5 45H45.5L68 22.5V0H45.5H23V22.5Z" fill={ !isBlockchainRelated ? "url(#paint0_linear_204_5276)" : "#111111" } />
  //                   <path d="M23.3536 22.8536L23.5 22.7071V22.5V0.5H45.5H67.5V22.2929L45.2929 44.5H1.70711L23.3536 22.8536Z" stroke="white" strokeOpacity="0.1" />
  //                   <defs>
  //                     <linearGradient id="paint0_linear_204_5276" x1="65.5" y1="-5.04653e-06" x2="26" y2="34.5" gradientUnits="userSpaceOnUse">
  //                       <stop stopColor="#FA00FF" />
  //                       <stop offset="1" stopColor="#960099" stopOpacity="0" />
  //                     </linearGradient>
  //                   </defs>
  //                 </svg>
  //                 <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
  //                   NO
  //                 </span>
  //               </button>
  //             </div>
  //           </div>
  //         </div>

        


  //         { isBlockchainRelated && (
  //           <div className="flex flex-col md:flex-row md:space-x-4 bg-black text-white">
  //             <div className="md:w-1/2 mb-4 md:mb-0">
  //               <label className="block text-white font-semibold mb-1 text-sm">
  //                 Categories (Select multiple)*
  //               </label>
  //               <Select
  //                 placeholder="Select Categories"
  //                 selectionMode="multiple"
  //                 onChange={ ( e ) => setCategories( Array.from( e.target.value ) ) }
  //                 className="w-full border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 text-white bg-black text-sm"
  //               >
  //                 { communityData?.categories?.map( ( category ) => (
  //                   <SelectItem key={ category } value={ category } className="bg-black text-white">
  //                     { category }
  //                   </SelectItem>
  //                 ) ) }
  //               </Select>
  //             </div>
  //             <div className="md:w-1/2">
  //               <label className="block text-white font-semibold mb-1 text-sm">Ecosystem</label>
  //               <Select
  //                 placeholder="Select Ecosystem"
  //                 selectionMode="single"
  //                 onChange={ ( e ) => setEcosystems( e.target.value ) }
  //                 className="w-full border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 text-white bg-black text-sm"
  //               >
  //                 { communityData?.ecosystems?.map( ( ecosystem ) => (
  //                   <SelectItem key={ ecosystem } value={ ecosystem } className="bg-black text-white">
  //                     { ecosystem }
  //                   </SelectItem>
  //                 ) ) }
  //               </Select>
  //             </div>
  //           </div>
  //         ) }

  //         <div className="flex justify-end mt-6">
  //           { !loader ? (
  //             <button
  //               type="submit"
  //               className="text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors duration-300 text-sm"
  //             >
  //               Create community
  //             </button>
  //           ) : (
  //             <BallTriangle
  //               height={ 40 }
  //               width={ 40 }
  //               radius={ 5 }
  //               color="#8B5CF6"
  //               ariaLabel="ball-triangle-loading"
  //               visible={ true }
  //             />
  //           ) }
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );


  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 font-[ProFontWindow] text-white">
      <div className="bg-black border border-gray-800 rounded-lg shadow-xl w-full max-w-2xl p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">LET'S CREATE YOUR COMMUNITY</h1>
        <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">Our users like to know more about a community before they get involved. Please include any information they may need.</p>

        <form onSubmit={ handleSubmit } className="space-y-4 md:space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full md:w-1/5 mb-4 md:mb-0">
              <div className="bg-black border border-gray-800 h-28 w-28 rounded-lg flex items-center justify-center cursor-pointer mx-auto md:mx-0">
                <div { ...getRootProps() } className="text-center">
                  <input { ...getInputProps() } />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs text-gray-400 mt-2">Upload Logo</p>
                </div>
              </div>
              <div className='mt-2 text-center md:text-left'>
                <h2 className="font-bold text-blue-500 py-1 text-sm">{ file?.name }</h2>
              </div>
            </div>

            <div className="w-full md:w-4/5">
              <label className="block font-semibold mb-1 text-sm">DESCRIPTION</label>
              <textarea
                placeholder="DESC..."
                value={ description }
                onChange={ ( e ) => setDescription( e.target.value ) }
                className="w-full px-3 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                rows={ 3 }
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <div className="mb-4 md:mb-0 md:w-1/3">
              <h1 className="font-normal mb-1 text-sm">NAME</h1>
              <input
                type="text"
                value={ title }
                onChange={ ( e ) => setTitle( e.target.value ) }
                className="px-3 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-28 text-sm"
                required
              />
            </div>

            <div className="flex items-center justify-between md:justify-end md:flex-1">
              <span className="text-xs uppercase mr-2 md:mr-4">Is your project blockchain related?</span>
              <div className="flex">
                <button
                  type="button"
                  onClick={ () => setIsBlockchainRelated( true ) }
                  className="relative w-16 h-10 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 45" className="w-full h-full">
                    <path d="M23 22.5L0.5 45H45.5L68 22.5V0H45.5H23V22.5Z" fill={ isBlockchainRelated ? "url(#paint0_linear_204_5276)" : "#111111" } />
                    <path d="M23.3536 22.8536L23.5 22.7071V22.5V0.5H45.5H67.5V22.2929L45.2929 44.5H1.70711L23.3536 22.8536Z" stroke="white" strokeOpacity="0.1" />
                    <defs>
                      <linearGradient id="paint0_linear_204_5276" x1="65" y1="-5.04653e-06" x2="26" y2="34.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FA00FF" />
                        <stop offset="1" stopColor="#960099" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center font-bold text-xs">
                    YES
                  </span>
                </button>

                <button
                  type="button"
                  onClick={ () => setIsBlockchainRelated( false ) }
                  className="relative w-16 h-10 group -ml-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 45" className="w-full h-full">
                    <path d="M23 22.5L0.5 45H45.5L68 22.5V0H45.5H23V22.5Z" fill={ !isBlockchainRelated ? "url(#paint0_linear_204_5276)" : "#111111" } />
                    <path d="M23.3536 22.8536L23.5 22.7071V22.5V0.5H45.5H67.5V22.2929L45.2929 44.5H1.70711L23.3536 22.8536Z" stroke="white" strokeOpacity="0.1" />
                    <defs>
                      <linearGradient id="paint0_linear_204_5276" x1="65.5" y1="-5.04653e-06" x2="26" y2="34.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FA00FF" />
                        <stop offset="1" stopColor="#960099" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center font-bold text-xs">
                    NO
                  </span>
                </button>
              </div>
            </div>
          </div>

          { isBlockchainRelated && (
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <label className="block font-semibold mb-1 text-sm">
                  Categories (Select multiple)*
                </label>
                <Select
                  placeholder="Select Categories"
                  selectionMode="multiple"
                  onChange={ ( e ) => setCategories( Array.from( e.target.value ) ) }
                  className="w-full border border-gray-800 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 bg-black text-sm"
                >
                  { communityData?.categories?.map( ( category ) => (
                    <SelectItem key={ category } value={ category } className="bg-black text-white">
                      { category }
                    </SelectItem>
                  ) ) }
                </Select>
              </div>
              <div className="md:w-1/2">
                <label className="block font-semibold mb-1 text-sm">Ecosystem</label>
                <Select
                  placeholder="Select Ecosystem"
                  selectionMode="single"
                  onChange={ ( e ) => setEcosystems( e.target.value ) }
                  className="w-full border border-gray-800 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 bg-black text-sm"
                >
                  { communityData?.ecosystems?.map( ( ecosystem ) => (
                    <SelectItem key={ ecosystem } value={ ecosystem } className="bg-black text-white">
                      { ecosystem }
                    </SelectItem>
                  ) ) }
                </Select>
              </div>
            </div>
          ) }

          <div className="flex justify-end mt-6">
            { !loader ? (
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors duration-300 text-sm"
              >
                Create community
              </button>
            ) : (
              <BallTriangle
                height={ 40 }
                width={ 40 }
                radius={ 5 }
                color="#8B5CF6"
                ariaLabel="ball-triangle-loading"
                visible={ true }
              />
            ) }
          </div>
        </form>
      </div>
    </div>
  );

};

export default CreateCommunity;;