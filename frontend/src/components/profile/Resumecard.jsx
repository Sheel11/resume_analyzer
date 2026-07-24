import { Eye, Download, Trash2, Calendar, LayoutTemplate, BugOff } from 'lucide-react'

// ResumeCard is for Mobile viewing (stacked out columns)
function ResumeCard({ item, onDelete }) {
    const getScoreColor = (score) => {
        if (score >= 80) return 'text-emerald-500 bg-emerald-50 border-emerald-200'
        if (score >= 60) return 'text-amber-500 bg-amber-50 border-amber-200'
        return 'text-rose-500 bg-rose-50 border-rose-200'
    }

    return (
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 hover:shadow-sm transition-shadow relative overflow-hidden group">

            {/* Top Section */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="font-bold text-slate-900 truncate max-w-[200px]" title={item.resume_name}>
                        {item.resume_name}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1 font-medium bg-slate-50 px-2 py-0.5 rounded-full inline-block">
                        {item.job_title}
                    </p>
                </div>

                {/* The Badge */}
                <div className={`flex flex-col items-center justify-center w-14 h-14 rounded-full border-2 shadow-inner shrink-0 ${getScoreColor(item.ats_score)}`}>
                    <span className="text-xl font-extrabold leading-none">{item.ats_score}</span>
                </div>
            </div>

            <hr className="my-4 border-slate-50" />

            {/* Middle Stats */}
            <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <LayoutTemplate className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-400">Match %</p>
                        <p className="font-semibold text-slate-800 text-sm">{item.keyword_match || 0}%</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <BugOff className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-400">Missing</p>
                        <p className="font-semibold text-slate-800 text-sm">{(item.missing_keywords || []).length} words</p>
                    </div>
                </div>

                <div className="col-span-2 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                        <Calendar className="w-4 h-4 text-slate-400" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-400">Scanned On</p>
                        <p className="font-semibold text-slate-800 text-sm">
                            {new Date(item.date || item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 w-full pt-1 border-t border-slate-50">
                <button className="flex-1 flex justify-center items-center gap-1.5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl text-xs font-bold transition-colors">
                    <Eye className="w-4 h-4" /> View
                </button>
                <button className="flex justify-center items-center py-2.5 px-3 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-bold transition-colors">
                    <Download className="w-4 h-4" />
                </button>
                <button
                    onClick={() => onDelete(item.id)}
                    className="flex justify-center items-center py-2.5 px-3 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold transition-colors"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

        </div>
    )
}

export default ResumeCard;
