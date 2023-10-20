import { ChangeEvent, FC, useState, useEffect } from 'react';
import { FileInput } from './FileInput';
import { FileViewer } from './FileViewer';
import { base64ToUint8Array, toBase64 } from './utils';

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
    let mockurl = '';
    if (open && file) {
      toBase64(file)
        .then((base64String) => {
          if (typeof base64String === 'string') {
            const base64Data = base64String.split(',')[1];
            const bytes = base64ToUint8Array(base64Data as string);
            const blob = new Blob([bytes], { type: 'application/pdf' });
            mockurl = window.URL.createObjectURL(blob);
            setUrl(mockurl);
          }
        })
        .catch((e) => console.error(e));
    }
    if (!open) {
      setUrl('');
      window.URL.revokeObjectURL(mockurl);
    }
  }, [open, file]);
  return (
    <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <FileInput file={file} onFileChange={handleFileChange} />
      <FileViewer onDialogAction={handleDialogAction} open={open} url={url} />
    </div>
  );
};

export default FileManager;
