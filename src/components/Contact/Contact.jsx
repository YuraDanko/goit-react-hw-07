import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contactItem}>
      <p className={css.contactInfo}>
        <span className={css.contactName}>{contact.name}:</span>
        {contact.number}
      </p>
      <button className={css.deleteButton} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
