import { useEffect } from "react";
import { useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.jsx";

const AddModal = ({ item }) => {
  const navigate = useNavigate();
  const { getProducts, currentUser } = useAuth();
  const titleRef = useRef();
  const tagsRef = useRef();
  const imgURLRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();

  async function handleAdd(e) {
    e.preventDefault();
    console.log("deleted");

    // await deleteDoc(doc(db, "products", item.id));
    // getProducts()
    // navigate('/')

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "products"), {
      title: titleRef.current.value,
      desc: descRef.current.value,
      imgURL: imgURLRef.current.value,
      price: priceRef.current.value,
      tags: tagsRef.current.value,
      sellerID: currentUser.displayName,
      date: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  }

  return (
    <div className="modal micromodal-slide" id="modal-1" aria-hidden="true">
      <div className="modal__overlay" tabIndex="-1" data-micromodal-close>
        <div
          className="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-1-title"
        >
          <header className="modal__header">
            <h2 className="modal__title" id="modal-1-title">
              Add Product
            </h2>
            <button
              className="modal__close"
              aria-label="Close modal"
              data-micromodal-close
            ></button>
          </header>
          {/* <main className="modal__content" id="modal-1-content">
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
          </footer> */}
          <form>
            <label htmlFor="p-title">
              Title
              <input className="input" type="text" name="title" id="p-title" ref={titleRef} />
            </label>
            <label htmlFor="p-desc">
              Description
              <input className="input" type="text" name="desc" id="p-desc"  ref={descRef}/>
            </label>
            <label htmlFor="p-desc">
              imgURL
              <input
                className="input"
                type="text"
                name="imgURL"
                id="p-imgURL"
                ref={imgURLRef}
              />
            </label>
            <label htmlFor="p-desc">
              Price
              <input className="input" type="text" name="price" id="p-price" ref={priceRef} />
            </label>
            <label htmlFor="p-desc">
              Tags
              <input className="input" type="text" name="tags" id="p-tags" ref={tagsRef} />
            </label>
            <button
              onClick={handleAdd}
              type="submit"
              className="modal__btn modal__btn-primary !mx-2"
            >
              Add item
            </button>
            <button
              className="modal__btn"
              data-micromodal-close
              aria-label="Close this dialog window"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
