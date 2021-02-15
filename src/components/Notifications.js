import React from "react";
import { Card } from "react-bootstrap";

const Notifications = () => {
  return (
    <section className="mt-3">
      <Card>
        <Card.Body>
          <Card.Text className="text-center">
            <h5>Notifications</h5>
          </Card.Text>
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
