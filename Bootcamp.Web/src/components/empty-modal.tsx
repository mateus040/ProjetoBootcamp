import { IoCloseSharp } from "react-icons/io5";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export interface ModalProps {
  children?: string | JSX.Element | JSX.Element[];
  isOpen: boolean;
  close: () => void | ((args: any) => void);
  width?: string;
  title?: string;
}

export default function EmptyModal({
  children,
  isOpen,
  close,
  width,
  title,
}: ModalProps) {
  const customStyles = {
    content: {
      maxWidth: width,
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={close}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      {title ? (
        <div className="mb-6 flex justify-between items-center">
          <p className="text-3xl text-black m-0">{title}</p>
          <div onClick={close} className="cursor-pointer">
            <IoCloseSharp />
          </div>
        </div>
      ) : (
        <div className="mb-6 flex justify-between items-center">
          <div onClick={close} className="cursor-pointer">
            <IoCloseSharp />
          </div>
        </div>
      )}
      {children}
    </ReactModal>
  );
}
