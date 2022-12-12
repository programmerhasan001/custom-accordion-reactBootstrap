import Accordion from "react-bootstrap/Accordion";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

function AccordionCustom() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className="custom__accordion mb-3">
        <Accordion.Header>
          Accordion Item 1
          <span className="accordion__icon plus">
            <AiFillPlusCircle />
          </span>
          <span className="accordion__icon minus">
            <AiFillMinusCircle />
          </span>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="custom__accordion">
        <Accordion.Header>
          Accordion two
          <span className="accordion__icon plus">
            <AiFillPlusCircle />
          </span>
          <span className="accordion__icon minus">
            <AiFillMinusCircle />
          </span>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionCustom;
