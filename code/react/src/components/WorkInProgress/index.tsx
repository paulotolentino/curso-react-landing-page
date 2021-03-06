import React from "react";
import { Row } from "antd";

import "./index.css";

const WorkInProgress: React.FC = () => {
  return (
    <div className="work_in_progress">
      <Row className="center">
        <img src="/wip.png" alt="work in progress" />
      </Row>
    </div>
  );
};

export default WorkInProgress;
