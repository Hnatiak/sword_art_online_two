// import React from 'react';
import Modal from '../../../../../Modal/Modal'; // Шлях до вашого компоненту модального вікна

// const DissolveModal = ({ isOpen, onClose }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       title="Dissolve"
//       description="Are you sure you want to dissolve the party?"
//       yesText="Yes"
//       noText="No"
//     />
//   );
// };

// export default DissolveModal;

import React from 'react';

const DissolveModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Dissolve"
      description="Are you sure you want to dissolve the party?"
    />
  );
};

export default DissolveModal;