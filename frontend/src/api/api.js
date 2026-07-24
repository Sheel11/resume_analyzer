import axios from 'axios'
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const redirectURL = import.meta.env.VITE_REDIRECT_URL;
export const supabase = createClient(supabaseUrl, supabaseKey);

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

// ---- Analyze Resume -----------------------------------------------
export async function analyzeResume(resumeFile, jobDescription, userId = '' , token) {
      const formData = new FormData()
      formData.append('resume', resumeFile)
      formData.append('job_description', jobDescription || '')
      formData.append('user_id', userId || '')

      // Do NOT set Content-Type manually — axios auto-sets multipart/form-data
      // with the correct boundary when the body is FormData. Overriding it
      // removes the boundary and breaks the server's ability to parse the body.
      const response = await axios.post(`${API_BASE_URL}/api/v1/analyze-resume`, formData , {
        headers : { 'authorization': `bearer ${token}` },
      })
      return response.data;
}


// ---- User History ---------------------------------
export async function getUserHistory(token) {
    const response = await axios.get(`${API_BASE_URL}/api/v1/history`, {
      headers: { 'authorization': `bearer ${token}` },
    })
    return response.data   // array of HistoryEntry objects
}


// ---- Delete Analysis ---------------------------------
export async function deleteAnalysis(id, userId , token) {
    const response = await axios.delete(`${API_BASE_URL}/api/v1/history/${id}`, {
      headers: { 'user_id': userId, 
        'authorization': `bearer ${token}`,
      },
    })
  return response.data

}


// ---- Download PDF for the current (live) analysis ------------------
// Posts the full AnalysisResponse JSON to /generate-pdf and triggers a download.
export async function downloadCurrentPDF(analysisData, resumeFilename = 'resume') {
    const response = await axios.post(
      `${API_BASE_URL}/api/v1/generate-pdf`,
      analysisData,
      { responseType: 'blob' }
    )
    _triggerDownload(response.data, `ats_report_${resumeFilename}.pdf`)
}



// ---- Download PDF for a stored (history) analysis ---------------------
export async function downloadHistoryPDF(id, userId, filename = 'resume' , token) {
    const response = await axios.get(`${API_BASE_URL}/api/v1/history/${id}/pdf`, {
      headers: { 'X-User-ID': userId,
                'authorization': `bearer ${token}`,
      },
      responseType: 'blob',
    })
    _triggerDownload(response.data, `ats_report_${filename}.pdf`)
}


// ---- Health check -------------------------------
export async function checkHealth() {
  const response = await axios.get(`${API_BASE_URL}/api/v1/health`)
  return response.data
}


// ---- Internal: create a temporary <a> to force browser file download --------
function _triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename.replace(/\s+/g, '_')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// ----- loginuser with password and email  -----------------------------
export async function login(email , password){
   const { data, error} = await supabase.auth.signInWithPassword({
         email: email,
         password: password,
  });

  if(error?.message){
    throw(error);
  }
  return data;
}


// ---- register user with email and password and optinal name field ---------------
export async function signup(name, email , password){
const { data, error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    data: {
      full_name: name,
    }
  }
 });
 if(error){
  throw(error);
 }
  return data;
}


//---- reset password with registered email ---------------
export async function resetpassword(email){
const { data, error } = await supabase.auth.resetPasswordForEmail(
  email, {
  redirectTo: redirectURL,
})
}

// ---- update password of user ------------------
export async function updatepassword(new_password){
    const { data, error } = await supabase.auth.updateUser({
      password: new_password
    })
    return {data , error};
    if(error){
      throw(error);
    }
}


