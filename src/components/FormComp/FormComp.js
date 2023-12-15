import React from 'react';
import {db, storage} from '../../config/config';
import {ref as sRef,uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {ref, set, onValue, get, getDatabase, child} from "firebase/database";
import { useReducer, useRef, useState, useEffect } from 'react';
import { useFormik } from 'formik'

import './FormStyle.css';

const FormComp = () => { 
  
  const [position, setPosition] = useState();
  const inputFile = useRef(null);
  const [lastFormID, setLastFormID] = useState(0);
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [imgURL, setImgURL] = useState();
  const [value, setValue] = useState(0);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const onOptionChange = e => {
    setPosition(e.target.value)

    if((position === "prospect" || position === "leo")){
      
      formik.values.club = "Leo Club of Matara Nilwala";
    }
    else{
      formik.values.club = "";
    }
  }

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
      club: '',
    },
    onSubmit: (values, {resetForm}) => {

      resetForm({})

    const data = {
      fullName: values.fullName,
      mobileNo: values.mobileNo,
      email: values.email,
      club: values.club,
      verfied: false,
      imgURL: imgURL,
      position: position,
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
    <div className="formContainer">
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="divName d">
            <div className="divLabName">
              <label 
                className='LabName'
                htmlFor="firstName">Name</label>
            </div>
            <input
              className='InpName i'
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              required
              minLength="3"
            />
          </div>

          <div className="divMobile d">
            <div className="divLabMobile">
              <label 
                className='LabMobile'
                htmlFor="mobileNo">Mobile Number</label>
            </div>
            <input
              className='InpMobile i'
              id="mobileNo"
              name="mobileNo"
              type="tel"
              onChange={formik.handleChange}
              value={formik.values.mobileNo}
              required
              minLength="10"
            />
          </div>


          <div className="divEmail d">
            <div className="divLabEmail">
              <label
                className='LabEmail' 
                htmlFor="email">Email Address</label>
            </div>
            <input
            className='InpEmail i'
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
          </div>


          <div className="position d">
            
            <div className="nilwalaPos">
              <p>Nilwala Leos</p>
              <div>
                <input type="radio" id="prospect" name="status" value="prospect" checked={position === "prospect"} onChange={onOptionChange} />
                <label for="prospect"> Prospect</label>
              </div>

              <div>
                <input type="radio" id="leo" name="status" value="leo" checked={position === "leo"} onChange={onOptionChange}/>
                <label for="leo"> Leo</label>
              </div>
            </div>

            <div className="visitPos">
              <p>Visiting Leos</p>
              <div>
                <input type="radio" id="council" name="status" value="council" checked={position === "council"} onChange={onOptionChange} />
                <label for="council"> Council Officer</label>
              </div>

              <div>
                <input type="radio" id="visiting" name="status" value="visitng" checked={position === "visitng"} onChange={onOptionChange} />
                <label for="visiting"> Visiting Leo</label>
              </div>
            </div>

          </div>


          <div className="divClub d">
            <div className="divLabClub">
              <label
                className='LabClub' 
                htmlFor="club">Club Name</label>
            </div>

            { 
            !(position === "prospect" || position === "leo") &&
              <input
              className='InpEmail i'
                id="club"
                name="club"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.club}
                required
                enabled
              />
            }

            { 
            (position === "prospect" || position === "leo") &&
              <input
              className='InpEmail i'
                id="club"
                name="club"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.club = "Leo Club of Matara Nilwala"}
                required
                disabled
              />
              
               
            }
          </div>


          <div className="divFile d">
            <div className="divLabFile">
              <label 
                className='LabFile'
                htmlFor="file">Upload Payment Proof Image</label>
            </div>
          <input 
            className='InpFile'
            type="file" 
            accept="image/*" 
            onChange={handleImage}
            ref={inputFile}
          />


          <div className="divupload">

          {(percent > 0) && <p className='imgUploadp'> Image upload {percent}% Done</p> }
          {(!imgURL) && <button type='button' onClick={handleUpload}>Upload Image</button>}
            
          </div>
        
          <div className="divSubmit">
            {imgURL && <button className="btn-submit" type="submit">Submit</button>} 
            {/* <button className="btn-submit" type="submit">Submit</button> */}
          </div>
        </div>

       </div>


      </form>
    </div>
   );


       
}


export default FormComp;




