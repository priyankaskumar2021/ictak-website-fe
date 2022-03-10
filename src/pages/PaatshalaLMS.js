import React, { useEffect } from "react";

function PaatshalaLMS() {

  useEffect(() => {
    window.location.href = "https://retail.ictkerala.org/";
  }, []);

  return (
    <div>
     <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Important Message</h4>
  <p>You are being redirected to ICTAK Paatshala External Link</p>
  <hr/>
  <p class="mb-0">Page Loading ......</p>
</div>
    </div>
  );
}

export default PaatshalaLMS;