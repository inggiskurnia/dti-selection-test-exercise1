"use client";

import Navbar from "@/components/Navbar";
import axios from "axios";
import { FC, useState } from "react";

const Profile: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImageSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file) {
      setImageFile(file[0]);
    }
  };

  const handleSubmit = async () => {
    if (!imageFile) return;
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("uploadContext", "public-images");
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://api.sepasangselamanya.tech/api/v1/public/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("success");
      setImageUrl(response.data.data);
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
          {imageUrl && (
            <div>
              <p>Image Url</p>
              <p>{imageUrl}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
