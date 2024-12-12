function Dishes() {
    let dishes = [
      {
        id: 101,
        dishName: "Pizza",
        price: 45,
      },
      {
        id: 102,
        dishName: "Burger",
        price: 50,
      },
      {
        id: 103,
        dishName: "Sushi",
        price: 65,
      },
      {
        id: 104,
        dishName: "Pasta",
        price: 40,
      },
      {
        id: 105,
        dishName: "Salad",
        price: 30,
      },
      {
        id: 106,
        dishName: "Stake",
        price: 90,
      },
      {
        id: 107,
        dishName: "Soup",
        price: 25,
      },
      {
        id: 108,
        dishName: "Dessert",
        price: 35,
      },
    ];
  
    function youClicked(dishName) {
      alert("You Clicked " + dishName);
    }
    return (
      <>
        <h1>{dishes[6].dishName}</h1>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Dish</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish) => (
            <tr>
              <td>{dish.id}</td>
              <td>{dish.dishName}</td>
              <td>{dish.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{dishes[5].dishName}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              youClicked(dishes[5].dishName);
            }}
          >
            Click me
          </button>
          </div>
      </div>
    </>
  );
}

export default Dishes;