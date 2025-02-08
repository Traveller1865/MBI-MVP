import React, { useState } from 'react';
    import { File, ChevronDown, ChevronUp } from 'lucide-react';

    function DoctorNotes({ notes, onNoteClick }) {
      return (
        <div className="space-y-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className={`bg-gray-50 p-4 rounded-lg border cursor-pointer hover:bg-gray-100 transition-colors duration-200`}
              onClick={() => onNoteClick({...note, type: 'doctor_note'})}
            >
              <div className="flex items-center">
                <File className="h-5 w-5 text-gray-600 mr-2" />
                <div>
                  <p className="text-lg font-semibold">Note - {note.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    export default DoctorNotes;
