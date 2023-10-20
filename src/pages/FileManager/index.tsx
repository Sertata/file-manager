import { ChangeEvent, FC, useState } from 'react';
import { FileInput } from './FileInput';

const FileManager: FC = () => {
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <div>
      <FileInput file={file} onFileChange={handleFileChange} />
    </div>
  );
};

export default FileManager;
