import React from 'react';

const Form = (props) => (
  <div>
    <form>
      <label>
        Current Blood Glucose:
        <input type="text" />
      </label><br/>
      <label>
        Insulin/Carb Ratio:
        <input type="text" />
      </label><br/><br/>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default Form;