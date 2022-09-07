import React from 'react'

function Home() {
    let navigate = useNavigate();
    function handleSubmit(e) {
    e.preventDefault();
    navigate("/dashboard");

  }
  return (
    <div>
      
    </div>
  )
}

export default Home;
