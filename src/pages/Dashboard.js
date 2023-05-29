import logo from '../images/moon1.jpg';
import React, { useState } from "react"

// export default function Login({ setToken }) {
//     let [authMode, setAuthMode] = useState("signin")
//     const [user, setUser] = useState();
//     const [password, setPassword] = useState();
  
//     const handleSubmit = async e => {
//       e.preventDefault();
//       const token = await loginUser({
//         user,
//         password
//       });
//       //setToken(token);
//       window.location.href = '/dashboard'
//     }

async function TreatmentHours(userData) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(data => data.json())
   }

export default function DashB() {
    const [hours, setHours] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();

      window.location.href = '/preconizations'
    }
  
{
      return (
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleSubmit}
          >
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Register your daily night hours and receive our preconizations for the day</h3>
              <div className="form-group mt-3">
                <label>Waking Hour + Sleeping Hour of previous day</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="08:00+23:00"
                  onChange={e => setHours(e.target.value)}
                />
              </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                        Submit
                        </button>
                    </div>
            </div>
          </form>
        </div>
      )
    }   
  }