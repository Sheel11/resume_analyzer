import { Sparkles, ScanText, FileX } from 'lucide-react'

function KeywordAnalysis({ keywordMatch, matchedKeywords, missingKeywords }) {
  const matchColor =
    keywordMatch >= 70 ? 'text-emerald-700 border-emerald-200 bg-emerald-50' :
      keywordMatch >= 50 ? 'text-amber-700 border-amber-200 bg-amber-50' :
        'text-rose-700 border-rose-200 bg-rose-50'

  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-8 flex flex-col h-full shadow-slate-200/40">
      <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-100">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <ScanText className="w-5 h-5 text-blue-500" />
          Lexical Keyword Profile
        </h2>
        <div className={`px-4 py-1 rounded-full border text-sm font-extrabold flex items-center gap-1.5 ${matchColor}`}>
          <Sparkles className="w-4 h-4" /> {Math.round(keywordMatch)}%
        </div>
      </div>

      <div className="flex-grow space-y-8 overflow-y-auto max-h-[600px] custom-scrollbar pr-2">
        {(matchedKeywords.length > 0 || missingKeywords.length > 0) ? (
          <>
            {matchedKeywords.length > 0 && (
              <div>
                <p className="text-sm font-bold text-emerald-800 mb-4 flex items-center gap-2">
                  <span className="flex w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  Successfully Matched ({matchedKeywords.length})
                </p>
                <div className="flex flex-wrap gap-2">
                  {matchedKeywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {missingKeywords.length > 0 && (
              <div className="bg-rose-50 border border-rose-100 rounded-xl p-6 shadow-sm">
                <p className="text-sm font-bold text-rose-800 mb-4 flex items-center gap-2">
                  <span className="flex w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  Missing Key terms ({missingKeywords.length})
                </p>
                <div className="flex flex-wrap gap-2">
                  {missingKeywords.slice(0, 15).map((keyword, index) => (
                    <span
                      key={index}
                      className="bg-white border border-rose-200 text-rose-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                {missingKeywords.length > 15 && (
                  <p className="text-[10px] text-rose-500 mt-4 font-bold uppercase tracking-widest">+ {missingKeywords.length - 15} more hidden for brevity</p>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-slate-50/50 rounded-xl border border-slate-200 border-dashed">
            <FileX className="w-12 h-12 text-slate-400 mb-4" />
            <h3 className="text-slate-700 font-extrabold mb-2 text-lg">No Job Description Analyzed</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Provide a job description to unlock deep keyword matching and discover what recruiters are looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default KeywordAnalysis;