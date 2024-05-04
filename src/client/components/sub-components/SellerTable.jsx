const SellerTable = ({name}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      
        <div style={{ marginBottom: '10px' }}>
          <strong>Username: </strong> {name}
          <br />
          <strong>Phone: </strong> +123456789
          <br />
          <strong>Rating: </strong> 4/5
          <br />
        </div>
      
    </div>
  );
};

export default SellerTable;
