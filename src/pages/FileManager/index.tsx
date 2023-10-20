import { ChangeEvent, FC, useState, useEffect } from 'react';
import { FileInput } from './FileInput';
import { FileViewer } from './FileViewer';

const FileManager: FC = () => {
  const [file, setFile] = useState<File>();
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleDialogAction = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (open && file) {
      toBase64(file)
        .then((base64String) => {
          console.log(base64String);
        })
        .catch((e) => console.error(e));
    }
  }, [open, file]);
  return (
    <div>
      <FileInput file={file} onFileChange={handleFileChange} />
      <FileViewer onDialogAction={handleDialogAction} open={open} />
    </div>
  );
};

export default FileManager;
