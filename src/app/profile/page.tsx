"use client";

import Navbar from "@/components/Navbar";
import axios from "axios";
import { FC, useState } from "react";

const Profile: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file) {
      setImageFile(file[0]);
    }
  };

  const handleSubmit = async () => {
    if (!imageFile) return;
    console.log(imageFile);
    const formData = new FormData();
    formData.append("file", imageFile, imageFile?.name);
    formData.append("uploudContext", "public-image");
    try {
      setIsLoading(true);
      const response = await axios.post("/v1/public/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("success");
      console.log(response);
    } catch (e) {
      alert(e);
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="pt-20 flex justify-center">
        <div className="text-black space-y-3">
          {isLoading ? <p>Loading..........</p> : <p>Upload image here</p>}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageSelection}
          ></input>
          <label htmlFor="fileInput">
            <button
              className="bg-blue-700 rounded-md p-2 text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </label>
        </div>
      </div>
    </>
  );
};

export default Profile;
