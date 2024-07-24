import { Menu, Popover, Position, Button } from 'evergreen-ui';
import React from 'react';
import './dropdown.scss';
import PropTypes from 'prop-types';

const Dropdown = ({ icon, children }) => {
  return (
    <Popover position={Position.BOTTOM_RIGHT} content={<Menu>{children}</Menu>}>
      <Button
        style={{
          border: 'none',
          background: 'none',
          padding: 'unset',
          outline: 'none',
        }}
      >
        {icon}
      </Button>
    </Popover>
  );
};

Dropdown.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node,
};

export default Dropdown;
