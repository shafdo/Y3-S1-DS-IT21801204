import { courseApi } from '.';

export const createNoteAPIWrapper = async ({
    crscode,
    title,
    explanation,
  }) => {
    return await courseApi.post('/content/note/add', { crscode,title,explanation, });
  };

  export const getNoteByIdAPIWrapper = async (notecode) => {
    return await courseApi.get(`/content/note/add/${notecode}`);
  };
  
  export const getAllNotesAPIWrapper = async (crscode) => {
    return await courseApi.get(`/content/note/all/${crscode}`);
  };
  
  export const deleteNoteByIdAPIWrapper = async (notecode) => {
    return await courseApi.delete(`/content/note/delete/${notecode}`);
  };

  export const editNoteAPIWrapper = async ({
    notecode,
    crscode,
    title,
    explanation,
  }) => {
    return await courseApi.patch(`/content/note/update/${notecode}`, {
        crscode,
        title,
        explanation,
    });
  };