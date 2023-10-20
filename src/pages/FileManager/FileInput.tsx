import { ChangeEvent, FC } from 'react';

interface FileInputProps {
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  file?: File;
}
export const FileInput: FC<FileInputProps> = (props) => {
  const { onFileChange, file } = props;
  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <div>{file ? `${file.name} - ${file.type}` : 'No select file'}</div>
    </div>
  );
};
