import { useEffect, useState } from "react";
import { listFilesFromBucket, uploadFileToBucket } from "../services/storage";

const initialState = {
  filePath: "",
  file: null,
}

const useFile = (bucketId) => {
  const [files, setFiles] = useState([]);
  const [fileData, setFileData] = useState(initialState);

  useEffect(() => {
    listFilesFromBucket(bucketId).then((response) => {
      const formattedFiles = response.map((file) => {
        const {
          id,
          metadata: { mimetype },
          name,
        } = file;
        return {
          id,
          mimetype,
          name,
        };
      });
      setFiles(formattedFiles);
    });
  }, []);

  const uploadFile = async (e) => {
    try {
      if (!e.target.files || e.target.files.length === 0) {
        throw new Error("No file selected");
      }
      const file = e.target.files[0];
      const fileName = file.name;
      setFileData({
        filePath: fileName,
        file,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const saveFile = async (e) => {
    e.preventDefault();
    const { filePath, file } = fileData;
    await uploadFileToBucket(bucketId, filePath, file);
    const { name, type: mimetype, lastModified: id } = file;
    setFiles((prevFiles) => [...prevFiles, { id, name, mimetype }]);
    setFileData(initialState);
  };

  return {
    files,
    uploadFile,
    saveFile,
  };
};

export default useFile;
