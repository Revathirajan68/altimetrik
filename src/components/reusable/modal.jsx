import { Modal } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";

//scss
import "./style.scss";

const FormModal = ({
  show,
  onClose,
  heading,
  children,
  size,
  className,
  modalClassName,
  subHeading,
  headerHide,
  dialogClassName,
  closeBtnHide,
  hideLine,
  headingClassName,
}) => {
  return (
    <div className="form-modal-container">
      <Modal
        show={show}
        centered
        onHide={onClose}
        size={size}
        className={modalClassName}
        dialogClassName={dialogClassName}
        backdrop="static"
        backdropClassName="form-modal-backdrop"
      >
        {headerHide ? null : (
          <Modal.Header>
            <div className="form-modal">
              <Modal.Title className={headingClassName}>{heading}</Modal.Title>
              {subHeading && (
                <div className="form-modal-sub-title">{subHeading}</div>
              )}
            </div>
            {closeBtnHide ? null : (
              <CloseButton
                className={hideLine ? "hideLine" : ""}
                onClick={() => onClose(false)}
              />
            )}
          </Modal.Header>
        )}
        <Modal.Body className={className}>
          <div>{children}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormModal;