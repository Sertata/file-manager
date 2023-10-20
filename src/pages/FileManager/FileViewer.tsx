import { FC } from 'react';

interface FileViewerProps {
  onDialogAction: () => void;
  open: boolean;
  url: string;
}

export const FileViewer: FC<FileViewerProps> = (props) => {
  const { onDialogAction, open, url } = props;
  return (
    <>
      <div style={{}}>
        <button onClick={onDialogAction}>{`${open ? 'Close' : 'Watch'}`}</button>

        <dialog open={open}>
          <div>Dialog open</div>
          {url && <iframe src={url} style={{ width: '500px', height: '500px' }} />}
          {!url && <span>no file</span>}
        </dialog>
      </div>
    </>
  );
};
