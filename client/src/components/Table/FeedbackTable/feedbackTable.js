import { useContext, useEffect } from "react";
import "./Feedback.css";
import { PetifyContext } from "../../../context/context";
import {toast} from 'react-toastify';


const FeebackTable = () => {
    const {message, setMessage} = useContext(PetifyContext);

    useEffect(() => {
        const fetchData = async () => {
          try{
            const response = await fetch('http://localhost:8000/contacts', {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
              });
              const data = await response.json()
              setMessage(data.data.messages)
     
          }catch(err) {
            console.log(err)
          }
        }
        fetchData();   
      },[]);

      const handleDelete = async(id) => {
        try {
          const response = await fetch(`http://localhost:8000/contacts/${id}`, {
            method: 'DELETE'
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          setMessage(message.filter(msg => msg.id !== id));
          toast.success('Contact Delete Successfully', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        } catch(err) {
          console.error(err);
        }
      };
      
 
    return (
  <>
    
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
                <th scope="col">Message</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
          {message.map((msg) => {
            const{id, name, number, message} = msg;

            return (
              <tr key={id}>
              <td data-label='Name'>{name}</td>
              <td data-label='Number'>{number}</td>
              <td data-label='Message'>{message}</td>
              <td data-label='Delete'><button className="delete_btn" onClick={() => handleDelete(msg.id)}>Delete</button></td>
            </tr>
            )
          })}
              
        </tbody>
    </table>
</>
    );
  }
  export default FeebackTable;