import LoadingButton from "../components/LoadingButton"
import { useAuth } from "../contexts/AuthContext"

const Products = () => {
  const {logout} = useAuth()
  return (
    <div>Products
      <LoadingButton handleAction={() => logout()}>Log out</LoadingButton>
    </div>
  )
}

export default Products