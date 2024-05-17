import { useState, useEffect} from 'react';
import { uploadVideoAPIWrapper } from '../../../../api/content';
import { notify } from '../../../../utils/notifier';
import { useNavigate } from 'react-router-dom';

const InstructorCreateVideo = () => {
    const [videoTitle, setVideoTitle] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [crscode, setCrscode] = useState('');
  
    const navigate = useNavigate();
  
    const formHandler = async () => {

      try {
        const res = await uploadVideoAPIWrapper({
            crscode:crscode,
            title:videoTitle,
            videoFile:videoFile
        })
        notify('Video successfully uploaded!', 'success');
        setVideoTitle('');
        setVideoFile(null); // Reset video file state

        navigate(`/instructor/course/view?crscode=${crscode}`);
    } catch (error) {
        console.error('Error uploading video:', error);
    }
    };

    const handleFile = (e) => {
        const selectedFile = e.target.files[0];
        setVideoFile(selectedFile);
    }

    useEffect(()=> {
        const url = new URL(window.location.href);
        const crscode = url.searchParams.get('crscode');
        setCrscode(crscode);
    }, [])
  
    return (
      <>
        <p className="text-4xl text-center my-8">Upload Video</p>
        <form className="max-w-4xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex items-center justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input
                onChange={handleFile}
                id="dropzone-file" type="file" className="hidden" accept={'video/mp4'}/>
            </label>
        </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Video Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              value={videoTitle}
              type="text"
              placeholder="Video Title"
              onChange={(e) => setVideoTitle(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={formHandler}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Upload Video
            </button>
          </div>
        </form>
      </>
    );
}

export default InstructorCreateVideo
