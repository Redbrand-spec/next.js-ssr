import { Icon, message } from 'antd'

/* памятка что импортировать 
  через хуки

   /// imafeloader
    const [ loading , setLoading ] = useState( false )
    const [ imageUrl, setimageUrl] = useState()
    const [ image , setImage] = useState()
  ///

  <Upload 
    name="avatar"
    listType="picture-card"
    className="avatar-uploader"
    showUploadList={false}
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    beforeUpload={(e) => beforeUpload(e)}
    onChange={(e) => handleChange(e, setLoading, setimageUrl,  setImage)}
  >
    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton( loading )}
  </Upload>
  
*/
export const FileLoader = () => {

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Вы можете зарузить тока JPG/PNG файл!');
    }
    const isLt2M = file.size / 1024 / 1024 < 1;
    if (!isLt2M) {
      message.error('Картинка должна быть меньше 1MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = (info, setLoading , setimageUrl, setImage) => {
    if (info.file.status === 'uploading') {
      setLoading( true )
      return
    }
    if (info.file.status === 'done') {
      setImage(info.file.originFileObj)
      getBase64(info.file.originFileObj, imageUrl =>
        setimageUrl( imageUrl ),
        setLoading( false ),
      )
    }
  }

  const uploadButton = (loading) => (
    <div>
      <Icon type={ loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">Загрузить</div>
    </div>
  )
    
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  return{ beforeUpload, handleChange, uploadButton }

}

