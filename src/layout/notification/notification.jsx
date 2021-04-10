import React from "react";
import { MDBContainer, MDBNotification } from "mdbreact";

const Notification = (props) => {
  let { message, title } = props;

  return (
    <>
      <MDBContainer className={`notification-container`}>
        <MDBNotification
          show
          fade
          title={title}
          message={message}
          style={{
            position: "fixed",
            top: "6%",
            right: "0",
            zIndex: 9999,
          }}
        />
      </MDBContainer>
    </>
  );
};

export default Notification;
