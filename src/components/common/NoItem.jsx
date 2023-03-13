const NoItem = ({ lookingItem }) => {
  return (
    <div className="no_item">
      <h3>{` Sorry, but the product "${lookingItem}" that you are looking for, is not on our data.`}</h3>
    </div>
  );
};

export default NoItem;
