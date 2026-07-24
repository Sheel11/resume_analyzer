import { Mail, CheckCircle, TrendingUp, Trophy } from 'lucide-react'

function ProfileHeader({ user, stats }) {
    const { imageUrl, fullName, email } = user

    return (
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm shadow-slate-200/40 p-8 h-full flex flex-col items-center text-center space-y-6">

            {/* Avatar with gradient border */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                <img
                    src={imageUrl}
                    alt={fullName || 'User Avatar'}
                    className="relative w-28 h-28 rounded-full border-4 border-white object-cover shadow-sm"
                />
                <div className="absolute bottom-1 right-1 bg-emerald-500 border-2 border-white rounded-full p-1.5 shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                </div>
            </div>

            {/* User Info */}
            <div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-1">{fullName || 'Job Seeker'}</h2>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 font-medium bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                    <Mail className="w-4 h-4 text-slate-400" />
                    {email || 'No Email'}
                </div>
            </div>

            <hr className="w-full border-slate-100" />

            {/* Stats Grid */}
            <div className="w-full grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-100/50 rounded-xl p-4 flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
                    <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                        <Trophy className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-3xl font-extrabold text-slate-900">{stats.bestScore}</span>
                    <span className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mt-1">Best Score</span>
                </div>

                <div className="bg-cyan-50 border border-cyan-100/50 rounded-xl p-4 flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
                    <div className="bg-cyan-100 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                        <TrendingUp className="w-5 h-5 text-cyan-600" />
                    </div>
                    <span className="text-3xl font-extrabold text-slate-900">{stats.avgScore}</span>
                    <span className="text-xs font-semibold text-cyan-700 uppercase tracking-widest mt-1">Avg Score</span>
                </div>
            </div>

            <div className="w-full bg-slate-900 rounded-xl p-4 flex items-center justify-between shadow-sm">
                <span className="text-sm font-semibold text-slate-300">Total Analyzed</span>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {stats.totalResumes} Resumes
                </span>
            </div>

        </div>
    )
}

export default ProfileHeader;