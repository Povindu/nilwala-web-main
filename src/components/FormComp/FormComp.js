import React from "react";
import { db, storage } from "../../config/config";
import {
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { ref, set, get, child } from "firebase/database";
import { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
// import { confirmAlert } from 'react-confirm-alert';

import "react-confirm-alert/src/react-confirm-alert.css";

import "./FormStyle.css";

const FormComp = () => {
  const [club, setClub] = useState();
  const [LeoStatus, setLeoStatus] = useState();
  const inputFile = useRef(null);
  const [lastFormID, setLastFormID] = useState(0);
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [imgURL, setImgURL] = useState();




  // Handle the change of Status and Clubs

  const onStatusChange = (e) => {
    setLeoStatus(e.target.value);
  };

  const onClubChange = (e) => {
    setClub(e.target.value);
    // console.log(e.target.value);
  };




  // Get the last form ID from firebase realtime database
  function getLastFormID() {
    get(child(ref(db), "formData/"))
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
  }



  // Get the last form ID when the component is mounted
  useEffect(() => {
    getLastFormID();
  }, []);




  function handleImage(event) {
    const fileExtension = event.target.files[0].name.split(".").at(-1);
    const allowedFileTypes = ["jpg", "png", "jpeg", "webp", "pdf"];

    if (event.target.files[0].size > 50000000) {
      alert("Image size is too large! Please select another image below 50mb.");
      event.target.value = "";
      event.target.type = "file";
    } else {
      if (allowedFileTypes.includes(fileExtension)) {
        setFile(event.target.files[0]);
      } else {
        alert(
          `Uploaded Filetype is not supported.\nFiletype must be ${allowedFileTypes.join(
            ", "
          )}`
        );
        event.target.value = "";
        event.target.type = "file";
      }
    }
  }


  // const confirmSubmit = () => {
  //   confirmAlert({
  //     title: 'Confirm to submit the ticket',
  //     message: 'Confirm to submit the ticket',
  //     buttons: [
  //       {
  //         label: 'Confirm',
  //         onClick: () => {
  //             if (!file) {
  //               alert("Please upload an image first!");
  //             }
  //             else{
  //               formik.handleSubmit();
  //             }
  //         }
  //       },
  //       {
  //         label: 'Back',
  //         onClick: () => {
  //           alert('Click No')
  //         }
  //       }
  //     ]
  //   });
  // }

  
  // Upload image to firebase storage
  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    } else {
      const storageRef = sRef(
        storage,
        `/formDataUpload/${file.name}_F${lastFormID + 1}.jpg`
      );
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
            set(ref(db, "formData/lastFormID"), lastFormID + 1)
              .then(() => {
                // Success
              })
              .catch((error) => {
                console.log(error);
              });
          });
        }
      );
    }
  };

  // sumbit form data to firebase realtime database using formik
  const formik = useFormik({
    initialValues: {
      fullName: "",
      mobileNo: "",
      email: "",
      club: "",
      position: "",
      LeoStatus: "",
    },

    onSubmit: (values, { resetForm }) => {
      resetForm({});
      // setLeoStatus("");

      const data = {
        fullName: values.fullName,
        mobileNo: values.mobileNo,
        email: values.email,
        club: club,
        verfied: false,
        imgURL: imgURL,
        position: values.position,
        LeoStatus: LeoStatus,
      };
      console.log(data);
      set(ref(db, "formData/" + "F" + (lastFormID + 1)), data)
        .then(() => {
          // Update last form ID by incrementing
          setImgURL();
          if (inputFile.current) {
            inputFile.current.value = "";
            inputFile.current.type = "file";
          }
        })
        .catch((error) => {
          console.log(error);
        });
      
      
      // setClub("");
      // setLeoStatus("");
      // setImgURL();

      alert(
        "Form submitted successfully! Admin will verify your details and send you a confirmation email soon."
      );
      setLastFormID(null);
      getLastFormID();
      
    },
  });

  return (
    <div className="formContainer">
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          {/* Full Name */}
          <div className="divName d">
            <div className="divLabName">
              <label className="LabName" htmlFor="firstName">
                Name
              </label>
            </div>
            <input
              className="InpName i"
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              required={true}
              minLength={3}
            />
          </div>

          {/* Mobile Number */}
          <div className="divMobile d">
            <div className="divLabMobile">
              <label className="LabMobile" htmlFor="mobileNo">
                Mobile Number
              </label>
            </div>
            <input
              className="InpMobile i"
              id="mobileNo"
              name="mobileNo"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.mobileNo}
              required={true}
              minLength={10}
            />
          </div>

          {/* Email */}
          <div className="divEmail d">
            <div className="divLabEmail">
              <label className="LabEmail" htmlFor="email">
                Email Address
              </label>
            </div>
            <input
              className="InpEmail i"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required={true}
            />
          </div>

          {/* Status */}
          <div className="LeoStatus d">
            <div className="leoStatus">
              <div>
                <input
                  type="radio"
                  id="a2"
                  name="LeoStatus"
                  value="A2 Leo"
                  required={true}
                  checked={LeoStatus === "A2 Leo"}
                  onChange={onStatusChange}
                />
                <label htmlFor="a2"> Leo from Leo District 306 A2</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="otherDis"
                  name="LeoStatus"
                  value="otherDis"
                  checked={LeoStatus === "otherDis"}
                  onChange={onStatusChange}
                />
                <label htmlFor="otherDis">
                  {" "}
                  Leo from Leo District 306 A1/B1/B2/C1/C2
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="lion"
                  name="LeoStatus"
                  value="Lion"
                  checked={LeoStatus === "Lion"}
                  onChange={onStatusChange}
                />
                <label htmlFor="lion"> Lion</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="non-leo"
                  name="LeoStatus"
                  value="Non-Leo"
                  checked={LeoStatus === "Non-Leo"}
                  onChange={onStatusChange}
                />
                <label htmlFor="non-leo"> Non-Leo</label>
              </div>
            </div>
          </div>

          {/* Club name - for A2 Leos */}

          <div className="divClub d">
            {LeoStatus === "A2 Leo" && (
              <div>
                <div className="divLabClub">
                  <label className="LabClub" htmlFor="club">
                    Club Name
                  </label>
                </div>

                <select
                  required={true}
                  name="club"
                  id="club"
                  defaultValue="def"
                  onChange={onClubChange}
                  value={club}
                >
                  <option value="def" disabled="disabled">
                    Select Your Club
                  </option>
                  <option value="Leo Club of Arrawala">
                    Leo Club of Arrawala
                  </option>
                  <option value="Leo Club of Baddegama">
                    Leo Club of Baddegama
                  </option>
                  <option value="Leo Club of Centennial Richmond College">
                    Leo Club of Centennial Richmond College
                  </option>
                  <option value="Leo Club of Colombo Monarch">
                    Leo Club of Colombo Monarch
                  </option>
                  <option value="Leo Club of Dehiwala East">
                    Leo Club of Dehiwala East
                  </option>
                  <option value="Leo Club of Deniyaya">
                    Leo Club of Deniyaya
                  </option>
                  <option value="Leo Club of Ethos International College">
                    Leo Club of Ethos International College
                  </option>
                  <option value="Leo Club of Godigamuwa">
                    Leo Club of Godigamuwa
                  </option>
                  <option value="Leo Club of Kalubowila">
                    Leo Club of Kalubowila
                  </option>
                  <option value="Leo Club of Kesbewa">
                    Leo Club of Kesbewa
                  </option>
                  <option value="Leo Club of Matara Marians">
                    Leo Club of Matara Marians
                  </option>
                  <option value="Leo Club of Matara Nilwala">
                    Leo Club of Matara Nilwala
                  </option>
                  <option value="Leo Club of Millaniya">
                    Leo Club of Millaniya
                  </option>
                  <option value="Leo Club of Panadura Alubomulla">
                    Leo Club of Panadura Alubomulla
                  </option>
                  <option value="Leo Club of Pepiliyana Woodlands">
                    Leo Club of Pepiliyana Woodlands
                  </option>
                  <option value="Leo Club of Piliyandala">
                    Leo Club of Piliyandala
                  </option>
                  <option value="Leo Club of Piliyandala Central College">
                    Leo Club of Piliyandala Central College
                  </option>
                  <option value="Leo Club of Polgasowita">
                    Leo Club of Polgasowita
                  </option>
                  <option value="Leo Club of Rahula College">
                    Leo Club of Rahula College
                  </option>
                  <option value="Leo Club of Raththanapitiya">
                    Leo Club of Raththanapitiya
                  </option>
                  <option value="Leo Club of Saegis Campus">
                    Leo Club of Saegis Campus
                  </option>
                  <option value="Leo Club of Sri Lanka Technological Campus">
                    Leo Club of Sri Lanka Technological Campus
                  </option>
                  <option value="Leo Club of Southern Metro">
                    Leo Club of Southern Metro
                  </option>
                  <option value="Leo Club of Sujatha Vidyalaya Matara">
                    Leo Club of Sujatha Vidyalaya Matara
                  </option>
                  <option value="Leo Club of St Thomas Girls School Matara">
                    Leo Club of St Thomas Girls School Matara
                  </option>
                  <option value="Leo Club of University of Moratuwa">
                    Leo Club of University of Moratuwa
                  </option>
                  <option value="Leo Club of University of Sri Jayewardenepura">
                    Leo Club of University of Sri Jayewardenepura
                  </option>
                  <option value="Leo Club of Uragasmanhandiya">
                    Leo Club of Uragasmanhandiya
                  </option>
                  <option value="Leo Club of Gampaha Wickramarachchi University of Indigenous Medicine">
                    Leo Club of Gampaha Wickramarachchi UOIM
                  </option>
                  <option value="Leo Club of Christ Church Boys' College">
                    Leo Club of Christ Church Boys' College
                  </option>
                  <option value="Leo Club of Horana Mid City">
                    Leo Club of Horana Mid City
                  </option>
                  <option value="Leo Club of Ingiriya United">
                    Leo Club of Ingiriya United
                  </option>
                  <option value="Leo Club of Werahera">
                    Leo Club of Werahera
                  </option>
                  <option value="Leo Club of Christ Church Girls' College">
                    Leo Club of Christ Church Girls' College
                  </option>
                  <option value="Leo Club of Mattegoda">
                    Leo Club of Mattegoda
                  </option>
                </select>
              </div>
            )}

            {/* Club name - for other leos */}

            {LeoStatus === "otherDis" && (
              <div>
                <div className="divLabClub">
                  <label className="LabClub" htmlFor="club">
                    Club Name
                  </label>
                </div>
                <input
                  className="InpClub i"
                  id="club"
                  name="club"
                  type="text"
                  onChange={onClubChange}
                  value={club}
                  required={true}
                  enabled
                />
              </div>
            )}
          </div>

          {/* Position - Only for Leos & Lions */}

          <div className="divPosi d">
            {(LeoStatus === "otherDis" ||
              LeoStatus === "A2 Leo" ||
              LeoStatus === "Lion") && (
              <div className="position">
                <label className="LabPosi" htmlFor="position">
                  Position
                </label>
                <input
                  className="InpClub i"
                  id="position"
                  name="position"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.position}
                  required={true}
                />
              </div>
            )}
          </div>

          {/* Upload Payment Image */}

          <div className="divFile d">
            <div className="divLabFile">
              <label className="LabFile" htmlFor="file">
                Upload Payment Proof Image
              </label>
            </div>

            <input
              className="InpFile"
              type="file"
              accept="image/*"
              onChange={handleImage}
              ref={inputFile}
            />

            {/* Upload Payamnet Image Button*/}
            <div className="divupload">
              {percent > 0 && (
                <p className="imgUploadp"> Image upload {percent}% Done</p>
              )}
              {!imgURL && lastFormID !== null && (
                <button
                  type="button"
                  className="upload-btn"
                  onClick={handleUpload}
                >
                  Upload Image
                </button>
              )}
            </div>

            {/* Submit Button */}
            <div className="divSubmit">
              {imgURL && (
                <button className="btn-submit" type="submit">
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormComp;
