import { FC } from 'react';

interface FileViewerProps {
  onWatchClick: () => void;
}

export const FileViewer: FC<FileViewerProps> = (props) => {
  const { onWatchClick } = props;
  return (
    <div>
      <button onClick={onWatchClick}>Watch</button>
    </div>
  );
};
