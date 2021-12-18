import EditPost from "./edit";
import { useState } from "react";

const EditPostStateContainer = () => {
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  return (
    <EditPost
      response={response}
      message={message}
      showNotification={showNotification}
      shouldRedirect={shouldRedirect}
      setResponse={setResponse}
      setMessage={setMessage}
      setShowNotification={setShowNotification}
      setShouldRedirect={setShouldRedirect}
    />
  );
};

export default EditPostStateContainer;
