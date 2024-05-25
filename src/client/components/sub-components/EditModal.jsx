import React, { useEffect } from "react";
import { useRef } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.jsx";

const EditModal = ({ item }) => {
  const titleRef = useRef();
  const descRef = useRef();
  const imgRef = useRef();
  const priceRef = useRef();

  const navigate = useNavigate();
  const { getProducts } = useAuth();

  useEffect(() => {
    titleRef.current.value = item.title;
    descRef.current.value = item.desc;
    imgRef.current.value = item.imgURL;
    priceRef.current.value = item.price;
  }, [item]);

  async function handleUpdate(e) {
    e.preventDefault();
    console.log("submitted");
    const productRef = doc(db, "products", item.id);
    // window.alert(item.id)
    await updateDoc(productRef, {
      title: titleRef.current.value,
      desc: descRef.current.value,
      imgURL: imgRef.current.value,
      price: priceRef.current.value,
    });
    getProducts();
    navigate("/");
  }

  return (
    <div
      className="modal micromodal-slide"
      id="modal-1"
      aria-hidden="true"
    >
      <div
        className="modal__overlay"
        tabIndex="-1"
        data-micromodal-close
      >
        <form
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
              Edit Product
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
              <label
                className="p-2 text-xl"
                htmlFor="title"
              >
                Title
                <input
                  className="input"
                  type="text"
                  ref={titleRef}
                />
              </label>
              <label
                className="p-2 text-xl"
                htmlFor="desc"
              >
                Description
                <textarea
                  className="input !h-32"
                  type="text"
                  ref={descRef}
                />
              </label>
              <label
                className="p-2 text-xl"
                htmlFor="imgURL"
              >
                Image URL
                <input
                  className="input"
                  type="text"
                  ref={imgRef}
                />
              </label>
              <label
                className="p-2 text-xl"
                htmlFor="price"
              >
                Price
                <input
                  className="input"
                  type="text"
                  ref={priceRef}
                />
              </label>
            </div>
          </main>
          <footer className="modal__footer">
            <button
              onClick={handleUpdate}
              type="submit"
              className="modal__btn modal__btn-primary !mx-2"
            >
              Update
            </button>
            <button
              className="modal__btn"
              data-micromodal-close
              aria-label="Close this dialog window"
            >
              Cancel
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
