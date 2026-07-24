import { PieChart, Pie, Cell } from 'recharts'
import { Target, TrendingUp, AlertTriangle, Info } from 'lucide-react'

// Color logic: 90–100 green, 70–89 blue, 50–69 amber, below 50 red
function getScoreColor(score) {
  if (score >= 90) return '#10b981'  // emerald-500
  if (score >= 70) return '#3b82f6'  // blue-500
  if (score >= 50) return '#f59e0b'  // amber-500
  return '#ef4444'                   // red-500
}

function getScoreLabel(score) {
  if (score >= 90) return 'Exceptional Match'
  if (score >= 70) return 'Solid Potential'
  if (score >= 50) return 'Needs Refinement'
  return 'Critical Rewrite Required'
}

function getScoreMessage(score) {
  if (score >= 90) return 'Outstanding! Your resume is highly optimized and should pass ATS hurdles with ease.'
  if (score >= 70) return 'Great! Your resume is highly competitive. A few minor tweaks could push it to exceptional.'
  if (score >= 50) return 'Average. Consider adding more measurable impacts and directly referencing the job description.'
  return 'Critically low. A major structural and keyword rewrite is needed to pass effectively.'
}

function getScoreIcon(score) {
  if (score >= 70) return <TrendingUp className="w-4 h-4" />
  return <AlertTriangle className="w-4 h-4" />
}

function ATSScoreCard({ score, interpretation }) {
  const scoreColor = getScoreColor(score)
  const scoreLabel = getScoreLabel(score)
  const scoreMessage = getScoreMessage(score)

  const chartData = [
    { name: 'Score', value: score },
    { name: 'Remaining', value: 100 - score },
  ]

  return (
    <div className="bg-white rounded-xl border border-slate-100 flex flex-col items-center relative group p-10 shadow-slate-200/50 shadow-sm h-full">

      <div className="w-full flex items-center justify-between pb-6 mb-4 border-b border-slate-50">
        <h2 className="text-xl font-extrabold text-slate-800 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-500" />
          Primary ATS Score
        </h2>
        <div
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
          style={{ backgroundColor: `${scoreColor}15`, color: scoreColor, border: `1px solid ${scoreColor}30` }}
        >
          {getScoreIcon(score)}
          {scoreLabel}
        </div>
      </div>

      <div className="relative flex items-center justify-center p-6 w-full max-w-[320px]">
        {/* Soft background glow based on score class */}
        <div
          className="absolute inset-0 rounded-full blur-[60px] opacity-20 pointer-events-none"
          style={{ backgroundColor: scoreColor }}
        ></div>

        <PieChart width={280} height={280} className="relative z-10">
          <Pie
            data={chartData}
            cx={140}
            cy={140}
            innerRadius={110}
            outerRadius={140}
            startAngle={225}
            endAngle={-45}
            dataKey="value"
            strokeWidth={0}
            cornerRadius={12}
            paddingAngle={3}
          >
            <Cell fill={scoreColor} className="drop-shadow-sm" style={{ filter: `drop-shadow(0px 8px 16px ${scoreColor}40)` }} />
            <Cell fill="#f1f5f9" /> {/* slate-100 */}
          </Pie>
        </PieChart>

        <div className="absolute inset-0 flex flex-col items-center justify-center pt-2 z-20">
          <span className="text-7xl font-black tracking-tighter drop-shadow-sm" style={{ color: scoreColor }}>
            {score}
          </span>
          <span className="text-sm font-bold text-slate-400 mt-2 uppercase tracking-widest text-[11px]">ATS Score</span>
        </div>
      </div>

      <div className="mt-8 text-center px-4">
        <p className="text-slate-700 font-semibold leading-relaxed">
          {scoreMessage}
        </p>
      </div>

      {interpretation && (
        <div className="w-full mt-6 bg-slate-50 border border-slate-100 rounded-xl p-5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
          <p className="text-slate-600 text-sm font-medium leading-relaxed flex items-start gap-3">
            <Info className="w-5 h-5 shrink-0 text-blue-400 mt-0.5" />
            <span>
              <span className="font-bold text-blue-900 uppercase text-[10px] tracking-widest block mb-1.5">AI Engine Context</span>
              {interpretation}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}

export default ATSScoreCard;