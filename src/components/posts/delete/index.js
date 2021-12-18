import DeletePost from "./delete";
import { useState } from "react";

const DeletePostStateContainer = () => {
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  return (
    <DeletePost
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

export default DeletePostStateContainer;
