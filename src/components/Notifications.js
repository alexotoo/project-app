import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";

const Notifications = ({ notifications }) => {
  const data = notifications.slice(0, 3);

  return (
    <section className="mt-3">
      <Card>
        <Card.Body>
          <Card.Title className="text-center t-color">Notifications</Card.Title>
          <ul className="list-group">
            {data &&
              data.map((notify) => (
                <li key={notify.id} className="list-group-item">
                  <span className="t-color">
                    {notify.authorFirstName} {notify.authorLastName}
                  </span>{" "}
                  created a project
                  <br />
                  {moment(notify.createdAt.toDate()).calendar()}
                </li>
              ))}
          </ul>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Notifications;
