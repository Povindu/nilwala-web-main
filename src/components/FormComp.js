import React from 'react';
import {db, storage} from '../config/config';
import {ref as sRef,uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {ref, set, onValue, get, getDatabase, child} from "firebase/database";
import { useRef, useState, useEffect } from 'react';
import { useFormik } from 'formik'



const FormComp = () => { 
  

  const inputFile = useRef(null);
  const [lastFormID, setLastFormID] = useState(0);
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [imgURL, setImgURL] = useState();



  // Get the last form ID when the component is mounted
  useEffect( () => {  

    get(child(ref(db), 'formData/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          setLastFormID(data.lastFormID);
        } else {
          console.log("Data not available");
        }
  
      })
      .catch((error) => {
        console.error(error);
      });
    

  }, []);




  function handleImage(event) {
    setFile(event.target.files[0]);
  }


  // Upload image to firebase storage
  const handleUpload = () => {
    if (!file) {
        alert("Please upload an image first!");
    }

    const storageRef = sRef(storage, `/formDataUpload/${file.name}_F${lastFormID+1}.jpg`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            setPercent(percent);
        },
        (err) => console.log(err),
        () => {
                // Download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    
                    setImgURL(url);

                    // Update last form ID by incrementing
                    set(ref(db, 'formData/lastFormID'), (lastFormID+1))
                    .then( () => {
                      // Success
                    })
                    .catch( (error) => {
                      console.log(error);
                    });

                });
              }
      );
  };



  // sumbit form data to firebase realtime database using formik
  const formik = useFormik({
    initialValues: {
      fullName: '',
      mobileNo: '',
      email: '',
    },
    onSubmit: (values, {resetForm}) => {

      resetForm({})
      
      // Add new form data


    const data = {
      fullName: values.fullName,
      mobileNo: values.mobileNo,
      email: values.email,
      verfied: false,
      imgURL: imgURL,
    }
    
    set(ref(db, 'formData/'+"F"+(lastFormID+1)), data)
    .then( () => {

      // Update last form ID by incrementing
      setImgURL();
      if (inputFile.current) {
        inputFile.current.value = "";
        inputFile.current.type = "file";
      }

    }).catch( (error) => {
      console.log(error);
    });
    
      


      
    }
  });



  return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          required
          minLength="3"
        />
  
        <label htmlFor="mobileNo">Mobile Number</label>
        <input
          id="mobileNo"
          name="mobileNo"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.mobileNo}
          required
          minLength="10"
          placeholder='0XXXXXXXXX'
         />
  
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />

        <br/>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImage}
          ref={inputFile}
        />
        <button type='button' onClick={handleUpload}>Upload to Firebase</button>
        <p>{percent} "% done"</p>
  
       {imgURL && <button type="submit">Submit</button>} 
       {imgURL && <img src={imgURL} alt="Uploaded" height="100" width="100"/>} 
      </form>
   );


       
}


export default FormComp;




