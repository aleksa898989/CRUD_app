import AddPost from "./add";
import { useState } from "react";
const AddPostStateContainer = () => {
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  return (
    <AddPost
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

export default AddPostStateContainer;
