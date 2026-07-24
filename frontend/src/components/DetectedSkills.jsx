import { Code2 } from 'lucide-react'

// Simple categorization dictionaries for the bootcamp level
const CATEGORY_MAP = {
    Programming: ['python', 'java', 'c++', 'c#', 'javascript', 'typescript', 'go', 'ruby', 'php', 'sql', 'r', 'swift', 'kotlin', 'html', 'css'],
    Frameworks: ['react', 'angular', 'vue', 'django', 'flask', 'fastapi', 'spring', 'express', 'node', 'tensorflow', 'pytorch', 'keras', 'pandas', 'numpy'],
    Tools: ['git', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'jenkins', 'jira', 'linux', 'bash', 'power bi', 'tableau', 'excel', 'mongodb', 'postgresql', 'mysql', 'redis']
}

function categorizeSkills(skills) {
    const groups = {
        Programming: [],
        Frameworks: [],
        Tools: [],
        Other: []
    }

    skills.forEach(skill => {
        const lowerSkill = skill.toLowerCase()
        let categorized = false

        for (const [category, keywords] of Object.entries(CATEGORY_MAP)) {
            if (keywords.some(keyword => lowerSkill.includes(keyword))) {
                groups[category].push(skill)
                categorized = true
                break
            }
        }

        if (!categorized) {
            groups.Other.push(skill)
        }
    })

    // Filter out empty groups
    return Object.entries(groups).filter(([_, items]) => items.length > 0)
}

function DetectedSkills({ skills }) {
    if (!skills || skills.length === 0) return null

    const groupedSkills = categorizeSkills(skills)

    return (
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm shadow-slate-200/40 p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-slate-50 blur-[80px] pointer-events-none z-0"></div>

            <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-slate-800 mb-8 border-b border-slate-100 pb-5 flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-blue-500" />
                    Detected Technical Stack
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {groupedSkills.map(([category, items]) => (
                        <div key={category} className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
                            <h4 className="text-sm font-black text-blue-900 uppercase tracking-widest mb-4">
                                {category}
                            </h4>
                            <div className="flex flex-wrap text-sm text-slate-700 font-semibold gap-2 items-center leading-relaxed">
                                {items.map((skill, index) => (
                                    <span key={index} className="flex items-center">
                                        {skill}
                                        {index < items.length - 1 && <span className="mx-2 text-blue-300">•</span>}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DetectedSkills;