import { useEffect, useState } from 'react';
import { createNoteAPIWrapper } from '../../../../api/content';
import { notify } from '../../../../utils/notifier';
import { useNavigate } from 'react-router-dom';

const InstructorCreateNote = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteExplanation, setNoteExplanation] = useState('');
  const [crscode, setCrscode] = useState('');

  const navigate = useNavigate();

  const formHandler = async (payload) => {
    const res = await createNoteAPIWrapper(payload);
    notify(res.data.status, 'success');
    setNoteTitle('');
    setNoteExplanation('');

    navigate(`/instructor/course/view?crscode=${crscode}`)
  };
  useEffect(()=> {
      const url = new URL(window.location.href);
      const crscode = url.searchParams.get('crscode');
      setCrscode(crscode);
  }, [])

  return (
    <>
      <p className="text-4xl text-center my-8">Create Note</p>
      <form className="max-w-4xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="crsname"
          >
            Note title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="crsname"
            value={noteTitle}
            type="text"
            placeholder="Enter the title of the note"
            onChange={(e) => setNoteTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Note explanation
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            value={noteExplanation}
            placeholder="Provide an explanation for the note"
            rows={8}
            onChange={(e) => setNoteExplanation(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
          onClick={() =>
            formHandler({
              crscode: crscode,
              title: noteTitle,
              explanation: noteExplanation,
            })
          }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Create note
          </button>
        </div>
      </form>
    </>
  );
};

export default InstructorCreateNote;
