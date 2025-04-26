import { useState } from "react";

function Resume() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const correctPassword = "Com.portfolio@francis";

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === correctPassword) {
      setAccessGranted(true);
    } else {
      alert("Incorrect password. Please try again or contact me.");
    }
  };

  return (
    <section className="resume-section">
      <div className="container-resume">
        <h1 className="resume-title">Resume</h1>

        {!accessGranted ? (
          <form onSubmit={handlePasswordSubmit} className="password-form">
            <input
              type="password"
              placeholder="Enter password to preview resume"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="password-input"
            />
            <button type="submit" className="submit-button">Submit</button>
          </form>
        ) : (
          <>
           <div className="pdf-viewer">
              <iframe
                src="/resume.pdf"
                width="100%"
                height="600px"
                style={{ border: "none" }}
                title="Resume PDF"
              ></iframe>
            </div>
         
            <a href="/resume.pdf" download className="download-button">
              Download Resume
            </a>

           
          </>
        )}
      </div>
    </section>
  );
}

export default Resume;