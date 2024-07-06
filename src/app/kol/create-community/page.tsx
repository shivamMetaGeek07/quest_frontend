"use client";
import React, { useEffect, useState,useCallback } from "react";
import { createCommunity } from "@/redux/reducer/communitySlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { RootState } from "../../../redux/store";
import { getCommunitySuccess } from "@/redux/reducer/adminCommunitySlice";
import { useRouter } from "next/navigation";
import {useDropzone} from 'react-dropzone'
import { BallTriangle } from "react-loader-spinner";
import axios from "axios";

const CreateCommunity = () =>
{
    const router = useRouter();
    const [ title, setTitle ] = useState<string>( "" );
    const [ description, setDescription ] = useState<string>( "" );
    const [ categories, setCategories ] = useState<string[]>( [] );
    const [ ecosystems, setEcosystems ] = useState<string[]>( [] );
    const [ catisOpen, setCatisOpen ] = useState<boolean>( false );
    const [ ecoisOpen, setEcoisOpen ] = useState<boolean>( false );
    const [file,setFile] = useState<File|null>(null);
    const [loader,setLoader] = useState<boolean>(false);
  
    // Dropzone for file uploading
    const onDrop = useCallback((acceptedFiles: File[]) => {
      setFile(acceptedFiles[0])
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    // const [ canProceed, setCanProceed ] = useState<boolean>( false );
    const dispatch = useDispatch<AppDispatch>();
    const communityData = useSelector( ( state: RootState ) => state.adminCommunity );
    // console.log( communityData );
  
    useEffect( () =>{
      dispatch( getCommunitySuccess() );
    }, [ dispatch ] );

    const getUploadUrl = async (fileName: string) => {
      console.log("getUploadUrl called",fileName);
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/aws/generate-upload-url`, {
          folder: 'CommunityLogo',
          fileName,
        });
        console.log('Upload URL:', response.data.url);
        return response.data.url; 
      } catch (error) {
        console.error('Error getting upload URL:', error);
        throw error;
      }
    };

    const handleUpload = async () => {

      if (!file) return false;
      
      try{
        const uploadUrl = await getUploadUrl(file.name);  // presigned url from server
        console.log('Upload URL:', uploadUrl);

        if(!uploadUrl) return false;

        const res=await axios.put(uploadUrl, file, {
          headers: {
            'Content-Type': file.type,
          },
        });

        if(res.status===200){
          console.log('File uploaded successfully',res);
          return true;  
        }
        else{
          console.log('File upload failed', res);
          return false;
        }
      }
      catch(error){
        console.log('Error uploading file:', error);
        return false;
      };
    };
  
  const handleSubmit = async ( e: React.FormEvent ) =>
  {
      e.preventDefault();
      setLoader(true);

      if ( !file ){
        setLoader(false);
        return alert( "Please upload a community logo" );
      } 

      if(file.type!=='image/jpeg' && file.type!=='image/png' && file.type!=='image/webp' && file.type!=='image/gif' && file.type!=='image/svg'){
         setLoader(false);
         return alert( "Only JPEG, PNG, WEBP, GIF, SVG images are allowed" );
      }

      try
      {
        const res= await handleUpload();     //for handling image upload action on aws
        if(!res) return;

        //path for image on aws
        const path=`https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.amazonaws.com/CommunityLogo/${file.name}`;
        
        const newCommunity = { title, description, logo:path, category: categories, ecosystem: ecosystems };
        console.log("newCommunity",newCommunity);

        const resultAction =await dispatch( createCommunity(newCommunity) );
        if ( createCommunity.fulfilled.match( resultAction ) )
        {
          alert( 'Community created successfully' );

          // Clear form
          setTitle( "" );
          setDescription("");
          setCategories( [] );
          setEcosystems( [] );
          setFile(null);
          setLoader(false);

          router.push('/mycommunities');
        } else
        {
          alert( 'Failed to create community' );
        }
      }
      catch(err){
        console.log("err",err);
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

  const toggleEcosystem = ( ecosystem: any ) =>
  {
    setEcosystems( prevEcosystems =>
      prevEcosystems.includes( ecosystem )
        ? prevEcosystems.filter( c => c !== ecosystem )
        : [ ...prevEcosystems, ecosystem ]
    );
  };

  return (
    <div className="p-6 bg-slate-500 flex items-center justify-center cursor-pointer">
      <div
        // className="fixed top-0 left-0 h-full bg-gradient-to-r from-blue-100 transition-transform duration-300 transform md:translate-x-0 md:w-[45%] w-full"
        style={ { overflowY: "auto" } }
      >
        <div className="relative bg-[#282828] p-4 md:p-10 shadow-xl w-full h-full rounded-lg overflow-y-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Let's create your community together
          </h1>
          <p className="text-neutral-300">
            Our users like to know more about a community before they get
            involved. Please include any information they may need.
          </p>
          <form onSubmit={ handleSubmit }>
            <div className="mb-5 mt-10">
              <label className="block text-white font-semibold">Logo*</label>
              <div className="relative">
                <div {...getRootProps()} className='bg-gray-700 h-20 mt-2 rounded-lg text-white flex justify-center items-center'>
                  <input {...getInputProps()}/>
                    {
                      isDragActive ?
                        <p>Drop the logo here ...</p> :
                        <p>Drag 'n' drop some logo here, or click to select logo</p>
                    }
                </div>
                <div className='mt-2 text-white'>
                  <h2 className="font-bold text-blue-500 py-1 ">{file?.name}</h2>
                </div>
                <p className="text-neutral-300">Recommended size is 256x256px </p>
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-white font-semibold">Title*</label>
              <input
                type="text"
                value={ title }
                placeholder="Name of your community"
                onChange={ ( e ) => setTitle( e.target.value ) }
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-white bg-[#282828]"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-white font-semibold">Description</label>
              <textarea
                placeholder="Description"
                value={ description }
                onChange={ ( e ) => setDescription( e.target.value ) }
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-white bg-[#282828]"
                rows={ 4 }
              />
            </div>

            {/* Category section */ }
            <div className="mb-5">
              <label className="block text-white font-semibold">
                Categories (Select multiple)*
              </label>
              <button
                onClick={ ( e ) => { setCatisOpen( !catisOpen ); e.preventDefault(); } }
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 text-white bg-[#282828] text-left"
              >
                { categories.length > 0 ? categories.join( ', ' ) : 'Select categories' }
              </button>

              { catisOpen && (
                <div className="absolute z-10 w-full mt-1 bg-[#282828] border text-white border-gray-700 rounded-lg shadow-lg">
                  { communityData?.categories?.map( ( category ) => (
                    <div
                      key={ category }
                      onClick={ () => toggleCategory( category ) }
                      className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700"
                    >
                      <span className={ `flex-grow ${ categories.includes( category ) ? 'text-yellow-400' : 'text-white' }` }>
                        { category }
                      </span>
                      { categories.includes( category ) && (
                        <svg className="w-5 h-5 text-green-500" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">✅</path>
                        </svg>
                      ) }
                    </div>
                  ) ) }
                </div>
              ) }
            </div>

            {/* Ecosystem section */ }
            <div className="mb-5">
              <label className="block text-white font-semibold">
                EcoSystem (Select multiple)*
              </label>
              <button
                onClick={ ( e ) => { setEcoisOpen( !ecoisOpen ); e.preventDefault(); } }
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 text-white bg-[#282828] text-left"
              >
                { ecosystems.length > 0 ? ecosystems.join( ', ' ) : 'Select ecosystems' }
              </button>

              { ecoisOpen && (
                <div className="absolute z-10 w-full mt-1 bg-[#282828] border text-white border-gray-700 rounded-lg shadow-lg">
                  { communityData?.ecosystems?.map( ( eco ) => (
                    <div
                      key={ eco }
                      onClick={ () => toggleEcosystem( eco ) }
                      className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700"
                    >
                      <span className={ `flex-grow ${ ecosystems.includes( eco ) ? 'text-yellow-400' : 'text-white' }` }>
                        { eco }
                      </span>
                      { ecosystems.includes( eco ) && (
                        <svg className="w-5 h-5 text-green-500" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">✅</path>
                        </svg>
                      ) }
                    </div>
                  ) ) }
                </div>
              ) }
            </div>

            <div className="flex justify-start mt-6 space-x-4">
              {!loader? (
                <>
                  <button
                type="button"
                onClick={ () => window.history.back() }
                className="text-white py-2 px-4 bg-gray-700 rounded-lg transition-colors duration-300 shadow-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white bg-gray-900 shadow-sm hover:bg-slate-500 px-10 py-4 rounded-lg"
              >
                Create community
              </button>
                </>
              
              )
              :<BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              />
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );

};

export default CreateCommunity;;