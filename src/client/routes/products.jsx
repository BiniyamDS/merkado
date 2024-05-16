import LoadingButton from "../components/LoadingButton"

const Products = () => {
  return (
    <div>Products
      <LoadingButton handleAction={() => logout()}>Log out</LoadingButton>
    </div>
  )
}

export default Products