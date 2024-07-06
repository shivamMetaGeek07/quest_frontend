"use client";
import { useEffect, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { BallTriangle } from "react-loader-spinner";

const AddFeedPage = () =>
{
  const router = useRouter();
  const [ activeTab, setActiveTab ] = useState( 'create' );
  const [ formData, setFormData ] = useState( {
    title: '',
    description: '',
    author: '',
    summary: ''
  } );
  const [ file, setFile ] = useState<File | null>( null );
  // for update the file
  const [ updateFile, setUpdateFile ] = useState<File | null>( null );
  const [ loader, setLoader ] = useState( false );
  const [ updateFormData, setUpdateFormData ] = useState( {
    id: '',
    title: '',
    description: '',
    author: '',
    summary: ''
  } );

  const [ deleteFormData, setDeleteFormData ] = useState( {
    id: ''
  } );


  //dropzone for file uploading
  const onDrop = useCallback( ( acceptedFiles: File[] ) =>
  {
    setFile( acceptedFiles[ 0 ] );
  }, [] );
  const { getRootProps, getInputProps, isDragActive } = useDropzone( { onDrop } );

  // this dropzone is for updating the url
  const onUpdateDrop = useCallback( ( acceptedFiles: File[] ) =>
  {
    setUpdateFile( acceptedFiles[ 0 ] );
  }, [] );

  const { getRootProps: getUpdateRootProps, getInputProps: getUpdateInputProps, isDragActive: isUpdateDragActive } = useDropzone( { onDrop: onUpdateDrop } );



  const getUploadUrl = async ( fileName: string ) =>
  {
    try
    {
      const response = await axios.post( `${ process.env.NEXT_PUBLIC_SERVER_URL }/aws/generate-upload-url`, {
        folder: 'feedImage',
        fileName,
      } );
      console.log( 'Upload URL:', response.data.url );
      return response.data.url;
    } catch ( error )
    {
      console.error( 'Error getting upload URL:', error );
    }

  };

  // const getImageUrl=async (fileName: string) => {
  //   try {
  //       const key = `feedImage/${fileName}`;
  //     const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/aws/generate-get-url`, {
  //       params: {
  //         key
  //       }
  //     });
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       imageUrl: response.data.url
  //     }));
  //     console.log('Image URL:', response.data.url);
  //   } catch (error) {
  //     console.error('Error getting image URL:', error);
  //   }
  // };

  const handleUpload = async () =>
  {
    if ( !file ) return;

    try
    {
      const uploadUrl = await getUploadUrl( file.name );
      const response = await axios.put( uploadUrl, file, {
        headers: {
          'Content-Type': file.type,
        },
      } );
      if ( response.status === 200 )
      {
        console.log( 'File uploaded successfully' );
        return true;
      }
      else
      {
        console.log( 'File upload failed', response );
        return false;
      }
    } catch ( error )
    {
      console.error( 'Error uploading file:', error );
      return false;
    }
  };


  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) =>
  {
    const { name, value } = e.target;
    // console.log( e.target );
    setFormData( ( prevData ) => ( {
      ...prevData,
      [ name ]: value
    } ) );

    // console.log( formData );
  };

  // submit for creating the feed
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
    const token = localStorage.getItem( 'token' );
    if ( token )
    {

      try
      {
        const res = await handleUpload();

        if ( res )
        {
          if ( !file ) return;
          const path = `https://${ process.env.NEXT_PUBLIC_S3_BUCKET_NAME }.s3.amazonaws.com/feedImage/${ file.name }`;

          const newfeed = {
            title: formData.title,
            description: formData.description,
            author: formData.author,
            imageUrl: path,
            summary: formData.summary
          };

          //add feed
          const response = await axios.post(
            `${ process.env.NEXT_PUBLIC_SERVER_URL }/admin/add-feed`,
            {
              ...newfeed
            },
            { headers: { Authorization: `Bearer ${ token }` } }
          );
          setFormData( { title: '', description: '', author: '', summary: '' } );
          setFile( null );
          setLoader( false );
          alert( 'Blog feed created successfully' );
        }
        // router.push('/dashboard');
      } catch ( error )
      {
        console.error( 'Error creating blog feed:', error );
      }
    }
    else
    {
      console.error( 'Token not found' );
      router.push( '/admin/login' );
    }
  };

  const handleUpdateUpload = async () =>
  {
    if ( !updateFile ) return;

    try
    {
      const uploadUrl = await getUploadUrl( updateFile.name );
      const response = await axios.put( uploadUrl, file, {
        headers: {
          'Content-Type': updateFile.type,
        },
      } );
      if ( response.status === 200 )
      {
        console.log( 'File uploaded successfully' );
        return true;
      }
      else
      {
        console.log( 'File upload failed', response );
        return false;
      }
    } catch ( error )
    {
      console.error( 'Error uploading file:', error );
      return false;
    }
  };

  // submit for updating the feed
  const handleUpdateSubmit = async ( e: React.FormEvent ) =>
  {
    e.preventDefault();
    setLoader( true );

    const token = localStorage.getItem( 'token' );
    if ( !token )
    {
      console.error( 'Token not found' );
      router.push( '/admin/login' );
      return;
    }

    try
    {
      let updatedFeed: any = {
        id: updateFormData.id,
      };

      // Only include fields that have been filled
      if ( updateFormData.title ) updatedFeed.title = updateFormData.title;
      if ( updateFormData.description ) updatedFeed.description = updateFormData.description;
      if ( updateFormData.author ) updatedFeed.author = updateFormData.author;
      if ( updateFormData.summary ) updatedFeed.summary = updateFormData.summary;

      if ( updateFile )
      {
        const res = await handleUpdateUpload();
        if ( res )
        {
          const path = `https://${ process.env.NEXT_PUBLIC_S3_BUCKET_NAME }.s3.amazonaws.com/feedImage/${ updateFile.name }`;
          updatedFeed.imageUrl = path;
        } else
        {
          setLoader( false );
          alert( "Failed to upload new image" );
          return;
        }
      }

      const response = await axios.patch(
        `${ process.env.NEXT_PUBLIC_SERVER_URL }/admin/update-feed/${ updateFormData.id }`,
        updatedFeed,
        { headers: { Authorization: `Bearer ${ token }` } }
      );

      console.log( "response :-", response );

      setUpdateFormData( { id: '', title: '', description: '', author: '', summary: '' } );
      setUpdateFile( null );
      setLoader( false );
      alert( 'Blog feed updated successfully' );
    } catch ( error: any )
    {
      console.error( 'Error updating blog feed:', error );
      setLoader( false );
      alert( `Error updating blog feed: ${ error.response?.data?.message || error.message }` );
    }
  };


  // submit for deleting the feed by id
  const handleDeleteSubmit = async ( e: React.FormEvent ) =>
  {
    e.preventDefault();
    setLoader( true );
    // const response = await axios( `${ process.env.NEXT_PUBLIC_SERVER_URL }/feed` )
    // console.log(response)
    const token = localStorage.getItem( 'token' );
    if ( !token )
    {
      console.error( 'Token not found' );
      router.push( '/admin/login' );
      return;
    }

    try
    {
      const response = await axios.delete( `${ process.env.NEXT_PUBLIC_SERVER_URL }/admin/delete-feed/${ deleteFormData.id }`, { headers: { Authorization: `Bearer ${ token }` } } );
      console.log( "response :-", response );
      setLoader( false );
      alert( 'Blog feed deleted successfully' );
      setDeleteFormData( { id: '' } );
    } catch ( error: any )
    {
      console.error( 'Error deleting blog feed:', error );
      setLoader( false );
      alert( `Error deleting blog feed: ${ error.response?.data?.message || error.message }` );
    }
  };

  // this is tab section
  const TabNavigation = () => (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 ">
      <ul className="flex flex-wrap -mb-px justify-evenly bg-yellow-50">
        <li className="mr-2">
          <a

            className={ `inline-block p-4 border-b-2 rounded-t-lg ${ activeTab === 'create'
              ? 'text-white text-base bg-gray-900 w-24 mt-2 dark:text-white border-gray-900'
              : 'hover:text-white text-base hover:bg-gray-900 w-24 mt-2 hover:border-gray-900'
              }` }
            onClick={ () => setActiveTab( 'create' ) }
          >
            Create
          </a>
        </li>
        <li className="mr-2">
          <a

            className={ `inline-block p-4 border-b-2 rounded-t-lg ${ activeTab === 'update'
              ? 'text-white text-base bg-gray-900 w-24 mt-2 dark:text-white border-gray-900'
              : 'hover:text-white text-base hover:bg-gray-900 w-24 mt-2 hover:border-gray-900'
              }` }
            onClick={ () => setActiveTab( 'update' ) }
          >
            Update
          </a>
        </li>
        <li className="mr-2">
          <a

            className={ `inline-block p-4 border-b-2 rounded-t-lg ${ activeTab === 'delete'
              ? 'text-white text-base bg-gray-900 w-24 mt-2 dark:text-white border-gray-900'
              : 'hover:text-white text-base hover:bg-gray-900 w-24 mt-2 hover:border-gray-900'
              }` }
            onClick={ () => setActiveTab( 'delete' ) }
          >
            Delete
          </a>
        </li >
      </ul >
    </div >
  );

  return (
    <>
      <div className="bg-gray-950 mx-auto w-[60%]">
        <TabNavigation />
        { activeTab === 'create' && (
          <form
            className="p-8 rounded-lg"
            onSubmit={ handleSubmit }
          >
            <div className="flex justify-center mb-6">
              < h2 className="text-2xl font-bold text-white">Add Feed</h2>
            </div>

            <div className="mb-5">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-white "
              >
                Title
              </label>
              <input name="title" type="text" id="title" value={ formData.title } onChange={ handleChange } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" required />
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-white "
              >
                Description
              </label>
              <textarea
                id="description"
                rows={ 4 }
                name="description"
                value={ formData.description }
                onChange={ handleChange }
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here"
                required
              ></textarea>
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
              <div { ...getRootProps() } className='bg-gray-700 h-20 rounded-lg text-white flex justify-center items-center'>
                <input { ...getInputProps() } />
                {
                  isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                }
              </div>
              <div className='mt-2 text-white'>
                <h2>{ file?.name }</h2>
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor='author' className="block mb-2 text-sm font-medium text-white ">Author</label>
              <input
                type="text"
                id="author"
                value={ formData.author }
                onChange={ handleChange }
                name="author"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="summary"
                className="block mb-2 text-sm font-medium text-white "
              >
                summary
              </label>
              <textarea
                id="summary"
                rows={ 4 }
                name='summary'
                value={ formData.summary }
                onChange={ handleChange }
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here"
                required
              ></textarea>
            </div>
            {
              !loader ? ( <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button> ) :
                <BallTriangle />
            }

          </form>
        ) }

        {/* // Update form */ }
        { activeTab === 'update' && (
          <form
            className="p-8 rounded-lg"
            onSubmit={ handleUpdateSubmit }
          >
            <div className="flex justify-center mb-6">
              < h2 className="text-2xl font-bold text-white">Update the feed Feed</h2>
            </div>

            <div className="mb-5">
              <label
                htmlFor="update-id"
                className="block mb-2 text-sm font-medium text-white"
              >
                Id
              </label>
              <input
                name="id"
                type="text"
                id="update-id"
                value={ updateFormData.id }
                onChange={ ( e ) => setUpdateFormData( { ...updateFormData, id: e.target.value } ) }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="id of the feed to update"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-white "
              >
                Title
              </label>
              <input name="title" type="text" id="title" value={ updateFormData.title } onChange={ ( e ) => setUpdateFormData( { ...updateFormData, title: e.target.value } ) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" />
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-white "
              >
                Description
              </label>
              <textarea
                id="description"
                rows={ 4 }
                name="description"
                value={ updateFormData.description }
                onChange={ ( e ) => setUpdateFormData( { ...updateFormData, description: e.target.value } ) }
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here"

              ></textarea>
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="update_file_input">Update Image (optional)</label>
              <div { ...getUpdateRootProps() } className='bg-gray-700 h-20 rounded-lg text-white flex justify-center items-center'>
                <input { ...getUpdateInputProps() } />
                {
                  isUpdateDragActive ?
                    <p>Drop the file here ...</p> :
                    <p>Drag 'n' drop a new image here, or click to select a file</p>
                }
              </div>
              <div className='mt-2 text-white'>
                <h2>{ updateFile?.name || 'No new file selected' }</h2>
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor='author' className="block mb-2 text-sm font-medium text-white ">Author</label>
              <input
                type="text"
                id="author"
                value={ updateFormData.author }
                onChange={ ( e ) => setUpdateFormData( { ...updateFormData, author: e.target.value } ) }
                name="author"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="summary"
                className="block mb-2 text-sm font-medium text-white "
              >
                summary
              </label>
              <textarea
                id="summary"
                rows={ 4 }
                name='summary'
                value={ updateFormData.summary }
                onChange={ ( e ) => setUpdateFormData( { ...updateFormData, summary: e.target.value } ) }
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here"

              ></textarea>
            </div>
            {
              !loader ? ( <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button> ) :
                <BallTriangle />
            }

          </form>
        ) }
        { activeTab === 'delete' && (
          // Delete form
          <form className="p-8 rounded-lg" onSubmit={ handleDeleteSubmit }>
            <div className="mb-5">
              <label htmlFor="delete-id" className="block mb-2 text-sm font-medium text-white">
                Feed ID to Delete
              </label>
              <input
                type="text"
                id="delete-id"
                name="id"
                value={ deleteFormData.id }
                onChange={ ( e ) => setDeleteFormData( { id: e.target.value } ) }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              Delete Feed
            </button>
          </form>
        ) }
      </div>
    </>
  );
};

export default AddFeedPage;
