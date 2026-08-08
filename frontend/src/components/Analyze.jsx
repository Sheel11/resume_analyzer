import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { UploadCloud, FileText, CheckCircle2, FileUp, ClipboardType, Loader2, X } from 'lucide-react'

 function Analyze({ onFileSelect, jobDescription, onJobDescriptionChange }) {
   const [selectedFileName, setSelectedFileName] = useState(null)

   const onDrop = useCallback( 
    (acceptedFiles) => {
      if (acceptedFiles.length === 0) return
      const file = acceptedFiles[0]
      setSelectedFileName(file.name)
      onFileSelect(file)
    },
    [onFileSelect]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxFiles: 1,
  })

  
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm shadow-slate-200/40 p-8 md:p-10 space-y-10">

      {/* ---- Section: Resume Upload ---- */}
      <div className="animate-fade-in-up">
        <label className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
          <FileUp className="w-5 h-5 text-blue-500" /> Upload Your Resume
        </label>

        <div
          {...getRootProps()}
          className={`
            relative group border-2 border-dashed rounded-xl p-12 text-center cursor-pointer
            transition-all duration-300 ease-in-out
            ${isDragActive
              ? 'border-blue-500 bg-blue-50/50'
              : 'border-slate-200 bg-slate-50/50 hover:border-blue-400 hover:bg-slate-50'
            }
          `}
        >
          <input {...getInputProps()} />

          {isDragActive ? (
            <div className="flex flex-col items-center justify-center space-y-3">
              <UploadCloud className="w-12 h-12 text-blue-500 animate-bounce" />
              <p className="text-blue-600 font-semibold text-lg">Drop it like it's hot!</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-100">
                <UploadCloud className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <p className="text-slate-700 font-semibold text-lg">Drag & drop your resume here</p>
                <p className="text-slate-500 mt-1">
                  or <span className="text-blue-600 font-medium group-hover:underline">click to browse</span>
                </p>
              </div>
              <p className="text-slate-400 text-xs mt-2 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm inline-block">
                Supported: PDF, DOCX (Max: 5MB)
              </p>
            </div>
          )}
        </div>

        {selectedFileName && (
          <div className="mt-4 flex items-center gap-3 bg-emerald-50 border border-emerald-100/50 rounded-xl px-5 py-4 transition-all animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
            <span className="text-sm font-semibold text-emerald-900 truncate">{selectedFileName}</span>
            <span className="text-xs font-medium bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded ml-auto shrink-0">Ready for analysis</span>
          </div>
        )}
      </div>

      <hr className="border-slate-100" />

      {/* ---- Section: Job Description ---- */}
      <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <label className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <FileText className="w-5 h-5 text-blue-500" /> Job Description
            <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase tracking-wider ml-2">Optional</span>
          </label>
        </div>

        <p className="text-sm text-slate-500 mb-4 leading-relaxed">
          Paste the job posting to get a targeted keyword match analysis.
        </p>

        <div className="flex gap-1 p-1 bg-slate-100 rounded-xl mb-4 w-fit">
          <div
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-white text-slate-800 shadow-sm"
          >
            <ClipboardType className="w-4 h-4" />
            Paste Text
          </div>
        </div>

        {/* Paste Text Tab */}
        
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-500 rounded-xl blur opacity-0 group-focus-within:opacity-20 transition duration-500"></div>
            <textarea
              value={jobDescription}
              onChange={(event) => onJobDescriptionChange(event.target.value)}
              placeholder="Paste the job description here...&#10;&#10;Example: We are looking for a Senior Product Designer with experience in Figma, Design Systems, and React..."
              rows={6}
              className="relative w-full bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white resize-y transition-all shadow-sm"
            />
          </div>
          
        {jobDescription.length > 0 && (
          <p className="text-xs font-medium text-slate-400 mt-2 text-right">
            {jobDescription.length} characters
          </p>
        )}
      </div>

    </div>
  )
}

export default Analyze;