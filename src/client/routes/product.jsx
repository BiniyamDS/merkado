import {useLocation} from 'react-router-dom'
import Content from '../components/Content'

const Product = () => {
  const location = useLocation()
  const item = location.state
  return (
    <div className='flex'>
      <Content item={item}/>
    </div>
  )
}

export default Product