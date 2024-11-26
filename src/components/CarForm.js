import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForm() {
  const dispatch = useDispatch();
   const name = useSelector((state) => state.form.name);
  const cost = useSelector((state) => state.form.cost);

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const carCost = event.target.value.trim() === '' ? 0 : parseInt(event.target.value);
    dispatch(changeCost(isNaN(carCost) ? 0 : carCost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     if (name.trim() === '' || cost === 0) {
      alert('Please provide both name and cost');
    } else {
       dispatch(addCar({ name, cost }));
       dispatch(changeCost(0));
       dispatch(changeName(''));
    }
    // Handle form submission logic (e.g., saving to a database)
  };

  return (
    <div className="car-form panel">
      <h2 className="subtitle is-3">Add Car</h2>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost !== undefined && cost !== null ? cost : ''}
              onChange={handleCostChange}
            />
          </div>
        </div>
              <div className="field">
            <button className="button is-link">Subit</button>
          </div>
      </form>
    </div>
  );
}

export default CarForm;
