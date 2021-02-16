import React from "react";
import { Card } from "react-bootstrap";

const Notifications = () => {
  return (
    <section className="mt-3">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">Notifications</Card.Title>
          <ul>
            <li>Notification</li>
            <li>Notification</li>
            <li>Notification</li>
            <li>Notification</li>
          </ul>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Notifications;
