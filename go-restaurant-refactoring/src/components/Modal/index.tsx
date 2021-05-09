import * as React from 'react';
import ReactModal from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  setIsOpen(): void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, setIsOpen, children }: ModalProps) {
  const [modalStatus, setModalStatus] = React.useState(isOpen);

  React.useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
}