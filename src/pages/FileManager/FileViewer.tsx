import { FC } from 'react';

interface FileViewerProps {
  onDialogAction: () => void;
  open: boolean;
}

export const FileViewer: FC<FileViewerProps> = (props) => {
  const { onDialogAction, open } = props;
  return (
    <div>
      <button onClick={onDialogAction}>{`${open ? 'Close' : 'Watch'}`}</button>
      <dialog>
        <iframe />
      </dialog>
    </div>
  );
};
