"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const acceptedFileTypes = {
  "image/jpeg": [],
  "image/png": [],
  "image/jpg": [],
};

// Min size of 1MB
const minSize = 1048576;
// Max size of 5MB
const maxSize = 10242880;

const MiddleComponent: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState<string>("");
  const [fontSize, setFontSize] = useState<number>(16);
  const [fontColor, setFontColor] = useState<string>("#000000");
  const [textPosition, setTextPosition] = useState<TextPosition>({
    x: 50,
    y: 50,
  });

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    processImage(file);
  };

  const processImage = (file: File) => {
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const { fileRejections, getRootProps, getInputProps } = useDropzone({
    accept: acceptedFileTypes,
    maxSize,
    onDrop,
    minSize,
  });

  const handleTextPositionChange = (
    axis: keyof TextPosition,
    value: number
  ) => {
    setTextPosition((prevPosition) => ({
      ...prevPosition,
      [axis]: value,
    }));
  };

  const downloadImage = () => {
    const canvas = document.createElement("canvas");
    const img = new Image();
    img.src = image as string;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0);

        ctx.font = `${fontSize}px Arial`;
        ctx.fillStyle = fontColor;
        ctx.fillText(
          text,
          (textPosition.x * img.width) / 100,
          (textPosition.y * img.height) / 100
        );

        const downloadLink = document.createElement("a");
        downloadLink.href = canvas.toDataURL("image/png");
        downloadLink.download = "edited_image.png";
        downloadLink.click();
      }
    };
  };

  return (
    <div className="container mx-auto p-6">
      {/* Rejection error message */}
      {fileRejections.length ? (
        <div
          className="p-4 mb-4 mt-3 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">Error!!!</span>{" "}
          {fileRejections[0]?.errors[0]?.message}
        </div>
      ) : null}

      {/* Dropzone to browse or drag and drop image */}
      <div {...getRootProps()} className="border-2 border-dashed p-6">
        <input {...getInputProps()} />
        <p className="text-lg text-typography">
          Click or drag and drop an image here to upload.
        </p>
      </div>

      {/* The edited image preview and download button */}
      {image && (
        <div className="mt-8">
          <h3 className="text-lg font-medium text-typography">Text Overlay</h3>

          {/* Enter text section */}
          <div className="mt-4">
            <label className="font-medium text-typography">Text:</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text"
              className="mt-2 px-3 py-2  rounded-md w-full focus:outline-none "
            />
          </div>

          {/* Font Size Section */}
          <div className="mt-4">
            <label className="font-medium text-typography">Font Size:</label>
            <input
              type="number"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              min="1"
              className="mt-2 px-3 py-2  rounded-md w-full focus:outline-none"
            />
          </div>

          {/* Font color Section */}
          <div className="mt-4">
            <label
              htmlFor="fontColor"
              className="block text-typography font-medium"
            >
              Font Color:
            </label>
            <input
              type="color"
              id="fontColor"
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
              className="mt-2 px-3 py-2 rounded-md"
            />
          </div>

          {/* Positioning Section */}
          <div className="mt-4">
            <label htmlFor="textX" className="text-typography font-medium">
              Text X Position:
            </label>
            <input
              type="range"
              id="textX"
              value={textPosition.x}
              onChange={(e) =>
                handleTextPositionChange("x", parseInt(e.target.value, 10))
              }
              min="0"
              max="100"
              className="mt-2 w-full"
            />
            <span className="block mt-1 text-typography">
              {textPosition.x}%
            </span>
          </div>
          <div className="mt-4">
            <label htmlFor="textY" className="text-typography font-medium">
              Text Y Position:
            </label>
            <input
              type="range"
              id="textY"
              value={textPosition.y}
              onChange={(e) =>
                handleTextPositionChange("y", parseInt(e.target.value, 10))
              }
              min="0"
              max="100"
              className="mt-2 w-full"
            />
            <span className="block mt-1 text-typography">
              {textPosition.y}%
            </span>
          </div>

          {/* Edited Image Preview Section */}
          <div className="mt-4">
            <p className="font-medium text-typography">Preview:</p>
            <div
              className="relative max-w-full max-h-64 overflow-hidden mt-2"
              style={{ aspectRatio: "1/1" }}
            >
              <img src={image} alt="Uploaded" className="w-full h-full mt-4" />
              <div
                className="absolute"
                style={{
                  top: `${textPosition.y}%`,
                  left: `${textPosition.x}%`,
                  fontSize: `${fontSize}px`,
                  color: fontColor,
                }}
              >
                {text}
              </div>
            </div>
          </div>

          {/* Download Edited Image Button */}
          <div className="mt-4">
            <button
              onClick={downloadImage}
              className="bg-buttons font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                className="fill-primary w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span className="text-typography">Download Edited Image</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiddleComponent;
