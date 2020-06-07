import React, { useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrL = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrL);
    onFileUploaded(file);
  }, [onFileUploaded])

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

        {
          selectedFileUrl
            ? <img src={selectedFileUrl} alt="Point thumbnail" />
            : (
              <p>
                <FiUpload />
                Clique para adicionar a imagem do estabelecimento
              </p>
            )
        }
        
    </div>
  )
}

export default Dropzone;