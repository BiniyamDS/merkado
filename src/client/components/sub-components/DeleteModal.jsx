import React, { useEffect } from "react";
import { useRef } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.jsx";

const DeleteModal = ({ item }) => {
  const navigate = useNavigate();
  const { getProducts } = useAuth();

  async function handleDelete(e) {
    e.preventDefault();
    console.log("deleted");

    await deleteDoc(doc(db, "products", item.id));
    getProducts()
    navigate('/')
  }

  return (
    <div
      className="modal micromodal-slide"
      id="modal-2"
      aria-hidden="true"
    >
      <div
        className="modal__overlay"
        tabIndex="-1"
        data-micromodal-close
      >
        <div
          className="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-1-title"
        >
          <header className="modal__header">
            <h2
              className="modal__title"
              id="modal-1-title"
            >
              Delete Product
            </h2>
            <button
              className="modal__close"
              aria-label="Close modal"
              data-micromodal-close
            ></button>
          </header>
          <main
            className="modal__content"
            id="modal-1-content"
          >
            <div className="flex flex-col">
              <p>Are You sure you want to delete?</p>
            </div>
          </main>
          <footer className="modal__footer">
            <button
              onClick={handleDelete}
              type="submit"
              className="modal__btn modal__btn-primary !mx-2"
            >
              Yes
            </button>
            <button
              className="modal__btn"
              data-micromodal-close
              aria-label="Close this dialog window"
            >
              No
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
